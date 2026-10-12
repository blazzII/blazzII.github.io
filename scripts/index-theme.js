(function () {
  const storageKey = 'homeTheme';
  // Only the home page has the toggle; other pages just apply the saved theme.
  const button = document.querySelector('.theme-toggle');

  function getPreferredTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    if (!button) {
      return;
    }
    button.setAttribute('aria-pressed', String(theme === 'dark'));
    button.textContent = theme === 'dark' ? '☀️' : '🌑';
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  applyTheme(getPreferredTheme());

  if (!button) {
    return;
  }

  button.addEventListener('click', function () {
    const current = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  });
})();
