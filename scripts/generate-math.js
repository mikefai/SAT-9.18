// Generates data/math-questions.js: 100 SAT-style math questions.
// Numbers are constructed forward (answer chosen first, "givens" derived from it),
// and the answer itself is always computed by this script - never typed by hand -
// so every question is guaranteed arithmetically correct.

function sgn(n) { return n >= 0 ? `+ ${n}` : `- ${Math.abs(n)}`; }
function linearExprStr(a, b) { return b === 0 ? `${a}x` : `${a}x ${sgn(b)}`; }
function quadExprStr(b, c) {
  let s = 'x²';
  if (b !== 0) {
    const coef = Math.abs(b) === 1 ? '' : `${Math.abs(b)}`;
    s += ` ${b >= 0 ? '+' : '-'} ${coef}x`;
  }
  if (c !== 0) s += ` ${sgn(c)}`;
  return s;
}
function factorTerm(r) { return r >= 0 ? `x - ${r}` : `x + ${-r}`; }
function sumTermsStr(nums) {
  return nums.map((n, i) => (i === 0 ? `${n}` : (n >= 0 ? ` + ${n}` : ` - ${Math.abs(n)}`))).join('');
}
function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }
function reduceFrac(num, den) { if (den < 0) { num = -num; den = -den; } const g = gcd(num, den); return [num / g, den / g]; }
function fracStr(num, den) { const [n, d] = reduceFrac(num, den); return d === 1 ? `${n}` : `${n}/${d}`; }

function makeChoices(correct, distractors) {
  const seen = new Set([String(correct)]);
  const uniq = [];
  for (const d of distractors) {
    const s = String(d);
    if (!seen.has(s)) { seen.add(s); uniq.push(d); }
  }
  let filler = 1;
  while (uniq.length < 3) {
    const cand = `${correct}~${filler}`;
    if (!seen.has(cand)) { seen.add(cand); uniq.push(cand); }
    filler++;
  }
  const all = [correct, ...uniq.slice(0, 3)];
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return { choices: all.map(String), correctIndex: all.findIndex((v) => v === correct) };
}

const questions = [];
function add(category, prompt, promptTr, correct, distractors, steps) {
  const { choices, correctIndex } = makeChoices(correct, distractors);
  questions.push({ category, prompt, promptTr, choices, correctIndex, steps });
}

// ---------- T1: two-step linear equation (Algebra) ----------
[[3, 5, 4], [4, 8, -7], [6, 7, 10], [2, 13, 15], [7, 9, -4]].forEach(([a, x, b]) => {
  const c = a * x + b;
  add('Algebra',
    `If ${linearExprStr(a, b)} = ${c}, what is the value of x?`,
    `${linearExprStr(a, b)} = ${c} ise, x'in değeri kaçtır?`,
    x,
    [Math.round(c / a), -x, x + 3],
    [
      b >= 0 ? `Subtract ${b} from both sides: ${a}x = ${c - b}` : `Add ${-b} to both sides: ${a}x = ${c - b}`,
      `Divide both sides by ${a}: x = ${x}`,
    ]);
});

// ---------- T2: distributive equation (Algebra) ----------
[[3, 4, 2], [5, 6, -3], [2, 10, 7], [4, 5, -1], [6, 3, 5]].forEach(([a, x, b]) => {
  const c = a * (x + b);
  const inner = b >= 0 ? `x + ${b}` : `x - ${Math.abs(b)}`;
  add('Algebra',
    `If ${a}(${inner}) = ${c}, what is the value of x?`,
    `${a}(${inner}) = ${c} ise, x'in değeri kaçtır?`,
    x,
    [x + b, -x, x - 2],
    [
      `Divide both sides by ${a}: ${inner} = ${c / a}`,
      b >= 0 ? `Subtract ${b} from both sides: x = ${x}` : `Add ${Math.abs(b)} to both sides: x = ${x}`,
    ]);
});

// ---------- T3: system of equations (Algebra) ----------
[[10, 4], [7, 9], [15, 3], [6, 11], [20, 5]].forEach(([x, y]) => {
  const s = x + y, d = x - y;
  add('Algebra',
    `If x + y = ${s} and x - y = ${d}, what is the value of x?`,
    `x + y = ${s} ve x - y = ${d} ise, x'in değeri kaçtır?`,
    x,
    [y, s + d, -x],
    [
      `Add the two equations: 2x = ${s + d}`,
      `Divide both sides by 2: x = ${x}`,
    ]);
});

