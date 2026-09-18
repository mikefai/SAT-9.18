(function () {
  "use strict";

  const state = {
    section: "home", // 'home' | 'rw' | 'math'
    index: { rw: 0, math: 0 },
    answers: { rw: {}, math: {} }, // id -> selected choice index
    filter: { rw: "All", math: "All" },
  };

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem("satPrepState") || "null");
      if (saved) {
        if (saved.index) Object.assign(state.index, saved.index);
        if (saved.answers) Object.assign(state.answers, saved.answers);
      }
    } catch (e) { /* ignore corrupt/unavailable storage */ }
  }
  function saveState() {
    try {
      localStorage.setItem("satPrepState", JSON.stringify({ index: state.index, answers: state.answers }));
    } catch (e) { /* storage unavailable; progress just won't persist */ }
  }

  const app = document.getElementById("app");
  const topbarActions = document.getElementById("topbarActions");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function openModal(title, bodyHtml) {
    modalTitle.textContent = title;
    modalBody.innerHTML = bodyHtml;
    modalBackdrop.classList.add("open");
  }
  function closeModal() { modalBackdrop.classList.remove("open"); }
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => { if (e.target === modalBackdrop) closeModal(); });
  document.getElementById("homeBtn").addEventListener("click", () => { state.section = "home"; render(); });

  function getData(section) { return section === "math" ? MATH_QUESTIONS : RW_QUESTIONS; }

  function getFiltered(section) {
    const data = getData(section);
    const cat = state.filter[section];
    return cat === "All" ? data : data.filter((q) => q.category === cat);
  }

  function getCategories(section) {
    return ["All", ...Array.from(new Set(getData(section).map((q) => q.category)))];
  }

  function countByCategory(section) {
    const out = {};
    getData(section).forEach((q) => { out[q.category] = (out[q.category] || 0) + 1; });
    return out;
  }

  function scoreFor(section) {
    const data = getData(section);
    const answers = state.answers[section];
    let correct = 0, answered = 0;
    data.forEach((q) => {
      if (answers[q.id] !== undefined) {
        answered++;
        if (answers[q.id] === q.correctIndex) correct++;
      }
    });
    return { correct, answered, total: data.length };
  }

  function highlightVocab(text) {
    if (!text) return "";
    const escaped = escapeHtml(text);
    const words = VOCAB_GLOSSARY.map((v) => v.word).sort((a, b) => b.length - a.length);
    const re = new RegExp(`\\b(${words.join("|")})\\b`, "gi");
    return escaped.replace(re, (m) => `<span class="vocab-word" data-word="${m.toLowerCase()}">${m}</span>`);
  }

  function render() {
    topbarActions.innerHTML = "";
    if (state.section === "home") renderHome();
    else renderPractice(state.section);
  }

  function renderHome() {
    const rwScore = scoreFor("rw");
    const mathScore = scoreFor("math");
    const rwCats = countByCategory("rw");
    const mathCats = countByCategory("math");
    const catSpans = (cats) => Object.entries(cats).map(([c, n]) => `<span>${escapeHtml(c)}: ${n}</span>`).join("");
    app.innerHTML = `
      <div class="hero">
        <h1>SAT Practice</h1>
        <p>100 Reading &amp; Writing questions and 100 Math questions &mdash; with vocabulary help, built-in formulas, Turkish translations, and full solution steps.</p>
      </div>
      <div class="mode-grid">
        <button class="mode-card" id="cardRw" type="button">
          <span class="tag">Reading &amp; Writing</span>
          <h2>100 Questions</h2>
          <p>Vocabulary in context, transitions, punctuation, grammar &amp; usage, rhetorical synthesis, and reading comprehension &mdash; with click-to-define vocabulary help throughout.</p>
          <div class="progress-line">${rwScore.answered}/${rwScore.total} answered &middot; ${rwScore.correct} correct</div>
          <div class="cat-breakdown">${catSpans(rwCats)}</div>
        </button>
        <button class="mode-card" id="cardMath" type="button">
          <span class="tag">Math</span>
          <h2>100 Questions</h2>
          <p>Algebra, advanced math, problem-solving &amp; data analysis, and geometry &amp; trigonometry &mdash; with a built-in formula sheet, hidden Turkish translations, and hidden step-by-step solutions.</p>
          <div class="progress-line">${mathScore.answered}/${mathScore.total} answered &middot; ${mathScore.correct} correct</div>
          <div class="cat-breakdown">${catSpans(mathCats)}</div>
        </button>
      </div>
    `;
    document.getElementById("cardRw").addEventListener("click", () => { state.section = "rw"; render(); });
    document.getElementById("cardMath").addEventListener("click", () => { state.section = "math"; render(); });
  }

  function renderPractice(section) {
    const filtered = getFiltered(section);
    if (state.index[section] >= filtered.length) state.index[section] = 0;
    const q = filtered[state.index[section]];
    const score = scoreFor(section);
    const cats = getCategories(section);
    const pct = Math.round(((state.index[section] + 1) / filtered.length) * 100);

    topbarActions.innerHTML = section === "math"
      ? `<button class="btn" id="formulaBtn" type="button">Formulas</button>`
      : `<button class="btn" id="vocabBtn" type="button">Vocabulary List</button>`;
    if (section === "math") document.getElementById("formulaBtn").addEventListener("click", openFormulaModal);
    else document.getElementById("vocabBtn").addEventListener("click", openVocabModal);

    app.innerHTML = `
      <div class="practice-bar">
        <div class="left">
          <select class="select-ctl" id="catSelect">
            ${cats.map((c) => `<option value="${escapeHtml(c)}" ${c === state.filter[section] ? "selected" : ""}>${escapeHtml(c)}</option>`).join("")}
          </select>
          <select class="select-ctl" id="jumpSelect">
            ${filtered.map((qq, i) => `<option value="${i}" ${i === state.index[section] ? "selected" : ""}>Question ${i + 1}</option>`).join("")}
          </select>
        </div>
        <div class="score-pill">Score: <b>${score.correct}</b> / ${score.answered} answered (${score.total} total)</div>
      </div>
      <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      <div class="q-card" id="qCard"></div>
      <div class="nav-row">
        <button class="btn" id="prevBtn" type="button" ${state.index[section] === 0 ? "disabled" : ""}>&larr; Previous</button>
        <span class="spacer"></span>
        <button class="btn btn-primary" id="nextBtn" type="button" ${state.index[section] === filtered.length - 1 ? "disabled" : ""}>Next &rarr;</button>
      </div>
    `;

    document.getElementById("catSelect").addEventListener("change", (e) => {
      state.filter[section] = e.target.value;
      state.index[section] = 0;
      render();
    });
    document.getElementById("jumpSelect").addEventListener("change", (e) => {
      state.index[section] = Number(e.target.value);
      render();
    });
    document.getElementById("prevBtn").addEventListener("click", () => { state.index[section]--; render(); });
    document.getElementById("nextBtn").addEventListener("click", () => { state.index[section]++; render(); });

    renderQuestionCard(section, q, filtered.length);
  }

  function renderExtras(section, q) {
    if (section === "math") {
      return `
        <div class="extras">
          <button class="btn btn-turkish" type="button" data-toggle="turkish">Turkish Translation</button>
          <button class="btn btn-steps" type="button" data-toggle="steps">Solution Steps</button>
        </div>
        <div class="extra-panel turkish" data-panel="turkish">${escapeHtml(q.promptTr)}</div>
        <div class="extra-panel steps" data-panel="steps"><ol>${q.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ol></div>
      `;
    }
    if (q.vocab && q.vocab.length) {
      const v = q.vocab[0];
      return `
        <div class="extras">
          <button class="btn btn-turkish" type="button" data-toggle="define">Define: ${escapeHtml(v.word)}</button>
        </div>
        <div class="extra-panel turkish" data-panel="define"><b>${escapeHtml(v.word)}</b> &mdash; ${escapeHtml(v.definition)}</div>
      `;
    }
    return "";
  }

  function renderQuestionCard(section, q, filteredTotal) {
    const card = document.getElementById("qCard");
    const isMath = section === "math";
    const answered = state.answers[section][q.id];
    const letters = ["A", "B", "C", "D"];
    const passageHtml = !isMath && q.passage ? `<div class="q-passage">${highlightVocab(q.passage)}</div>` : "";
    const promptText = isMath ? q.prompt : q.question;

    card.innerHTML = `
      <div class="q-meta">
        <span class="q-badge">${escapeHtml(q.category)}</span>
        <span class="q-number">Question ${state.index[section] + 1} of ${filteredTotal}</span>
      </div>
      ${passageHtml}
      <p class="q-prompt">${escapeHtml(promptText)}</p>
      <div class="choice-list">
        ${q.choices.map((c, i) => {
          let cls = "choice-btn";
          if (answered !== undefined) {
            if (i === q.correctIndex) cls += " correct";
            else if (i === answered) cls += " incorrect";
          }
          return `<button class="${cls}" type="button" data-index="${i}" ${answered !== undefined ? "disabled" : ""}>
            <span class="letter">${letters[i]}</span><span>${escapeHtml(c)}</span>
          </button>`;
        }).join("")}
      </div>
      ${answered !== undefined
        ? `<div class="feedback-line ${answered === q.correctIndex ? "correct" : "incorrect"}">${answered === q.correctIndex ? "Correct!" : "Not quite — the correct answer is highlighted above."}</div>`
        : ""}
      ${renderExtras(section, q)}
    `;

    card.querySelectorAll(".choice-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.answers[section][q.id] !== undefined) return;
        state.answers[section][q.id] = Number(btn.dataset.index);
        saveState();
        render();
      });
    });
    card.querySelectorAll("[data-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const panel = card.querySelector(`[data-panel="${btn.dataset.toggle}"]`);
        if (panel) panel.classList.toggle("open");
      });
    });
    card.querySelectorAll(".vocab-word").forEach((el) => {
      el.addEventListener("click", (e) => { e.stopPropagation(); showVocabPopover(el); });
    });
  }

  let activePopover = null;
  function removePopover() {
    if (activePopover) { activePopover.remove(); activePopover = null; }
  }
  function showVocabPopover(el) {
    removePopover();
    const entry = VOCAB_GLOSSARY.find((v) => v.word.toLowerCase() === el.dataset.word.toLowerCase());
    if (!entry) return;
    const rect = el.getBoundingClientRect();
    const pop = document.createElement("div");
    pop.className = "vocab-popover";
    pop.innerHTML = `<b>${escapeHtml(entry.word)}</b>: ${escapeHtml(entry.definition)}`;
    document.body.appendChild(pop);
    const maxLeft = window.innerWidth - pop.offsetWidth - 12;
    pop.style.top = `${rect.bottom + 8}px`;
    pop.style.left = `${Math.max(12, Math.min(rect.left, maxLeft))}px`;
    activePopover = pop;
  }
  document.addEventListener("click", (e) => {
    if (activePopover && !e.target.closest(".vocab-popover") && !e.target.closest(".vocab-word")) removePopover();
  });

  function openVocabModal() {
    openModal("Vocabulary Helper", `
      <input type="text" class="vocab-search" id="vocabSearch" placeholder="Search words or definitions...">
      <div id="vocabListBody"></div>
    `);
    const renderList = (query) => {
      const q = query.trim().toLowerCase();
      const list = VOCAB_GLOSSARY
        .filter((v) => !q || v.word.toLowerCase().includes(q) || v.definition.toLowerCase().includes(q))
        .sort((a, b) => a.word.localeCompare(b.word));
      document.getElementById("vocabListBody").innerHTML =
        list.map((v) => `<div class="vocab-list-item"><b>${escapeHtml(v.word)}</b> &mdash; ${escapeHtml(v.definition)}</div>`).join("") ||
        "<p>No matches.</p>";
    };
    renderList("");
    document.getElementById("vocabSearch").addEventListener("input", (e) => renderList(e.target.value));
  }

  function openFormulaModal() {
    openModal("Formula Reference", `
      <div class="formula-grid">
        <div class="formula-group">
          <h3>Area &amp; Circumference</h3>
          <ul>
            <li>Rectangle: A = l &times; w</li>
            <li>Triangle: A = &frac12; &times; b &times; h</li>
            <li>Circle: A = &pi;r&sup2;, C = 2&pi;r</li>
            <li>Parallelogram: A = b &times; h</li>
            <li>Trapezoid: A = &frac12;(b&#8321; + b&#8322;)h</li>
          </ul>
        </div>
        <div class="formula-group">
          <h3>Volume</h3>
          <ul>
            <li>Rectangular prism: V = l &times; w &times; h</li>
            <li>Cylinder: V = &pi;r&sup2;h</li>
            <li>Sphere: V = (4/3)&pi;r&sup3;</li>
            <li>Cone: V = &frac13;&pi;r&sup2;h</li>
            <li>Pyramid: V = &frac13; &times; base area &times; h</li>
          </ul>
        </div>
        <div class="formula-group">
          <h3>Triangles</h3>
          <ul>
            <li>Pythagorean theorem: a&sup2; + b&sup2; = c&sup2;</li>
            <li>Sum of interior angles = 180&deg;</li>
            <li>45-45-90 triangle: legs x, x; hypotenuse x&radic;2</li>
            <li>30-60-90 triangle: sides x, x&radic;3, 2x</li>
          </ul>
        </div>
        <div class="formula-group">
          <h3>Lines &amp; Coordinate Geometry</h3>
          <ul>
            <li>Slope: m = (y&#8322; &minus; y&#8321;) / (x&#8322; &minus; x&#8321;)</li>
            <li>Slope-intercept form: y = mx + b</li>
            <li>Midpoint: ((x&#8321;+x&#8322;)/2, (y&#8321;+y&#8322;)/2)</li>
            <li>Distance: d = &radic;[(x&#8322;&minus;x&#8321;)&sup2; + (y&#8322;&minus;y&#8321;)&sup2;]</li>
          </ul>
        </div>
        <div class="formula-group">
          <h3>Algebra</h3>
          <ul>
            <li>Quadratic formula: x = (&minus;b &plusmn; &radic;(b&sup2; &minus; 4ac)) / 2a</li>
            <li>Exponents: x<sup>a</sup>&middot;x<sup>b</sup> = x<sup>a+b</sup>, (x<sup>a</sup>)<sup>b</sup> = x<sup>ab</sup></li>
            <li>Difference of squares: a&sup2; &minus; b&sup2; = (a+b)(a&minus;b)</li>
          </ul>
        </div>
      </div>
    `);
  }

  loadState();
  render();
})();
