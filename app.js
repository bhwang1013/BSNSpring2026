// ── Tab Navigation ──
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ── Quiz Data ──
const questions = [
  {
    q: "A patient identifies as transgender and reports no distress about their gender identity. What is the correct classification?",
    options: ["Gender Dysphoria", "Gender Identity Disorder", "No disorder — transgender identity is not a diagnosis", "Paraphilic Disorder"],
    answer: 2,
    explanation: "Transgender identity is NOT a disorder. Gender Dysphoria requires significant distress or impairment from the mismatch."
  },
  {
    q: "Which of the following BEST distinguishes a delusion from a hallucination?",
    options: [
      "Delusions only occur in schizophrenia; hallucinations occur in many disorders",
      "A delusion is a false belief; a hallucination is a false perception",
      "Hallucinations are more severe than delusions",
      "Delusions are auditory; hallucinations are visual"
    ],
    answer: 1,
    explanation: "Delusion = false BELIEF (e.g., 'I am being followed'). Hallucination = false PERCEPTION (e.g., hearing voices). Know this cold."
  },
  {
    q: "A patient engages in recurrent binge eating followed by purging. They do NOT restrict caloric intake between episodes and maintain a normal weight. What is the most likely diagnosis?",
    options: ["Anorexia Nervosa, purging type", "Binge Eating Disorder", "Bulimia Nervosa", "Avoidant/Restrictive Food Intake Disorder"],
    answer: 2,
    explanation: "Bulimia = binge-purge cycle, normal or near-normal weight. Anorexia has severe weight loss. BED has no purging."
  },
  {
    q: "A patient with Binge Eating Disorder (BED) asks what differentiates their condition from Bulimia. Your BEST response is:",
    options: [
      "BED involves more frequent binge episodes",
      "BED does not involve compensatory purging behaviors",
      "BED only affects overweight individuals",
      "BED is treated with antipsychotics"
    ],
    answer: 1,
    explanation: "BED = binge ONLY, no purging or compensatory behaviors. That's the core distinction."
  },
  {
    q: "Which treatment has the STRONGEST evidence base for Bulimia Nervosa?",
    options: ["Antipsychotic medication", "Cognitive Behavioral Therapy (CBT)", "Psychoanalysis", "Electroconvulsive therapy"],
    answer: 1,
    explanation: "CBT is the strongest evidence-based treatment for Bulimia. SSRIs (especially fluoxetine) can reduce binge urges as adjunct."
  },
  {
    q: "A patient with narcolepsy suddenly loses muscle tone in their legs when they laugh. This symptom is called:",
    options: ["Hypnagogic hallucination", "Sleep paralysis", "Cataplexy", "Apnea episode"],
    answer: 2,
    explanation: "Cataplexy = sudden loss of muscle tone triggered by emotion. Key: it is NOT always present in narcolepsy."
  },
  {
    q: "Which phase of schizophrenia is characterized by full psychosis including prominent hallucinations and delusions?",
    options: ["Prodromal phase", "Residual phase", "Active phase", "Premorbid phase"],
    answer: 2,
    explanation: "Active phase = full psychosis. Prodromal = early warning signs. Residual = lingering negative symptoms after active phase."
  },
  {
    q: "A personality disorder cluster characterized by odd, eccentric behavior includes which of the following?",
    options: ["Borderline, Histrionic, Narcissistic", "Paranoid, Schizoid, Schizotypal", "Avoidant, Dependent, OCPD", "Antisocial, Borderline, Histrionic"],
    answer: 1,
    explanation: "Cluster A (Weird) = Paranoid, Schizoid, Schizotypal. Cluster B (Dramatic) = Antisocial, Borderline, Histrionic, Narcissistic. Cluster C (Anxious) = Avoidant, Dependent, OCPD."
  },
  {
    q: "A therapist learns their patient has made specific, credible threats to harm a third party. What is the therapist's legal and ethical obligation?",
    options: [
      "Maintain confidentiality — therapy records are always protected",
      "Warn only if the patient has a prior criminal history",
      "Break confidentiality and warn the potential victim (Duty to Warn)",
      "Report to law enforcement but not the potential victim"
    ],
    answer: 2,
    explanation: "Duty to Warn (Tarasoff case) — therapists MUST break confidentiality if there is a credible, specific threat to an identifiable third party."
  },
  {
    q: "The BEST single predictor of future violent behavior in a forensic psychology assessment is:",
    options: ["Diagnosis of schizophrenia", "Substance use history", "Past violent behavior", "Low socioeconomic status"],
    answer: 2,
    explanation: "Past behavior is the strongest predictor of future violence. This is a classic exam answer — the best predictor of future behavior is past behavior."
  },
  {
    q: "Civil commitment differs from criminal commitment primarily because:",
    options: [
      "Civil commitment is voluntary; criminal is not",
      "Civil commitment requires no crime — only danger to self or others",
      "Criminal commitment is used only for nonviolent offenders",
      "Civil commitment requires a jury trial"
    ],
    answer: 1,
    explanation: "Civil commitment = no crime needed, just danger to self/others. Criminal commitment = crime was committed + mental disorder (insanity defense)."
  },
  {
    q: "A patient is aroused by secretly watching others undress without their knowledge. This paraphilic disorder is:",
    options: ["Exhibitionism", "Frotteurism", "Voyeurism", "Fetishism"],
    answer: 2,
    explanation: "Voyeurism = watching. Exhibitionism = exposing oneself. Frotteurism = touching/rubbing against non-consenting strangers."
  },
  {
    q: "Which sexual dysfunction involves persistent inability to achieve orgasm despite adequate stimulation?",
    options: ["Desire/arousal disorder", "Orgasm disorder", "Pain disorder (genito-pelvic)", "Hypoactive sexual desire disorder"],
    answer: 1,
    explanation: "The 3 buckets: (1) Desire/arousal problems, (2) Orgasm problems, (3) Pain disorders. Inability to achieve orgasm = bucket 2."
  },
  {
    q: "Regarding the insanity defense, which statement is MOST accurate?",
    options: [
      "It is used in the majority of criminal cases",
      "It is rarely used and rarely successful",
      "It results in immediate release if successful",
      "It is only applicable in murder cases"
    ],
    answer: 1,
    explanation: "The insanity defense is rare AND hard to win. This is a major public misconception — it's used in <1% of cases and succeeds even less often."
  },
  {
    q: "Which is the BEST treatment approach for schizophrenia?",
    options: [
      "Antipsychotic medication alone",
      "Psychotherapy alone",
      "Combination of antipsychotics and psychosocial therapy",
      "Hospitalization with medication withdrawal"
    ],
    answer: 2,
    explanation: "Combination > either alone. Antipsychotics control positive symptoms; psychosocial therapy improves function and reduces relapse."
  },
  {
    q: "Insomnia disorder is BEST described as:",
    options: [
      "Sudden attacks of sleep during the day",
      "Difficulty falling or staying asleep with daytime impairment, often with performance anxiety about sleep",
      "Breathing cessation during sleep",
      "Acting out dreams during REM sleep"
    ],
    answer: 1,
    explanation: "Insomnia = can't fall/stay asleep. Key feature: performance anxiety about sleep makes it worse (conditioned arousal). CBT-I is first-line treatment."
  },
  {
    q: "A major challenge in diagnosing personality disorders is:",
    options: [
      "Lack of any agreed-upon diagnostic criteria",
      "They can only be diagnosed in inpatient settings",
      "Significant symptom overlap between disorders, subjectivity, and potential bias",
      "Personality disorders resolve spontaneously within 6 months"
    ],
    answer: 2,
    explanation: "Key diagnosis issues: (1) Overlap between disorders, (2) Subjectivity in clinical judgment, (3) Cultural/gender bias. This is essay fuel your professor loves."
  },
  {
    q: "Cluster B personality disorders are characterized by:",
    options: ["Odd, eccentric behavior", "Dramatic, emotional, or erratic behavior", "Anxious, fearful behavior", "Psychotic features and social isolation"],
    answer: 1,
    explanation: "Cluster B (Dramatic) = Antisocial, Borderline, Histrionic, Narcissistic. Think 'wild' — these are the dramatic ones."
  },
  {
    q: "A nurse applying the biopsychosocial model to a patient with schizophrenia would address:",
    options: [
      "Only the biological factors like genetics and brain chemistry",
      "Biological (meds), psychological (therapy), and sociocultural factors together",
      "Social factors first, then biological after discharge",
      "Psychological therapy while avoiding medication due to side effects"
    ],
    answer: 1,
    explanation: "Biopsychosocial = all three together. This is the core WHAT/WHY/HOW framework applied clinically."
  },
  {
    q: "The prodromal phase of schizophrenia is BEST described as:",
    options: [
      "Full psychosis with prominent hallucinations",
      "Complete recovery with minimal symptoms",
      "Early warning period with social withdrawal and declining function before psychosis",
      "A period of medication-induced remission"
    ],
    answer: 2,
    explanation: "Prodromal = pre-psychosis warning phase. Weird behavior, social withdrawal, declining school/work performance. Early intervention here improves outcomes."
  }
];