// ---------- T4: percent of a number (Problem-Solving & Data Analysis) ----------
const trPercentSuffix = { 5: "'i", 10: "'u", 15: "'i", 20: "'si", 25: "'i", 30: "'u", 40: "'ı", 50: "'si", 60: "'ı", 75: "'i" };
[[80, 25], [40, 10], [120, 5], [60, 20], [200, 15]].forEach(([n, p]) => {
  const answer = (p * n) / 100;
  add('Problem-Solving & Data Analysis',
    `What is ${p}% of ${n}?`,
    `${n} sayısının %${p}${trPercentSuffix[p]} kaçtır?`,
    answer,
    [n - answer, answer * 10, p],
    [
      `Convert ${p}% to a decimal: ${p}/100 = ${p / 100}`,
      `Multiply: ${p / 100} × ${n} = ${answer}`,
    ]);
});

// ---------- T5: percentage increase (Problem-Solving & Data Analysis) ----------
[[140, 20], [60, 30], [220, 15], [90, 40], [340, 5]].forEach(([n, p]) => {
  const inc = (p * n) / 100, np = n + inc;
  add('Problem-Solving & Data Analysis',
    `A store item that costs $${n} increases in price by ${p}%. What is the new price?`,
    `${n} dolarlık bir ürünün fiyatı %${p} artıyor. Yeni fiyat kaç dolar olur?`,
    np,
    [inc, n - inc, np + 10],
    [
      `Find ${p}% of ${n}: (${p}/100) × ${n} = ${inc}`,
      `Add the increase to the original price: ${n} + ${inc} = ${np}`,
    ]);
});

// ---------- T6: ratio / proportion (Problem-Solving & Data Analysis) ----------
[[2, 3, 4], [3, 5, 5], [4, 7, 3], [5, 2, 6], [7, 5, 3]].forEach(([p, q, k]) => {
  const a = p, b = q, c = q * k, x = p * k;
  add('Problem-Solving & Data Analysis',
    `If ${a}/${b} = x/${c}, what is the value of x?`,
    `${a}/${b} = x/${c} ise, x kaçtır?`,
    x,
    [a * c, c - a, Math.round((b * c) / a)],
    [
      `Cross-multiply: ${a} × ${c} = ${b} × x`,
      `${a * c} = ${b}x`,
      `Divide both sides by ${b}: x = ${x}`,
    ]);
});

// ---------- T7: quadratic factoring (Advanced Math) ----------
[[2, 5], [-3, 4], [-2, 7], [3, -8], [-5, -6]].forEach(([r1, r2]) => {
  const b = -(r1 + r2), c = r1 * r2;
  const quad = quadExprStr(b, c);
  add('Advanced Math',
    `What are the solutions to ${quad} = 0?`,
    `${quad} = 0 denkleminin çözümleri nelerdir?`,
    `x = ${r1} or x = ${r2}`,
    [`x = ${-r1} or x = ${-r2}`, `x = ${r1} or x = ${-r2}`, `x = ${-r1} or x = ${r2}`],
    [
      `Factor: (${factorTerm(r1)})(${factorTerm(r2)}) = 0`,
      `Set each factor equal to zero: ${factorTerm(r1)} = 0 or ${factorTerm(r2)} = 0`,
      `Solve each equation: x = ${r1} or x = ${r2}`,
    ]);
});

// ---------- T8: Vieta's - product of roots (Advanced Math) ----------
[[3, 4], [-2, 10], [5, 6], [-4, -7], [2, -9]].forEach(([r1, r2]) => {
  const s = r1 + r2, p = r1 * r2, b = -s;
  const quad = quadExprStr(b, p);
  add('Advanced Math',
    `If the solutions to ${quad} = 0 are r and t, what is the value of r × t?`,
    `${quad} = 0 denkleminin kökleri r ve t ise, r × t kaçtır?`,
    p,
    [s, -p, b],
    [
      `For an equation of the form x² + Bx + C = 0, the product of the solutions equals C.`,
      `Here C = ${p}, so r × t = ${p}.`,
    ]);
});

// ---------- T9: exponent rules (Advanced Math) ----------
[[3, 4], [4, 2], [3, 5], [6, 4], [2, 7]].forEach(([a, b]) => {
  add('Advanced Math',
    `Which expression is equivalent to x^${a} · x^${b}?`,
    `x^${a} · x^${b} ifadesine eşit olan ifade hangisidir?`,
    `x^${a + b}`,
    [`x^${a * b}`, `x^${a + b + 1}`, `x^${a + b - 1}`],
    [
      `Use the product rule for exponents: x^m · x^n = x^(m + n)`,
      `Add the exponents: ${a} + ${b} = ${a + b}`,
      `So the expression simplifies to x^${a + b}`,
    ]);
});

