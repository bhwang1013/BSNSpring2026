// ===== PEPTIDE DATA =====
const peptideData = {
  bpc157: {
    name: 'BPC-157',
    subtitle: 'Body Protection Compound — 157 amino acid sequence',
    tags: ['Healing', 'Anti-inflammatory', 'Gut Health', 'Tendon Repair'],
    overview: 'BPC-157 is a synthetic peptide derived from a protein found in human gastric juice. It has garnered massive attention in the fitness and biohacking community for its remarkable ability to accelerate healing of tendons, ligaments, muscles, and even gut tissue. It is one of the most widely used recovery peptides in 2026.',
    benefits: [
      'Accelerates tendon and ligament healing',
      'Reduces inflammation and pain at injury sites',
      'Promotes angiogenesis (new blood vessel formation)',
      'Supports gut lining repair and leaky gut protocols',
      'May protect against NSAID-induced stomach damage',
      'Neuroprotective properties being studied'
    ],
    dosing: 'Typical research doses range from 200–500 mcg per day, administered subcutaneously near the injury site or orally. Cycles of 4–6 weeks are common.',
    sideEffects: 'Generally well-tolerated. Minor injection site reactions possible. Some report temporary dizziness or nausea. Long-term human data is limited.',
    warning: 'Not FDA-approved for human use. Sold as a research chemical in most countries.'
  },
  tb500: {
    name: 'TB-500 (Thymosin Beta-4)',
    subtitle: 'Synthetic fragment of the naturally occurring Thymosin Beta-4 protein',
    tags: ['Injury Recovery', 'Flexibility', 'Wound Healing', 'Anti-fibrotic'],
    overview: 'TB-500 is a synthetic version of Thymosin Beta-4, a protein that plays a critical role in building new blood vessels, muscle tissue, and skin. It is highly regarded for systemic healing, particularly in soft tissue injuries, and is often stacked with BPC-157 for a synergistic recovery protocol.',
    benefits: [
      'Systemic healing — works throughout the entire body',
      'Improves flexibility and reduces stiffness',
      'Promotes cell migration and tissue regeneration',
      'Reduces scar tissue formation',
      'Anti-inflammatory at injury sites',
      'May improve cardiac function post-injury'
    ],
    dosing: 'Common protocol: 2–2.5 mg twice per week for the first 4–6 weeks (loading), then 2–2.5 mg biweekly for maintenance. Administered subcutaneously or intramuscularly.',
    sideEffects: 'Possible fatigue, head rush, or mild nausea post-injection. Generally well-tolerated. May stimulate existing cancerous cells — avoid if cancer history.',
    warning: 'Banned by WADA for use in competitive sports. Not FDA-approved for human use.'
  },
  ipamorelin: {
    name: 'Ipamorelin / CJC-1295',
    subtitle: 'The most popular GH secretagogue stack in fitness',
    tags: ['GH Release', 'Muscle Growth', 'Fat Loss', 'Anti-Aging'],
    overview: 'The Ipamorelin + CJC-1295 stack is perhaps the most commonly used peptide combination for body recomposition. Ipamorelin is a selective GHRP that stimulates GH release from the pituitary with minimal side effects. CJC-1295 (with DAC) extends the GH release window by increasing GHRH levels for days at a time.',
    benefits: [
      'Increases natural GH and IGF-1 levels',
      'Promotes lean muscle mass gains',
      'Accelerates fat metabolism and body recomposition',
      'Improves sleep quality and recovery',
      'Anti-aging effects on skin and connective tissue',
      'No significant cortisol or prolactin spike (Ipamorelin specific)'
    ],
    dosing: 'Ipamorelin: 200–300 mcg, 2–3x daily SubQ. CJC-1295 w/DAC: 1–2 mg once or twice weekly. Typically run for 12–16 weeks with a 4-week break.',
    sideEffects: 'Water retention, mild fatigue, tingling extremities, increased hunger. CJC-1295 can cause injection site irritation.',
    warning: 'Banned in competitive sports. Not FDA-approved for performance enhancement.'
  },
  mk677: {
    name: 'MK-677 (Ibutamoren)',
    subtitle: 'Oral growth hormone secretagogue — no injection required',
    tags: ['IGF-1 Elevation', 'Sleep Quality', 'Lean Mass', 'Bone Density'],
    overview: 'MK-677 is a non-peptide GH secretagogue that is orally active, making it highly popular among those who want GH benefits without injections. It works by mimicking ghrelin and binding to ghrelin receptors in the brain, causing a significant and sustained release of growth hormone and IGF-1.',
    benefits: [
      'Significantly increases GH and IGF-1 levels',
      'Dramatically improves deep sleep (REM and SWS)',
      'Supports lean muscle mass and strength gains',
      'Accelerates recovery and repair',
      'Increases bone mineral density',
      'Potential nootropic effects via IGF-1 in the brain'
    ],
    dosing: 'Common dose: 10–25 mg once daily, taken at night before bed. Cycles of 16–24 weeks are common due to its long half-life.',
    sideEffects: 'Increased appetite (often significant), water retention, mild lethargy, elevated fasting blood glucose. Can worsen insulin sensitivity over time.',
    warning: 'Not approved by FDA. Not technically a "peptide" but a peptide mimetic. Watch blood glucose levels, especially in pre-diabetic individuals.'
  },
  semaglutide: {
    name: 'Semaglutide (GLP-1 Agonist)',
    subtitle: 'FDA-approved under Ozempic / Wegovy — the dominant fat loss peptide of 2026',
    tags: ['Appetite Suppression', 'Weight Loss', 'Metabolic Health', 'Cardiovascular'],
    overview: 'Semaglutide is a GLP-1 receptor agonist that has become one of the most talked-about compounds in fitness and medicine. Originally developed for type 2 diabetes (Ozempic), its extraordinary weight loss effects led to FDA approval for obesity (Wegovy). In 2026, it remains among the most-prescribed compounds for body recomposition.',
    benefits: [
      'Powerful appetite suppression and reduced food cravings',
      'Significant weight loss (15–20%+ body weight reduction in trials)',
      'Improves blood sugar regulation',
      'Reduces cardiovascular disease risk',
      'May reduce addictive behaviors and cravings beyond food',
      'Preserves lean muscle when combined with resistance training'
    ],
    dosing: 'Weekly SubQ injection. Start 0.25 mg/week, titrate up to 1–2.4 mg/week over several months as tolerated.',
    sideEffects: 'Nausea, vomiting, diarrhea, constipation (especially when starting), possible muscle loss if diet is inadequate, rare risk of pancreatitis.',
    warning: 'Prescription-only in most countries. Contraindicated with personal/family history of thyroid cancer. Always use under medical supervision.'
  },
  aod9604: {
    name: 'AOD-9604',
    subtitle: 'HGH fragment 176–191 — targeted fat metabolism',
    tags: ['Lipolysis', 'Fat Oxidation', 'No Blood Sugar Impact', 'HGH Fragment'],
    overview: 'AOD-9604 is a modified fragment of human growth hormone (amino acids 176–191) that isolates the fat-burning properties of HGH without affecting blood glucose or IGF-1 levels. It is specifically designed to stimulate lipolysis (fat breakdown) and inhibit lipogenesis (fat storage).',
    benefits: [
      'Directly stimulates lipolysis in adipose tissue',
      'Does not affect insulin sensitivity or IGF-1',
      'May help with cartilage and bone repair',
      'Well-tolerated with minimal systemic effects',
      'Useful for targeted fat loss during cutting phases'
    ],
    dosing: 'Typical research dose: 300–600 mcg per day SubQ. Best taken fasted. Cycles of 8–12 weeks.',
    sideEffects: 'Generally mild: redness at injection site, occasional headache. Generally considered one of the safest peptides.',
    warning: 'Sold as research chemical outside of Australia (where it was briefly TGA-approved). Not FDA-approved for human use.'
  },
  selank: {
    name: 'Selank',
    subtitle: 'Russian nootropic peptide for anxiety and cognitive performance',
    tags: ['Anxiolytic', 'Nootropic', 'Focus', 'Neuroprotective', 'BDNF'],
    overview: 'Selank is a synthetic analog of the human tetrapeptide tuftsin, developed in Russia. It is used as an anxiolytic (anti-anxiety) and nootropic agent. Athletes and fitness enthusiasts use it to manage training-induced stress, improve mental clarity, and enhance focus — particularly useful during demanding training blocks or competition prep.',
    benefits: [
      'Reduces anxiety and stress without sedation',
      'Improves learning, memory, and focus',
      'Increases BDNF (brain-derived neurotrophic factor)',
      'Stabilizes mood and reduces cortisol dysregulation',
      'No dependence or withdrawal effects reported',
      'May enhance immune function'
    ],
    dosing: 'Intranasal: 250–500 mcg (1–2 sprays), 1–3x daily. SubQ also used. Short cycles of 2–4 weeks with breaks.',
    sideEffects: 'Mild fatigue or sedation at higher doses. Generally extremely well-tolerated in research.',
    warning: 'Prescription medication in Russia. Sold as research chemical elsewhere. Limited long-term human data.'
  },
  epithalon: {
    name: 'Epithalon (Epitalon)',
    subtitle: 'Tetrapeptide telomerase activator for anti-aging and longevity',
    tags: ['Telomere Extension', 'Anti-Aging', 'Sleep Regulation', 'Antioxidant'],
    overview: 'Epithalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) developed by the St. Petersburg Institute of Bioregulation. It is one of the most studied peptides for longevity, known for activating telomerase and potentially extending telomere length — a key biomarker of cellular aging. It is gaining popularity among biohackers and longevity-focused athletes.',
    benefits: [
      'Activates telomerase and may extend telomere length',
      'Regulates melatonin and circadian sleep cycles',
      'Potent antioxidant protecting against DNA damage',
      'May reduce risk of age-related diseases',
      'Improves skin tone and reduces age-related tissue damage',
      'Potential immune system enhancement'
    ],
    dosing: 'Typical protocol: 5–10 mg per day SubQ or IM for 10–20 consecutive days, 1–2 times per year.',
    sideEffects: 'Very well tolerated in studies. Occasional mild injection site irritation. No significant adverse effects reported in research.',
    warning: 'Not approved by FDA. Research compound only. Most human studies originate from Russian research with limited Western clinical trials.'
  },
  ghrp6: {
    name: 'GHRP-2 / GHRP-6',
    subtitle: 'Classic growth hormone releasing peptides',
    tags: ['GH Pulse', 'Appetite Stimulation', 'Muscle Repair', 'IGF-1'],
    overview: 'GHRP-2 and GHRP-6 are first and second-generation growth hormone releasing peptides that directly stimulate the pituitary gland to release growth hormone in pulses. GHRP-6 is known for its strong appetite-stimulating effects, while GHRP-2 provides a stronger GH pulse with less hunger. Both are often stacked with a GHRH like CJC-1295 for synergistic effects.',
    benefits: [
      'Strong, pulsatile GH release from the pituitary',
      'Increases IGF-1 levels downstream',
      'Supports muscle repair and growth',
      'May improve appetite and nutrient partitioning (GHRP-6)',
      'Potential cardioprotective effects',
      'Well-established research history compared to newer peptides'
    ],
    dosing: 'GHRP-2: 100–300 mcg, 2–3x daily SubQ. GHRP-6: 100–300 mcg, 2–3x daily SubQ. Typically stacked with CJC-1295 for maximum effect. Cycles of 8–12 weeks.',
    sideEffects: 'GHRP-6: intense hunger/appetite increase. Both: water retention, mild fatigue, cortisol/prolactin elevation (less with GHRP-2).',
    warning: 'Banned by WADA. Research compounds, not FDA-approved for performance use. Injection multiple times daily required for best results.'
  }
};

