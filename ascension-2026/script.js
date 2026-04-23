const MONTHS = [
  {
    name: 'April',
    short: 'APR',
    categories: [
      {
        id: 'money',
        label: 'Money',
        icon: '$',
        goals: [
          { text: 'Follow Trading Protocol Every Trading Day', difficulty: 9 },
          { text: "Get All B's and A-'s in Nursing School", difficulty: 7 },
        ],
      },
      {
        id: 'muscle',
        label: 'Muscle',
        icon: '↑',
        goals: [
          { text: '167.0 lbs Average Bodyweight — Max 16.4% Body Fat', difficulty: 8 },
          { text: 'High Incline DB Bench 65 lbs × 10 · Barbell Row 155 lbs × 10 · DB Romanian Deadlift 65 lbs × 10 · Leg Press 2 Plates + 25 lbs × 10', difficulty: 6 },
        ],
      },
      {
        id: 'mindset',
        label: 'Mindset',
        icon: '◎',
        goals: [
          { text: '30-Minute Non-Negotiable Daily Process — Zero Days Off', difficulty: 10 },
          { text: 'Sobriety From All Drugs and Alcohol', difficulty: 5 },
        ],
      },
      {
        id: 'dating',
        label: 'Dating',
        icon: '♦',
        goals: [
          { text: 'Penis Enlargement — No Days Off Except Weekends', difficulty: 6 },
          { text: 'Rotation of 1 Girl That Is At Least a 7', difficulty: 2 },
        ],
      },
    ],
  },
  {
    name: 'May',
    short: 'MAY',
    categories: [
      {
        id: 'money',
        label: 'Money',
        icon: '$',
        goals: [
          { text: 'Follow Trading Protocol Every Trading Day', difficulty: 9 },
          { text: "Get All B's and A-'s in Nursing School", difficulty: 7 },
        ],
      },
      {
        id: 'muscle',
        label: 'Muscle',
        icon: '↑',
        goals: [
          { text: '168.0 lbs Average Bodyweight — Max 16.6% Body Fat', difficulty: 8 },
          { text: 'High Incline DB Bench 65 lbs × 11 · Barbell Row 155 lbs × 11 · DB Romanian Deadlift 65 lbs × 11 · Leg Press 2 Plates + 25 lbs × 11', difficulty: 6 },
        ],
      },
      {
        id: 'mindset',
        label: 'Mindset',
        icon: '◎',
        goals: [
          { text: '30-Minute Non-Negotiable Daily Process — Zero Days Off', difficulty: 10 },
          { text: 'Sobriety From All Drugs and Alcohol', difficulty: 5 },
        ],
      },
      {
        id: 'dating',
        label: 'Dating',
        icon: '♦',
        goals: [
          { text: 'Penis Enlargement — No Days Off Except Weekends', difficulty: 6 },
          { text: 'Rotation of 1 Girl That Is At Least a 7', difficulty: 2 },
        ],
      },
    ],
  },
  {
    name: 'June',
    short: 'JUN',
    categories: [
      {
        id: 'money',
        label: 'Money',
        icon: '$',
        goals: [
          { text: 'Make Over $1K Profit Trading', difficulty: 9 },
          { text: "Get All B's and A-'s in Nursing School", difficulty: 7 },
        ],
      },
      {
        id: 'muscle',
        label: 'Muscle',
        icon: '↑',
        goals: [
          { text: '169.0 lbs Average Bodyweight — Max 16.8% Body Fat', difficulty: 8 },
          { text: 'High Incline DB Bench 65 lbs × 12 · Barbell Row 155 lbs × 12 · DB Romanian Deadlift 65 lbs × 12 · Leg Press 2 Plates + 25 lbs × 12', difficulty: 6 },
        ],
      },
      {
        id: 'mindset',
        label: 'Mindset',
        icon: '◎',
        goals: [
          { text: '30-Minute Non-Negotiable Daily Process — Zero Days Off', difficulty: 10 },
          { text: 'Sobriety From All Drugs and Alcohol', difficulty: 5 },
        ],
      },
      {
        id: 'dating',
        label: 'Dating',
        icon: '♦',
        goals: [
          { text: 'Penis Enlargement — No Days Off Except Weekends', difficulty: 6 },
          { text: 'Rotation of 1 Girl That Is At Least a 7', difficulty: 2 },
        ],
      },
    ],
  },
  {
    name: 'July',
    short: 'JUL',
    categories: [
      {
        id: 'money',
        label: 'Money',
        icon: '$',
        goals: [
          { text: 'Make Over $9K Profit Trading', difficulty: 9 },
          { text: "Get All B's and A-'s in Nursing School", difficulty: 7 },
        ],
      },
      {
        id: 'muscle',
        label: 'Muscle',
        icon: '↑',
        goals: [
          { text: '170.0 lbs Average Bodyweight — Max 17.0% Body Fat', difficulty: 8 },
          { text: 'High Incline DB Bench 70 lbs × 7 · Barbell Row 185 lbs × 7 · DB Romanian Deadlift 70 lbs × 7 · Leg Press 3 Plates × 7', difficulty: 6 },
        ],
      },
      {
        id: 'mindset',
        label: 'Mindset',
        icon: '◎',
        goals: [
          { text: '30-Minute Non-Negotiable Daily Process — Zero Days Off', difficulty: 10 },
          { text: 'Sobriety From All Drugs and Alcohol', difficulty: 5 },
        ],
      },
      {
        id: 'dating',
        label: 'Dating',
        icon: '♦',
        goals: [
          { text: 'Penis Enlargement — No Days Off Except Weekends', difficulty: 6 },
          { text: 'Rotation of 1 Girl That Is At Least a 7', difficulty: 2 },
        ],
      },
    ],
  },
  {
    name: 'August',
    short: 'AUG',
    categories: [
      {
        id: 'money',
        label: 'Money',
        icon: '$',
        goals: [
          { text: 'Make Over $11K Profit Trading', difficulty: 9 },
          { text: "Get All B's and A-'s in Nursing School", difficulty: 7 },
        ],
      },
      {
        id: 'muscle',
        label: 'Muscle',
        icon: '↑',
        goals: [
          { text: '170.0 lbs Average Bodyweight — Max 16.8% Body Fat', difficulty: 8 },
          { text: 'High Incline DB Bench 70 lbs × 8 · Barbell Row 185 lbs × 8 · DB Romanian Deadlift 70 lbs × 8 · Leg Press 3 Plates × 8', difficulty: 6 },
        ],
      },
      {
        id: 'mindset',
        label: 'Mindset',
        icon: '◎',
        goals: [
          { text: '30-Minute Non-Negotiable Daily Process — Zero Days Off', difficulty: 10 },
          { text: 'Sobriety From All Drugs and Alcohol', difficulty: 5 },
        ],
      },
      {
        id: 'dating',
        label: 'Dating',
        icon: '♦',
        goals: [
          { text: 'Penis Enlargement — No Days Off Except Weekends', difficulty: 6 },
          { text: 'Rotation of 1 Girl That Is At Least a 7', difficulty: 2 },
        ],
      },
    ],
  },
  {
    name: 'September',
    short: 'SEP',
    categories: [
      {
        id: 'money',
        label: 'Money',
        icon: '$',
        goals: [
          { text: 'Make Over $12K Profit Trading', difficulty: 9 },
          { text: "Get All B's and A-'s in Nursing School", difficulty: 7 },
        ],
      },
      {
        id: 'muscle',
        label: 'Muscle',
        icon: '↑',
        goals: [
          { text: '170.0 lbs Average Bodyweight — Max 16.6% Body Fat', difficulty: 8 },
          { text: 'High Incline DB Bench 70 lbs × 9 · Barbell Row 185 lbs × 9 · DB Romanian Deadlift 70 lbs × 9 · Leg Press 3 Plates × 9', difficulty: 6 },
        ],
      },
      {
        id: 'mindset',
        label: 'Mindset',
        icon: '◎',
        goals: [
          { text: '30-Minute Non-Negotiable Daily Process — Zero Days Off', difficulty: 10 },
          { text: 'Sobriety From All Drugs and Alcohol', difficulty: 5 },
        ],
      },
      {
        id: 'dating',
        label: 'Dating',
        icon: '♦',
        goals: [
          { text: 'Penis Enlargement — No Days Off Except Weekends', difficulty: 6 },
          { text: 'Rotation of 1 Girl That Is At Least a 7', difficulty: 2 },
        ],
      },
    ],
  },
  {
    name: 'October',
    short: 'OCT',
    categories: [
      {
        id: 'money',
        label: 'Money',
        icon: '$',
        goals: [
          { text: 'Make Over $12K Profit Trading', difficulty: 9 },
          { text: "Get All B's and A-'s in Nursing School", difficulty: 7 },
        ],
      },
      {
        id: 'muscle',
        label: 'Muscle',
        icon: '↑',
        goals: [
          { text: '170.0 lbs Average Bodyweight — Max 16.4% Body Fat', difficulty: 8 },
          { text: 'High Incline DB Bench 70 lbs × 10 · Barbell Row 185 lbs × 10 · DB Romanian Deadlift 70 lbs × 10 · Leg Press 3 Plates × 10', difficulty: 6 },
        ],
      },
      {
        id: 'mindset',
        label: 'Mindset',
        icon: '◎',
        goals: [
          { text: '30-Minute Non-Negotiable Daily Process — Zero Days Off', difficulty: 10 },
          { text: 'Sobriety From All Drugs and Alcohol', difficulty: 5 },
        ],
      },
      {
        id: 'dating',
        label: 'Dating',
        icon: '♦',
        goals: [
          { text: 'Penis Enlargement — No Days Off Except Weekends', difficulty: 6 },
          { text: 'Rotation of 1 Girl That Is At Least a 7', difficulty: 2 },
        ],
      },
    ],
  },
  {
    name: 'November',
    short: 'NOV',
    categories: [
      {
        id: 'money',
        label: 'Money',
        icon: '$',
        goals: [
          { text: 'Make Over $15K Profit Trading', difficulty: 9 },
          { text: "Get All B's and A-'s in Nursing School", difficulty: 7 },
        ],
      },
      {
        id: 'muscle',
        label: 'Muscle',
        icon: '↑',
        goals: [
          { text: '170.0 lbs Average Bodyweight — Max 16.2% Body Fat', difficulty: 8 },
          { text: 'High Incline DB Bench 70 lbs × 11 · Barbell Row 185 lbs × 11 · DB Romanian Deadlift 70 lbs × 11 · Leg Press 3 Plates × 11', difficulty: 6 },
        ],
      },
      {
        id: 'mindset',
        label: 'Mindset',
        icon: '◎',
        goals: [
          { text: '30-Minute Non-Negotiable Daily Process — Zero Days Off', difficulty: 10 },
          { text: 'Sobriety From All Drugs and Alcohol', difficulty: 5 },
        ],
      },
      {
        id: 'dating',
        label: 'Dating',
        icon: '♦',
        goals: [
          { text: 'Penis Enlargement — No Days Off Except Weekends', difficulty: 6 },
          { text: 'Rotation of 1 Girl That Is At Least a 7', difficulty: 2 },
        ],
      },
    ],
  },
  {
    name: 'December',
    short: 'DEC',
    categories: [
      {
        id: 'money',
        label: 'Money',
        icon: '$',
        goals: [
          { text: 'Make Over $20K Profit Trading', difficulty: 9 },
          { text: "Get All B's and A-'s in Nursing School", difficulty: 7 },
        ],
      },
      {
        id: 'muscle',
        label: 'Muscle',
        icon: '↑',
        goals: [
          { text: '170.0 lbs Average Bodyweight — Max 16.0% Body Fat', difficulty: 8 },
          { text: 'High Incline DB Bench 70 lbs × 12 · Barbell Row 185 lbs × 12 · DB Romanian Deadlift 70 lbs × 12 · Leg Press 3 Plates × 12', difficulty: 6 },
        ],
      },
      {
        id: 'mindset',
        label: 'Mindset',
        icon: '◎',
        goals: [
          { text: '30-Minute Non-Negotiable Daily Process — Zero Days Off', difficulty: 10 },
          { text: 'Sobriety From All Drugs and Alcohol', difficulty: 5 },
        ],
      },
      {
        id: 'dating',
        label: 'Dating',
        icon: '♦',
        goals: [
          { text: 'Penis Enlargement — No Days Off Except Weekends', difficulty: 6 },
          { text: 'Rotation of 1 Girl That Is At Least a 7', difficulty: 2 },
        ],
      },
    ],
  },
];