// ---------- T10: slope between two points (Algebra) ----------
[[1, 2, 3, 6], [0, -1, 4, 2], [-2, 5, 5, -10], [2, -3, 6, 9], [-1, -4, 4, -12]].forEach(([x1, y1, dx, dy]) => {
  const x2 = x1 + dx, y2 = y1 + dy;
  const [n, d] = reduceFrac(y2 - y1, x2 - x1);
  const correct = fracStr(y2 - y1, x2 - x1);
  add('Algebra',
    `What is the slope of the line that passes through the points (${x1}, ${y1}) and (${x2}, ${y2})?`,
    `(${x1}, ${y1}) ve (${x2}, ${y2}) noktalarından geçen doğrunun eğimi kaçtır?`,
    correct,
    [fracStr(d, n), fracStr(-n, d), fracStr(n + 1, d)],
    [
      `Use the slope formula: m = (y2 − y1) / (x2 − x1)`,
      `m = (${y2} − ${y1}) / (${x2} − ${x1}) = ${y2 - y1}/${x2 - x1}`,
      `Simplify: m = ${correct}`,
    ]);
});

// ---------- T11: slope-intercept, find y-intercept (Algebra) ----------
[[3, 2, 10], [-2, 5, 1], [4, -3, -5], [-1, 6, 2], [5, -2, -13]].forEach(([m, x1, y1]) => {
  const b = y1 - m * x1;
  add('Algebra',
    `A line has a slope of ${m} and passes through the point (${x1}, ${y1}). What is the y-intercept of the line?`,
    `Eğimi ${m} olan ve (${x1}, ${y1}) noktasından geçen doğrunun y ekseni ile kesim noktası kaçtır?`,
    b,
    [y1, m * x1 + y1, -b],
    [
      `Use slope-intercept form: y = mx + b`,
      `Substitute the point and slope: ${y1} = ${m}(${x1}) + b`,
      `Solve for b: b = ${y1} − (${m * x1}) = ${b}`,
    ]);
});

// ---------- T12: linear function evaluation (Algebra) ----------
[[3, 4, 5], [-2, 7, 3], [5, -6, 4], [4, 2, -3], [-3, -1, -2]].forEach(([a, b, c]) => {
  const answer = a * c + b;
  add('Algebra',
    `If f(x) = ${linearExprStr(a, b)}, what is f(${c})?`,
    `f(x) = ${linearExprStr(a, b)} ise, f(${c}) kaçtır?`,
    answer,
    [a * c, a * (c + b), a + c + b],
    [
      `Substitute x = ${c}: f(${c}) = ${sumTermsStr([a * c, b])}`,
      `Calculate: ${a * c} ${sgn(b)} = ${answer}`,
    ]);
});

// ---------- T13: quadratic function evaluation (Advanced Math) ----------
[[2, 1, 3], [-3, 5, 2], [4, -2, -1], [-1, -6, 4], [5, 3, -2]].forEach(([b, c, d]) => {
  const answer = d * d + b * d + c;
  add('Advanced Math',
    `If f(x) = ${quadExprStr(b, c)}, what is f(${d})?`,
    `f(x) = ${quadExprStr(b, c)} ise, f(${d}) kaçtır?`,
    answer,
    [d * d + c, b * d + c, -answer],
    [
      `Substitute x = ${d}: f(${d}) = (${d})² ${sgn(b)}(${d}) ${sgn(c)}`,
      `Calculate each term: ${sumTermsStr([d * d, b * d, c])} = ${answer}`,
    ]);
});

// ---------- T14: area of a rectangle (Geometry & Trigonometry) ----------
[[12, 5], [9, 7], [14, 6], [11, 8], [13, 4]].forEach(([l, w]) => {
  const area = l * w;
  add('Geometry & Trigonometry',
    `A rectangle has a length of ${l} and a width of ${w}. What is its area?`,
    `Bir dikdörtgenin uzun kenarı ${l}, kısa kenarı ${w} ise, alanı kaç birim karedir?`,
    area,
    [2 * (l + w), l + w, 2 * l * w],
    [
      `Use the area formula: A = length × width`,
      `A = ${l} × ${w} = ${area}`,
    ]);
});

// ---------- T15: circle area (Geometry & Trigonometry) ----------
[3, 5, 4, 6, 7].forEach((r) => {
  add('Geometry & Trigonometry',
    `A circle has a radius of ${r}. What is the area of the circle, in terms of π?`,
    `Yarıçapı ${r} olan bir dairenin alanı π cinsinden kaç birim karedir?`,
    `${r * r}π`,
    [`${2 * r}π`, `${r}π`, `${r * r * 2}π`],
    [
      `Use the area formula: A = πr²`,
      `A = π(${r})² = ${r * r}π`,
    ]);
});

