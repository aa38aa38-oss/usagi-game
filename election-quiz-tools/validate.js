// 驗證資料檔結構：node validate.js <file>
const fs = require('fs'), vm = require('vm');
const f = process.argv[2]; let D = null;
try { vm.runInNewContext(fs.readFileSync(f, 'utf8'), { REGISTER: d => { D = d } }); }
catch (e) { console.log('PARSE ERROR', e.message); process.exit(1); }
const err = [];
const need = (c, m) => { if (!c) err.push(m) };
need(D, 'no REGISTER call');
if (D) {
  ['id', 'kind', 'city', 'title', 'bulletin', 'candidates', 'questions'].forEach(k => need(D[k] !== undefined, 'missing ' + k));
  need(/cec\.gov\.tw/.test(D.bulletin || ''), 'bulletin must be a cec.gov.tw URL');
  need(Array.isArray(D.integrityTargets), 'integrityTargets must be array');
  const ids = new Set();
  (D.candidates || []).forEach((c, i) => {
    const w = `candidate[${i}] ${c.name}`;
    ['id', 'no', 'name', 'party', 'gender', 'born'].forEach(k => need(c[k] !== undefined && c[k] !== '', `${w} missing ${k}`));
    ['edu', 'exp', 'platform', 'pos', 'rec'].forEach(k => need(Array.isArray(c[k]) && c[k].length, `${w} ${k} must be non-empty array`));
    need(!ids.has(c.id), `${w} duplicate id`); ids.add(c.id);
    (c.rec || []).forEach(r => need(['accuse', 'indict', 'ruling', 'agency', 'critique', 'victim', 'party', 'none'].includes(r.k), `${w} bad rec.k ${r.k}`));
    (c.check || []).forEach(r => need(['ok', 'warn', 'na'].includes(r.s), `${w} bad check.s ${r.s}`));
    const p = c.promise;
    need(p && (p.na || p.norate || typeof p.rate === 'number'), `${w} promise must be {na}, {norate} or {rate...}`);
    if (p && !p.na && !p.norate) {
      const t = p.done + p.partial + p.no;
      need(t > 0, `${w} promise has 0 verifiable items`);
      if (t > 0) need(Math.abs(Math.round((p.done + 0.5 * p.partial) / t * 100) - p.rate) <= 1, `${w} promise rate mismatch`);
      (p.items || []).forEach(it => need(['已實現', '部分', '未實現', '無法查證'].includes(it.s), `${w} bad promise item status ${it.s}`));
    }
  });
  (D.integrityTargets || []).forEach(t => need(ids.has(t), 'integrity target not a candidate: ' + t));
  const scored = {}; ids.forEach(i => scored[i] = 0);
  (D.questions || []).forEach((q, i) => {
    const w = `question[${i}]`;
    need(q.q && q.cat && Array.isArray(q.o) && q.o.length >= 2, `${w} malformed`);
    need(q.ex && Array.isArray(q.ex.o) && q.ex.o.length === (q.o || []).length, `${w} ex.o length must equal options`);
    need(q.ex && q.ex.bg, `${w} missing ex.bg`);
    (q.o || []).forEach((o, j) => {
      if (o.s === null) return;
      need(o.s && typeof o.s === 'object', `${w}.o[${j}] s must be object or null`);
      Object.entries(o.s || {}).forEach(([k, v]) => { need(ids.has(k), `${w}.o[${j}] unknown candidate ${k}`); need(v >= 0 && v <= 1, `${w}.o[${j}] score out of range`); if (v >= 0.8) scored[k]++; });
      D.candidates.forEach(c => need(!o.t.includes(c.name), `${w}.o[${j}] option text contains candidate name ${c.name}`));
    });
  });
  const lo = Object.entries(scored).filter(([, n]) => n < 1).map(([k]) => k);
  if (lo.length) console.log('WARN candidates with no option scored >=0.8:', lo.join(','));
  console.log(`candidates=${(D.candidates || []).length} questions=${(D.questions || []).length}`);
}
if (err.length) { console.log('ERRORS:\n' + err.join('\n')); process.exit(1); } else console.log('OK');
