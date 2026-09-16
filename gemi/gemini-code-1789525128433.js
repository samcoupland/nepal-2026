window.addEventListener('load', () => {
  const raised = 3840;
  const target = 8825;
  const pct = Math.round((raised / target) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('percentageText').textContent = pct + '% Funded';
});