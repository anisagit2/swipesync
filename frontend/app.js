(function () {
  const routeByText = [
    ['login', 'login.html'],
    ['sign up', 'signup.html'],
    ['discovery', 'first.html'],
    ['smart dashboard', 'smart.html'],
    ['dashboard', 'smart.html'],
    ['collaboration hub', 'collab.html'],
    ['collab hub', 'collab.html'],
    ['profile', 'prf.html'],
    ['settings', 'setting.html'],
  ];

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function findRoute(label) {
    const normalized = label.trim().replace(/\s+/g, ' ').toLowerCase();
    const match = routeByText.find(([text]) => normalized === text || normalized.includes(text));
    return match ? match[1] : null;
  }

  function goTo(page) {
    if (page && page !== currentPage) {
      window.location.href = page;
    }
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('a, button');
    if (!target) return;

    const explicitHref = target.getAttribute('href');
    const label = target.textContent || target.getAttribute('aria-label') || '';
    const route = findRoute(label);

    if (explicitHref === '#') {
      event.preventDefault();
      goTo(route);
      return;
    }

    if (!explicitHref && route) {
      event.preventDefault();
      goTo(route);
    }
  });

  document.addEventListener('submit', (event) => {
    event.preventDefault();
    const formText = event.target.textContent.toLowerCase();

    if (formText.includes('create') || formText.includes('sign up')) {
      goTo('signup2.html');
      return;
    }

    localStorage.setItem('swipesync-auth', 'true');
    goTo('first.html');
  });
})();