// ── Quiz State ──
let currentQ = 0;
let score = 0;
let answered = false;
let shuffled = [];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function initQuiz() {
  shuffled = shuffle(questions);
  currentQ = 0;
  score = 0;
  answered = false;
  document.getElementById('quiz-done').classList.add('hidden');
  document.querySelector('.quiz-card').classList.remove('hidden');
  updateScoreDisplay();
  renderQuestion();
}

function renderQuestion() {
  const q = shuffled[currentQ];
  document.getElementById('quiz-progress').textContent = `Question ${currentQ + 1} of ${shuffled.length}`;
  document.getElementById('quiz-question').textContent = q.q;

  const optionsEl = document.getElementById('quiz-options');
  optionsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectAnswer(i));
    optionsEl.appendChild(btn);
  });

  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-feedback').className = 'quiz-feedback hidden';
  document.getElementById('next-btn').classList.add('hidden');
  answered = false;
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  const q = shuffled[currentQ];
  const opts = document.querySelectorAll('.quiz-option');

  opts.forEach(btn => btn.disabled = true);
  opts[q.answer].classList.add('correct');

  const feedback = document.getElementById('quiz-feedback');
  if (idx === q.answer) {
    score++;
    opts[idx].classList.add('correct');
    feedback.textContent = '✓ Correct! ' + q.explanation;
    feedback.className = 'quiz-feedback correct';
  } else {
    opts[idx].classList.add('wrong');
    feedback.textContent = '✗ ' + q.explanation;
    feedback.className = 'quiz-feedback wrong';
  }
  feedback.classList.remove('hidden');
  document.getElementById('next-btn').classList.remove('hidden');
  updateScoreDisplay();
}

