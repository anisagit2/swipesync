(function () {
  const routeByText = [
    ['login', 'login.html'],
    ['sign up', 'signup.html'],
    ['skip for now', 'first.html'],
    ['feed', 'first.html'],
    ['discovery', 'first.html'],
    ['network', 'smart.html'],
    ['analysis', 'smart.html'],
    ['analytics', 'smart.html'],
    ['smart dashboard', 'smart.html'],
    ['dashboard', 'smart.html'],
    ['opportunities', 'collab.html'],
    ['collaboration hub', 'collab.html'],
    ['collab hub', 'collab.html'],
    ['profile', 'prf.html'],
    ['account_circle', 'prf.html'],
    ['person', 'prf.html'],
    ['settings', 'setting.html'],
    ['notifications', 'setting.html'],
  ];

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const profileImageFallback =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBxg1NIAh-Pe4tdC_TM2NeS07gMqIDjx7JZD19CgLGtbW7GHRVQfTl98rspSEeYXre9OinhFFvWiMC-xSKzjkp7g0LU6Y8qxIVHrauVSA8oGfERaddNsFYClOGQVJEupAoEjYSQn9HfjwAofMxx1D7a_oq2bbXot8eFrCwZTeUkieF8X9BSo9A27GOAz1H4U9jP2f4ZkaIvhK48_jOntaRsKIBMgxMDST-GGK2vqEyJIHFV_ELSXzam91lw12yiEdYOiUtVKbtePGc';
  const matches = [
    {
      type: 'individual',
      name: 'Dr. Elena Thorne',
      role: 'Senior AI Ethicist • Mentor',
      score: '98%',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAT38KQqOwTjOsmc9JFMDvwcrPIu-3WAQXeZN9KkRUep8lvStydqdnUoVXreVmnRwibvogqtMUh8vMQWPTLHsZCgc0ubTzN1iuOuIJdRYRUI4RlM6rX4o6yYu-LCHi0PxZkGQ7ct_gXYDDM8SYousHPVbAYhMCLONwo7uWbpN7PjqupIZu-foXDEaL8eVQLDc_CbwKLE4brGv0NKM_pBPFGlwwCoXSISgs1WfvkKM5taWLTwZYaDGWQkopuz21R2-PngIIMdjyGYlk',
      tags: ['Natural Language Processing', 'Ethics in Tech', 'Strategic Governance'],
      reason:
        "Elena's background in NLP aligns with your current project. Both of you value low-ego collaboration and long-term mentorship.",
    },
    {
      type: 'teammates',
      name: 'Julian Chen',
      role: 'Full-stack Engineer • Teammate',
      score: '94%',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCPKznQn2oyM_qnZMxSS0I0jgsegAdpc00r3I_kdw6E5T-23SCMa38ocvs-GJRpXNtu__oiEB-l7p6CGzAnx21MvRH7cy1O-hNwPtGpBLdXFEVijNiZ3QgupFXdQa7aw7I3JaT5rvzRlfepVctmbIuD5d3HuqdopnrjVRUqmxx7-w6fi9_8I-Fax9QgsGj7eRYss7yi2Q35YcXJupJZjA_U9Gd5zE0TjXrNgtv6_jwp0_LipZ5o4n9R5IdaaRbY81EqeI1djkKP9Fc',
      tags: ['Rust', 'Wasm', 'Realtime Systems'],
      reason:
        'Julian can round out your build team with strong systems engineering and fast prototyping experience.',
    },
    {
      type: 'collaborations',
      name: 'Ethical AI Dashboard',
      role: 'Research Collaboration • Open Project',
      score: '91%',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDch69k8I9dVdYU92jbGSmDD4NZvYN_2qgsodeatJ9pMMesMNUaDaAp1dI2nlpLJvfBHSGqU906h0oCXQvmAtMubdEomRQl9Gz3JEvJSpnaZJPExCLWWcvHSJsV9ilh9NhWrqKkKLov6ngmX_8qg-sz9ukf44iTSDDkujth37Eyx7ADCbEDn-PlrF8GG_2hN50A69oHLwiCaRzKHJIZgjJnFu0sn5oU6nwRrtC08ZI_qfzNfpryyI1UBLUb9xFb_Pg_HD4XuuxFzhY',
      tags: ['Dashboard', 'Responsible AI', 'Product Research'],
      reason:
        'This project needs collaborators who understand AI governance, product design, and practical data visualization.',
    },
    {
      type: 'companies',
      name: 'Quantum Analytics',
      role: 'Growth-stage Company • Hiring Collaborators',
      score: '89%',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5l7dFiABNwvwRk6JtEhkHFogL9sOIJ7rZ0BvxbSa40uPKSsLw-9cIK8-otS_wghhvl2S6g_zY101rjDJaM0cHRIiOguGvspTtHOXWMimjg6FmjxFscowTCxn5pxX2aIB1yOQ4_a4CviDQINGFaZj0y4D5GJByDyCAYeX57eDyLRsYD1OOrtpH5HfjfPC4rlUK63YYhbAizh4GYGSpY9egtW2R7hNG0yUwck_c-ATXBr-nh9Q89EHv-LWBIptSP3fQo1GXHEaYFjs',
      tags: ['Analytics', 'Enterprise AI', 'B2B SaaS'],
      reason:
        'Quantum Analytics is looking for partners who can turn technical insight into calm, useful product workflows.',
    },
  ];
  let activeMatchType = 'all';
  let activeMatchIndex = 0;

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

  function getProfileNameFromForm(form) {
    const nameInput = form.querySelector(
      '#username, [name="username"], #company-name, #business-email, #email, input[type="email"], input[type="text"]'
    );

    if (!nameInput || !nameInput.value.trim()) return '';

    const value = nameInput.value.trim();
    if (value.includes('@')) {
      return value.split('@')[0].replace(/[._-]+/g, ' ');
    }

    return value;
  }

  function formatProfileName(value) {
    return value
      .trim()
      .split(/\s+/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  function saveProfileName(form) {
    const profileName = formatProfileName(getProfileNameFromForm(form));
    if (profileName) {
      localStorage.setItem('swipesync-profile-name', profileName);
    }

    const emailInput = form.querySelector('#email, #business-email, input[type="email"]');
    if (emailInput && emailInput.value.trim()) {
      localStorage.setItem('swipesync-profile-email', emailInput.value.trim());
    }
  }

  function applyStoredProfile() {
    const profileName = localStorage.getItem('swipesync-profile-name');
    const profileEmail = localStorage.getItem('swipesync-profile-email');
    const profileImage = localStorage.getItem('swipesync-profile-image');

    if (profileName) {
      document.querySelectorAll('[data-profile-name]').forEach((element) => {
        element.textContent = profileName;
      });
    }

    if (profileEmail) {
      document.querySelectorAll('[data-profile-email]').forEach((element) => {
        element.textContent = profileEmail;
      });
    }

    if (profileImage) {
      document.querySelectorAll('[data-profile-image]').forEach((element) => {
        element.src = profileImage;
      });
    }
  }

  function togglePasswordVisibility(button) {
    const wrapper = button.closest('.relative');
    const input = wrapper ? wrapper.querySelector('input[type="password"], input[type="text"]') : null;
    const icon = button.querySelector('.material-symbols-outlined');

    if (!input || input.id !== 'password') return false;

    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    button.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
    if (icon) {
      icon.textContent = isHidden ? 'visibility_off' : 'visibility';
    }

    return true;
  }

  function needsAuthFields(form) {
    return currentPage === 'login.html' || currentPage === 'signup.html';
  }

  function hasRequiredAuthFields(form) {
    if (!needsAuthFields(form)) return true;

    const fields = Array.from(form.querySelectorAll('input')).filter(
      (input) => input.type !== 'checkbox' && input.type !== 'url'
    );
    const emptyField = fields.find((input) => !input.value.trim());

    if (emptyField) {
      emptyField.focus();
      emptyField.setCustomValidity('Please fill this field before continuing.');
      emptyField.reportValidity();
      emptyField.addEventListener('input', () => emptyField.setCustomValidity(''), { once: true });
      return false;
    }

    return true;
  }

  function visibleMatches() {
    if (activeMatchType === 'all') return matches;
    return matches.filter((match) => match.type === activeMatchType);
  }

  function renderMatchCard(next = false) {
    const card = document.querySelector('[data-match-card]');
    if (!card) return;

    const list = visibleMatches();
    if (!list.length) return;
    if (next) activeMatchIndex = (activeMatchIndex + 1) % list.length;
    if (activeMatchIndex >= list.length) activeMatchIndex = 0;

    const match = list[activeMatchIndex];
    const image = card.querySelector('[data-match-image]');
    const name = card.querySelector('[data-match-name]');
    const role = card.querySelector('[data-match-role]') || card.querySelector('[data-match-name] + p');
    const score = card.querySelectorAll('[data-match-score]');
    const tags = card.querySelector('[data-match-tags]');
    const reason = card.querySelector('[data-match-reason]');

    if (image) image.src = match.image;
    if (name) name.textContent = match.name;
    if (role) role.textContent = match.role;
    score.forEach((element) => {
      element.textContent = `${match.score} Match`;
    });
    if (tags) {
      tags.innerHTML = match.tags
        .map(
          (tag) =>
            `<span class="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">${tag}</span>`
        )
        .join('');
    }
    if (reason) reason.textContent = `"${match.reason}"`;
  }

  function setMatchFilter(button) {
    activeMatchType = button.dataset.matchFilter || 'all';
    activeMatchIndex = 0;

    document.querySelectorAll('[data-match-filter]').forEach((filterButton) => {
      filterButton.classList.toggle('text-primary', filterButton === button);
      filterButton.classList.toggle('font-bold', filterButton === button);
    });

    renderMatchCard();
  }

  function toggleProfileEditor(show) {
    const panel = document.querySelector('[data-profile-editor]');
    if (!panel) return;
    panel.classList.toggle('hidden', !show);
  }

  function setupProfileEditor() {
    const panel = document.querySelector('[data-profile-editor]');
    if (!panel) return;

    const nameInput = panel.querySelector('[data-profile-edit-name]');
    const emailInput = panel.querySelector('[data-profile-edit-email]');
    const imageInput = panel.querySelector('[data-profile-edit-image]');
    const fileInput = panel.querySelector('[data-profile-edit-file]');

    if (nameInput) nameInput.value = localStorage.getItem('swipesync-profile-name') || 'Alex Morrison';
    if (emailInput) emailInput.value = localStorage.getItem('swipesync-profile-email') || 'alex.morrison@swipesync.io';
    if (imageInput) imageInput.value = localStorage.getItem('swipesync-profile-image') || profileImageFallback;

    if (fileInput) {
      fileInput.addEventListener('change', () => {
        const file = fileInput.files && fileInput.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.addEventListener('load', () => {
          localStorage.setItem('swipesync-profile-image', reader.result);
          if (imageInput) imageInput.value = '';
          applyStoredProfile();
        });
        reader.readAsDataURL(file);
      });
    }
  }

  function saveProfileEdits() {
    const panel = document.querySelector('[data-profile-editor]');
    if (!panel) return;

    const nameInput = panel.querySelector('[data-profile-edit-name]');
    const emailInput = panel.querySelector('[data-profile-edit-email]');
    const imageInput = panel.querySelector('[data-profile-edit-image]');

    if (nameInput && nameInput.value.trim()) {
      localStorage.setItem('swipesync-profile-name', formatProfileName(nameInput.value));
    }
    if (emailInput && emailInput.value.trim()) {
      localStorage.setItem('swipesync-profile-email', emailInput.value.trim());
    }
    if (imageInput && imageInput.value.trim()) {
      localStorage.setItem('swipesync-profile-image', imageInput.value.trim());
    }

    applyStoredProfile();
    toggleProfileEditor(false);
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('a, button, [data-route], nav div');
    if (!target) return;

    if (target.tagName === 'BUTTON' && togglePasswordVisibility(target)) {
      event.preventDefault();
      return;
    }

    if (target.matches('[data-profile-edit-open]')) {
      event.preventDefault();
      toggleProfileEditor(true);
      return;
    }

    if (target.matches('[data-profile-edit-cancel]')) {
      event.preventDefault();
      toggleProfileEditor(false);
      return;
    }

    if (target.matches('[data-profile-edit-save]')) {
      event.preventDefault();
      saveProfileEdits();
      return;
    }

    if (target.matches('[data-match-filter]')) {
      event.preventDefault();
      setMatchFilter(target);
      return;
    }

    if (target.matches('[data-match-skip]')) {
      event.preventDefault();
      renderMatchCard(true);
      return;
    }

    const explicitHref = target.getAttribute('href');
    const label = target.textContent || target.getAttribute('aria-label') || '';
    const route = findRoute(label || target.dataset.route || target.getAttribute('data-icon') || '');

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
    if (!hasRequiredAuthFields(event.target)) return;
    saveProfileName(event.target);
    const formText = event.target.textContent.toLowerCase();

    if (formText.includes('create') || formText.includes('sign up')) {
      goTo('signup2.html');
      return;
    }

    localStorage.setItem('swipesync-auth', 'true');
    goTo('first.html');
  });

  applyStoredProfile();
  setupProfileEditor();
  renderMatchCard();
})();