// ===== MODAL =====
function openModal(id) {
  const data = peptideData[id];
  if (!data) return;

  const tagsHtml = data.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  const benefitsHtml = data.benefits.map(b => `<li>${b}</li>`).join('');

  document.getElementById('modal-content').innerHTML = `
    <h2>${data.name}</h2>
    <p class="modal-subtitle">${data.subtitle}</p>
    <div class="modal-tags">${tagsHtml}</div>

    <div class="modal-section" style="margin-top:20px;">
      <h4>Overview</h4>
      <p>${data.overview}</p>
    </div>

    <div class="modal-section">
      <h4>Key Benefits</h4>
      <ul>${benefitsHtml}</ul>
    </div>

    <div class="modal-section">
      <h4>Typical Dosing Protocol</h4>
      <p>${data.dosing}</p>
    </div>

    <div class="modal-section">
      <h4>Reported Side Effects</h4>
      <p>${data.sideEffects}</p>
    </div>

    <div class="warning-box">
      &#9888; <strong>Important:</strong> ${data.warning}
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== FAQ TOGGLE =====
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('open'));

  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('open');
  }
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(13,17,23,0.95)';
    navbar.style.backdropFilter = 'blur(12px)';
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.left = '0';
    navbar.style.right = '0';
    navbar.style.zIndex = '100';
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
  } else {
    navbar.style.background = '';
    navbar.style.backdropFilter = '';
    navbar.style.position = '';
    navbar.style.boxShadow = '';
  }
});