// April = index 0, current month is April 2026
const CURRENT_MONTH_IDX = 0;

let activeMonth = CURRENT_MONTH_IDX;

function diffColor(id) {
  return { money: '#4caf7d', muscle: '#e05c5c', mindset: '#7c9fe0', dating: '#d97cb8' }[id] || '#c9a84c';
}

function renderMonth(idx) {
  const data = MONTHS[idx];
  const isCurrent = idx === CURRENT_MONTH_IDX;
  const isPast = idx < CURRENT_MONTH_IDX;

  const header = `
    <div class="month-header">
      <span class="month-name">${data.name}</span>
      <span class="month-year-tag">2026</span>
      ${isCurrent ? '<span class="month-badge-current">Current</span>' : ''}
    </div>
  `;

  const cards = data.categories.map(cat => `
    <div class="cat-card ${cat.id}">
      <div class="cat-header">
        <div class="cat-icon">${cat.icon}</div>
        <span class="cat-title">${cat.label}</span>
      </div>
      <ul class="goals-list">
        ${cat.goals.map(g => `
          <li class="goal-item">
            <span class="goal-text">${g.text}</span>
            <div class="goal-footer">
              <span class="diff-label">Difficulty</span>
              <div class="diff-bar-wrap">
                <div class="diff-bar-fill" style="width:${g.difficulty * 10}%"></div>
              </div>
              <span class="diff-num">${g.difficulty}/10</span>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  return `${header}<div class="category-grid">${cards}</div>`;
}

function renderTimeline() {
  const now = new Date();
  return `
    <div class="timeline-strip">
      ${MONTHS.map((m, i) => {
        let cls = '';
        if (i < CURRENT_MONTH_IDX) cls = 'past';
        else if (i === CURRENT_MONTH_IDX) cls = 'current';
        if (i === activeMonth) cls += ' active';
        return `<div class="tl-month ${cls}" data-month="${i}" title="${m.name} 2026">${m.short}</div>`;
      }).join('')}
    </div>
  `;
}

function render() {
  const main = document.getElementById('mainContent');
  main.innerHTML = renderTimeline() + renderMonth(activeMonth);
  main.classList.remove('fade-in');
  void main.offsetWidth;
  main.classList.add('fade-in');

  // Timeline click
  main.querySelectorAll('.tl-month').forEach(el => {
    el.addEventListener('click', () => {
      activeMonth = +el.dataset.month;
      updateNav();
      render();
    });
  });
}

function updateNav() {
  document.querySelectorAll('.month-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === activeMonth);
  });
}

// Nav buttons
document.querySelectorAll('.month-btn').forEach((btn, i) => {
  if (i === CURRENT_MONTH_IDX) btn.classList.add('current-month');
  btn.addEventListener('click', () => {
    activeMonth = i;
    updateNav();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Initial render
updateNav();
render();
