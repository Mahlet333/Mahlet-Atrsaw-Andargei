// ===================================================================
// TECHNICAL PROJECT WIDGETS
// Self-contained, data-driven, no frameworks. Built to be skimmed in
// four seconds by someone who reads four hundred portfolios a day.
// ===================================================================

/**
 * Renders a clickable pipeline/architecture diagram from a list of stages.
 * stages: [{ label, detail, sub }]
 * Each box is clickable -> expands a detail panel below the diagram.
 */
function renderArchitecture(containerId, stages, opts = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const boxesHtml = stages.map((s, i) => `
    <div class="arch-stage">
      <button class="arch-box" data-stage="${i}" type="button">
        <span class="arch-box-label">${s.label}</span>
        ${s.sub ? `<span class="arch-box-sub">${s.sub}</span>` : ''}
      </button>
      ${i < stages.length - 1 ? `<span class="arch-arrow">${ICONS.arrowRight}</span>` : ''}
    </div>
  `).join('');

  container.innerHTML = `
    <div class="arch-wrap">
      <div class="arch-row">${boxesHtml}</div>
      <div class="arch-detail" id="${containerId}-detail">
        <p class="arch-detail-hint">Click a stage above to see what actually happens there.</p>
      </div>
    </div>
  `;

  const detailBox = document.getElementById(`${containerId}-detail`);
  container.querySelectorAll('.arch-box').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.arch-box').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = parseInt(btn.dataset.stage);
      const s = stages[idx];
      detailBox.innerHTML = `
        <h4>${s.label}</h4>
        <p>${s.detail}</p>
        ${s.code ? `<pre><code>${escapeHtml(s.code)}</code></pre>` : ''}
      `;
    });
  });
}

/**
 * Renders the "Training Graveyard" — a vertical log of failed attempts
 * ending in the run that worked. runs: [{ label, result, status: 'fail'|'win' }]
 */
function renderGraveyard(containerId, runs) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="graveyard">
      ${runs.map((r, i) => `
        <div class="grave-row ${r.status}">
          <span class="grave-marker">${r.status === 'win' ? '✓' : '✕'}</span>
          <span class="grave-label">${r.label}</span>
          <span class="grave-result">${r.result}</span>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Renders a metric comparison table with the winning row highlighted.
 * rows: [{ name, values: [...], win: bool }], headers: [...]
 */
function renderMetricTable(containerId, headers, rows) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="metric-table-wrap">
      <table class="metric-table">
        <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>
          ${rows.map(r => `
            <tr class="${r.win ? 'win-row' : ''}">
              <td>${r.name}</td>
              ${r.values.map(v => `<td>${v}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/**
 * Renders horizontal fold-change bars for biomarker / feature comparisons.
 * items: [{ name, fc, direction: 'up'|'down', note }]
 */
function renderFoldChangeBars(containerId, items, opts = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const maxFc = Math.max(...items.map(it => Math.abs(Math.log2(it.fc || 1))));
  container.innerHTML = `
    <div class="fc-bars">
      ${items.map(it => {
        const logFc = Math.log2(it.fc || 1);
        const pct = maxFc ? Math.min(100, (Math.abs(logFc) / maxFc) * 100) : 0;
        const isUp = it.direction === 'up';
        return `
          <div class="fc-row">
            <span class="fc-name">${it.name}</span>
            <div class="fc-track">
              <div class="fc-fill ${isUp ? 'fc-up' : 'fc-down'}" style="width:${pct}%"></div>
            </div>
            <span class="fc-val ${isUp ? 'fc-up-text' : 'fc-down-text'}">${isUp ? '↑' : '↓'} ${it.fc}×</span>
          </div>
        `;
      }).join('')}
    </div>
    ${opts.caption ? `<p class="fc-caption">${opts.caption}</p>` : ''}
  `;
}

/**
 * Renders a horizontal timeline of dated milestones (paper submission,
 * dataset acquired, model shipped, etc). points: [{ date, label, detail }]
 */
function renderMilestones(containerId, points) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="milestone-track">
      ${points.map((p, i) => `
        <div class="milestone-point">
          <div class="milestone-dot"></div>
          <div class="milestone-date">${p.date}</div>
          <div class="milestone-label">${p.label}</div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Renders a stat strip: big numbers with small labels, the kind that
 * stop a recruiter's scroll.
 * stats: [{ value, label }]
 */
function renderStatStrip(containerId, stats) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="stat-strip">
      ${stats.map(s => `
        <div class="stat-cell">
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Renders a "napkin math" block — a styled handwritten-feel equation
 * or formula card.
 */
function renderNapkinMath(containerId, title, formula, explanation) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="napkin">
      <div class="napkin-title">${title}</div>
      <div class="napkin-formula">${formula}</div>
      <div class="napkin-explain">${explanation}</div>
    </div>
  `;
}