function updateScoreDisplay() {
  document.getElementById('score-display').textContent = `Score: ${score} / ${shuffled.length || questions.length}`;
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentQ++;
  if (currentQ >= shuffled.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

function showResults() {
  document.querySelector('.quiz-card').classList.add('hidden');
  const done = document.getElementById('quiz-done');
  done.classList.remove('hidden');
  const pct = Math.round((score / shuffled.length) * 100);
  let grade = pct >= 90 ? 'A — Exam ready.' : pct >= 80 ? 'B — Almost there. Review traps.' : pct >= 70 ? 'C — Hit the cheat sheet again.' : 'Review mode — go back to the cheat sheet.';
  document.getElementById('final-score').textContent = `${score} / ${shuffled.length} (${pct}%) — ${grade}`;
}

document.getElementById('restart-quiz-btn').addEventListener('click', initQuiz);
document.getElementById('reset-btn').addEventListener('click', initQuiz);

// ── Flashcards ──
const flashcards = [
  { front: "What is Gender Dysphoria?", back: "DISTRESS from mismatch between assigned sex and gender identity — NOT transgender identity itself." },
  { front: "3 buckets of Sexual Dysfunctions", back: "1. Desire/Arousal problems\n2. Orgasm problems\n3. Pain disorders" },
  { front: "Voyeurism vs Exhibitionism vs Frotteurism", back: "Voyeurism = watching\nExhibitionism = exposing self\nFrotteurism = touching strangers" },
  { front: "Anorexia vs Bulimia vs BED", back: "Anorexia = restrict + think fat\nBulimia = binge → purge\nBED = binge, NO purge" },
  { front: "Best treatment for Bulimia?", back: "CBT (strongest evidence)\nSSRIs reduce binge urges (adjunct)" },
  { front: "What is Cataplexy?", back: "Sudden loss of muscle tone triggered by emotion — associated with Narcolepsy.\nKey: NOT always present!" },
  { front: "Delusion vs Hallucination", back: "Delusion = false BELIEF\nHallucination = false PERCEPTION\n(This WILL be on your exam)" },
  { front: "3 Phases of Schizophrenia", back: "1. Prodromal — weird, declining function\n2. Active — full psychosis\n3. Residual — lingering negative symptoms" },
  { front: "Cluster A Personality Disorders", back: "ODD/ECCENTRIC\n• Paranoid\n• Schizoid\n• Schizotypal" },
  { front: "Cluster B Personality Disorders", back: "DRAMATIC/EMOTIONAL\n• Antisocial\n• Borderline\n• Histrionic\n• Narcissistic" },
  { front: "Cluster C Personality Disorders", back: "ANXIOUS/FEARFUL\n• Avoidant\n• Dependent\n• OCPD" },
  { front: "Personality Disorder Diagnosis Issues", back: "1. Overlap between disorders\n2. Subjectivity in judgment\n3. Cultural/gender bias\n→ Essay fuel!" },
  { front: "Civil vs Criminal Commitment", back: "Civil = NO crime needed, danger to self/others\nCriminal = crime committed + insanity plea" },
  { front: "Best predictor of future violence?", back: "PAST BEHAVIOR\n(Classic exam answer — always.)" },
  { front: "Duty to Warn", back: "Must break confidentiality if patient makes credible, specific threat to identifiable third party.\n(Tarasoff case)" },
  { front: "Insanity Defense facts", back: "• RARE — used in <1% of cases\n• Hard to win\n• Major public misconception" },
  { front: "Core Framework for ANY disorder", back: "1. WHAT — symptoms & features\n2. WHY — bio/psych/socio causes\n3. HOW — therapy/meds/combo" },
  { front: "Schizophrenia treatment approach", back: "Combo > either alone\nAntipsychotics (positive symptoms) + Psychosocial therapy (function & relapse prevention)" },
  { front: "Insomnia disorder key feature", back: "Can't fall/stay asleep + daytime impairment\nPerformance anxiety about sleep makes it worse\nFirst-line: CBT-I" },
  { front: "Narcolepsy key symptoms", back: "Sudden sleep attacks\nCataplexy (muscle collapse on emotion)\nHypnagogic hallucinations\nSleep paralysis" }
];

let fcIndex = 0;

function renderFlashcard() {
  const fc = flashcards[fcIndex];
  document.getElementById('fc-front').textContent = fc.front;
  document.getElementById('fc-back').style.whiteSpace = 'pre-line';
  document.getElementById('fc-back').textContent = fc.back;
  document.getElementById('fc-counter').textContent = `${fcIndex + 1} / ${flashcards.length}`;
  document.getElementById('flashcard').classList.remove('flipped');
}

document.getElementById('flashcard').addEventListener('click', () => {
  document.getElementById('flashcard').classList.toggle('flipped');
});
document.getElementById('fc-next').addEventListener('click', () => {
  fcIndex = (fcIndex + 1) % flashcards.length;
  renderFlashcard();
});
document.getElementById('fc-prev').addEventListener('click', () => {
  fcIndex = (fcIndex - 1 + flashcards.length) % flashcards.length;
  renderFlashcard();
});

// ── Essay Accordion ──
document.querySelectorAll('.eq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const answer = trigger.nextElementSibling;
    const isOpen = trigger.classList.contains('open');
    // Close all
    document.querySelectorAll('.eq-trigger').forEach(t => t.classList.remove('open'));
    document.querySelectorAll('.eq-answer').forEach(a => a.classList.remove('open'));
    // Toggle clicked
    if (!isOpen) {
      trigger.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// ── Init ──
initQuiz();
renderFlashcard();
