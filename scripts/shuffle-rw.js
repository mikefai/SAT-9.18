// One-time pass: shuffles each RW question's choice order (correct answer is
// always authored at index 0) and rewrites data/rw-questions.js in place.
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'rw-questions.js');
const { RW_QUESTIONS, VOCAB_GLOSSARY } = require(dataPath);

if (RW_QUESTIONS.length !== 100) {
  console.error(`Expected 100 RW questions, got ${RW_QUESTIONS.length}`);
  process.exit(1);
}

RW_QUESTIONS.forEach((q) => {
  const correct = q.choices[q.correctIndex];
  const arr = [...q.choices];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  q.choices = arr;
  q.correctIndex = arr.indexOf(correct);
});

const byCat = {};
RW_QUESTIONS.forEach((q) => { byCat[q.category] = (byCat[q.category] || 0) + 1; });
console.log('Category counts:', byCat);

const out = `// 100 SAT Reading & Writing questions (choices pre-shuffled).\nconst VOCAB_GLOSSARY = ${JSON.stringify(VOCAB_GLOSSARY, null, 2)};\n\nconst RW_QUESTIONS = ${JSON.stringify(RW_QUESTIONS, null, 2)};\n`;
fs.writeFileSync(dataPath, out, 'utf8');
console.log('Shuffled and wrote', dataPath);