// ---------- T16: volume of a rectangular prism (Geometry & Trigonometry) ----------
[[4, 3, 5], [6, 2, 7], [5, 5, 3], [8, 3, 2], [4, 6, 3]].forEach(([l, w, h]) => {
  const v = l * w * h;
  add('Geometry & Trigonometry',
    `A rectangular prism has a length of ${l}, a width of ${w}, and a height of ${h}. What is its volume?`,
    `Boyutları ${l}, ${w} ve ${h} olan bir dikdörtgenler prizmasının hacmi kaç birim küptür?`,
    v,
    [2 * (l * w + w * h + h * l), l + w + h, l * w + h],
    [
      `Use the volume formula: V = length × width × height`,
      `V = ${l} × ${w} × ${h} = ${v}`,
    ]);
});

// ---------- T17: Pythagorean theorem (Geometry & Trigonometry) ----------
[[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]].forEach(([a, b, c]) => {
  add('Geometry & Trigonometry',
    `A right triangle has legs of length ${a} and ${b}. What is the length of the hypotenuse?`,
    `Bir dik üçgenin dik kenarları ${a} ve ${b} ise, hipotenüsün uzunluğu kaçtır?`,
    c,
    [a + b, a * a + b * b, c - 1],
    [
      `Use the Pythagorean theorem: a² + b² = c²`,
      `${a}² + ${b}² = ${a * a} + ${b * b} = ${a * a + b * b}`,
      `c = √${a * a + b * b} = ${c}`,
    ]);
});

// ---------- T18: average / missing value (Problem-Solving & Data Analysis) ----------
[
  [[60, 75, 95, 105], 115],
  [[10, 14, 18], 22],
  [[4, 9, 13, 17], 22],
  [[100, 150], 200],
  [[8, 12, 16, 20, 24], 28],
].forEach(([known, missing]) => {
  const n = known.length + 1;
  const knownSum = known.reduce((a, b) => a + b, 0);
  const sum = knownSum + missing;
  const avg = sum / n;
  add('Problem-Solving & Data Analysis',
    `The average of ${n} numbers is ${avg}. If ${n - 1} of the numbers are ${known.join(', ')}, what is the value of the remaining number?`,
    `Ortalaması ${avg} olan ${n} sayıdan ${n - 1} tanesi şunlardır: ${known.join(', ')}. Kalan sayı kaçtır?`,
    missing,
    [avg, sum, known[0]],
    [
      `Multiply the average by the number of values: ${avg} × ${n} = ${sum}`,
      `Subtract the sum of the known numbers: ${sum} − ${knownSum} = ${missing}`,
    ]);
});

// ---------- T19: probability (Problem-Solving & Data Analysis) ----------
[[3, 5], [4, 6], [7, 3], [5, 7], [2, 10]].forEach(([a, b]) => {
  const total = a + b;
  add('Problem-Solving & Data Analysis',
    `A bag contains ${a} red marbles and ${b} blue marbles. If one marble is selected at random, what is the probability that it is red?`,
    `Bir torbada ${a} kırmızı ve ${b} mavi bilye vardır. Rastgele seçilen bir bilyenin kırmızı olma olasılığı nedir?`,
    fracStr(a, total),
    [fracStr(b, total), fracStr(a, b), fracStr(total, a)],
    [
      `Find the total number of marbles: ${a} + ${b} = ${total}`,
      `Probability = red marbles / total marbles = ${a}/${total}`,
      `Simplify: ${fracStr(a, total)}`,
    ]);
});

// ---------- T20: rate / distance (Problem-Solving & Data Analysis) ----------
[[60, 3], [45, 5], [55, 4], [70, 2], [35, 6]].forEach(([r, t]) => {
  const dist = r * t;
  add('Problem-Solving & Data Analysis',
    `A car travels at a constant speed of ${r} miles per hour. How far does the car travel in ${t} hours?`,
    `Bir araç sabit ${r} mil/saat hızla gidiyorsa, ${t} saatte kaç mil yol alır?`,
    dist,
    [r + t, Math.round(r / t), dist * 2],
    [
      `Use the formula: distance = rate × time`,
      `distance = ${r} × ${t} = ${dist}`,
    ]);
});

// Assign ids
questions.forEach((q, i) => { q.id = i + 1; });

console.log(`Generated ${questions.length} math questions.`);
const byCat = {};
questions.forEach((q) => { byCat[q.category] = (byCat[q.category] || 0) + 1; });
console.log(byCat);

const fs = require('fs');
const path = require('path');
const outPath = path.join(__dirname, '..', 'data', 'math-questions.js');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `const MATH_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`, 'utf8');
console.log('Wrote', outPath);
