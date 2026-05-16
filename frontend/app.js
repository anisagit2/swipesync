import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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
    ['opps', 'collab.html'],
    ['collaboration hub', 'collab.html'],
    ['collab hub', 'collab.html'],
    ['profile', 'prf.html'],
    ['account_circle', 'prf.html'],
    ['person', 'prf.html'],
    ['settings', 'setting.html'],
    ['notifications', 'setting.html'],
  ];

  let currentPage = window.location.pathname.split('/').pop() || 'index.html';
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
    {
      type: 'individual',
      name: 'Marcus Thorne',
      role: 'Senior UX Architect • Systems Thinker',
      score: '96%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYfdMi3w62Fu8MdU6rlZXkiBpU-JbUzUnRjbAIInb59eYJf3QDz5X7mBvvkWV2Z4mcRJ1zG583ApHGXlo-6srB2Mdh5NA6mUT-m-f15HG3oFx_M92JaEN87Mihe4p0mzxNJT57vIJSnYZ26Tf-OlmY7pgHgH0ZmBLOoe8w8O9S5pkjHsHf1teBxDBAHdtDQHoDR6oDH3Cf8RyRq5NYv3QxE6Hdz87Dcre0oW23-SXaNQblAS0p7iRR-xZJp9AIblQHlTyG5bgD0mU',
      tags: ['Design Systems', 'Cognitive Load', 'Product Strategy'],
      reason: 'Marcus focuses on low-anxiety design patterns, which perfectly complements your goal of building serene professional tools.'
    },
    {
      type: 'teammates',
      name: 'Sarah Chen',
      role: 'Backend Architect • Scale Expert',
      score: '92%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkU_AnQe3a1aCB02Bh2ww6kWp79qQiqoqgfLWRIrOra51g91QY9BS6ClZIImjqyFSU6NYQdvDMZr8ns5cYfQoXo_zbvX3uKqYK4u7QAC2ABGiQZUG5QoDj7fbuTFnYV4O0JIob8hJqsGYVXVqfTTyjfXyR0y_Y_eBxjedap7rUkmd17LQal3vlGj8G0uWHNmr64vqrFwZGH5HO0I6F6Pm9aCvB_NE_-2oFlZL24go9UMg55HNvPOegUDm4ls-O7D7F56rhkcqfXCw',
      tags: ['Go', 'Kubernetes', 'Distributed Systems'],
      reason: 'Sarah has experience managing high-traffic AI inference engines and could help stabilize your infrastructure.'
    },
    {
      type: 'collaborations',
      name: 'EcoGrid 2.0',
      role: 'Sustainable Infrastructure • Open Project',
      score: '88%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnDuLDyYSbv3d5jB2_nYqqPzPvO3x9VODOFGU4m3EfZ-0Sd8BHglU84F2rI3PGJORE1cebGy0DupcTf_kfshLwOiGUP93IqPAq71UqiVlDWeYhEUBj9qW0QktFgWH1FoHO1i20CxsW6JEFmDJfGtqEe4k0FxPFPi3tPR1b5EPeDmMMi_WzYvXACbRogCXvtVmLh6UKG-m5UK-mOufZkeCbiKRbXT2Hhf852IiPHbhQEVc1WpZ3h-s1bZlJp8KHpHSJhoRqscf8VJI',
      tags: ['Clean Tech', 'Smart Grids', 'Edge AI'],
      reason: 'Your work in localized LLMs could optimize their energy distribution algorithms significantly.'
    },
    {
      type: 'individual',
      name: 'Lila Vance',
      role: 'Foundational AI Researcher • PhD',
      score: '95%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDch69k8I9dVdYU92jbGSmDD4NZvYN_2qgsodeatJ9pMMesMNUaDaAp1dI2nlpLJvfBHSGqU906h0oCXQvmAtMubdEomRQl9Gz3JEvJSpnaZJPExCLWWcvHSJsV9ilh9NhWrqKkKLov6ngmX_8qg-sz9ukf44iTSDDkujth37Eyx7ADCbEDn-PlrF8GG_2hN50A69oHLwiCaRzKHJIZgjJnFu0sn5oU6nwRrtC08ZI_qfzNfpryyI1UBLUb9xFb_Pg_HD4XuuxFzhY',
      tags: ['Reinforcement Learning', 'Symbolic AI', 'Robotics'],
      reason: 'Lila is looking for industry partners to test her new cognitive mapping theories in real-world professional tools.'
    },
    {
      type: 'companies',
      name: 'Aether Systems',
      role: 'AI Safety Startup • Seed Stage',
      score: '91%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCADLxNgv3s03XMOs7DEjoRnpPdLDYqyEPE-58Qpm8M1kdr38OVX7_1pQC8ARKy8PLW964SFPWP4cMD00vlw_NDtjIdmZdS68cPsF-qNgZvKLPwoj2Ut-5RsnHK4vqf45n7yudqS8b5d4LfWSHdxrtfSH4iC00ngYqm7TgCB85mTbooNiyPN9IXPGqzJSGUYm9-NAPH6T7THgThmowvEwJg3O0zBcv-makSkVS6lKntLxIOq0LIYdIqA5DC12t4juYtdGn0cX5axG8',
      tags: ['Safety', 'Alignment', 'Open Source'],
      reason: 'Aether Systems values the same "empowerment over replacement" philosophy that drives your research.'
    }
  ];
  let activeMatchType = 'all';
  let activeMatchIndex = 0;
  let toastTimer;
  let firebaseAuth;
  let backendConfig = {};
  let backendReadyPromise;

  function findRoute(label) {
    const normalized = label.trim().replace(/\s+/g, ' ').toLowerCase();
    const match = routeByText.find(([text]) => normalized === text || normalized.includes(text));
    return match ? match[1] : null;
  }

  function normalizeLabel(target) {
    return (target.textContent || target.getAttribute('aria-label') || target.getAttribute('data-icon') || '')
      .trim()
      .replace(/\s+/g, ' ')
      .toLowerCase();
  }

  function goTo(page) {
    if (page && page !== currentPage) {
      window.location.href = page;
    }
  }

  function profileSlug(name = '') {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function profilePathFor(match) {
    return `prf.html?person=${encodeURIComponent(profileSlug(match.name))}`;
  }

  function profileForSlug(slug) {
    return matches.find((match) => profileSlug(match.name) === slug);
  }

  function followedProfiles() {
    try {
      return JSON.parse(localStorage.getItem('swipesync-following') || '[]');
    } catch {
      return [];
    }
  }

  function isFollowingProfile(match) {
    return followedProfiles().includes(profileSlug(match.name));
  }

  function setFollowingProfile(match, following = true) {
    const slug = profileSlug(match.name);
    const next = following
      ? [...new Set([...followedProfiles(), slug])]
      : followedProfiles().filter((item) => item !== slug);
    localStorage.setItem('swipesync-following', JSON.stringify(next));
  }

  function isAuthPage() {
    return currentPage === 'login.html' || currentPage === 'signup.html';
  }

  function setAuthMode(mode, replace = false) {
    if (!isAuthPage()) return false;

    const nextPage = mode === 'signup' ? 'signup.html' : 'login.html';
    currentPage = nextPage;

    if (replace) {
      window.history.replaceState({ authMode: mode }, '', nextPage);
    } else if (window.location.pathname.split('/').pop() !== nextPage) {
      window.history.pushState({ authMode: mode }, '', nextPage);
    }

    const isSignup = mode === 'signup';
    const header = document.querySelector('section.flex-1 h2');
    const subheader = document.querySelector('section.flex-1 h2 + p');
    const form = document.querySelector('form.space-y-md');
    const tabs = Array.from(document.querySelectorAll('button')).filter((button) =>
      ['login', 'sign up'].includes(normalizeLabel(button))
    );
    const footerLead = document.querySelector('.mt-xl .font-label-sm');

    if (header) header.textContent = isSignup ? 'Create your account' : 'Welcome back';
    if (subheader) {
      subheader.textContent = isSignup
        ? 'Build your professional profile in a few calm steps.'
        : 'Access your professional ecosystem.';
    }
    if (footerLead) {
      footerLead.childNodes[0].textContent = isSignup
        ? 'By creating an account, you agree to our '
        : 'By signing in, you agree to our ';
    }

    tabs.forEach((button) => {
      const isActive = normalizeLabel(button) === (isSignup ? 'sign up' : 'login');
      button.classList.toggle('bg-primary-container', isActive);
      button.classList.toggle('text-on-primary-container', isActive);
      button.classList.toggle('text-on-surface-variant', !isActive);
      button.setAttribute('aria-selected', String(isActive));
      button.type = 'button';
    });

    if (!form) return true;

    form.innerHTML = isSignup
      ? `
                    <div class="space-y-md">
                        <div class="space-y-xs group focus-ring rounded-lg">
                            <label class="block font-label-md text-label-md text-on-surface-variant ml-xs"
                                for="company-name">Company Name</label>
                            <input
                                class="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline/60 transition-all"
                                id="company-name" placeholder="e.g. Acme Corp" type="text" />
                        </div>
                        <div class="space-y-xs group focus-ring rounded-lg">
                            <label class="block font-label-md text-label-md text-on-surface-variant ml-xs"
                                for="business-email">Business Mail</label>
                            <input
                                class="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline/60 transition-all"
                                id="business-email" placeholder="founder@company.com" type="email" />
                        </div>
                        <div class="space-y-xs group focus-ring rounded-lg">
                            <label class="block font-label-md text-label-md text-on-surface-variant ml-xs"
                                for="website">Company Website (optional)</label>
                            <input
                                class="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline/60 transition-all"
                                id="website" placeholder="https://company.com" type="url" />
                        </div>
                    </div>
                    <div class="space-y-xs group focus-ring rounded-lg">
                        <div class="flex justify-between items-center px-xs">
                            <label class="block font-label-md text-label-md text-on-surface-variant"
                                for="password">Password</label>
                            <a class="font-label-sm text-label-sm text-secondary hover:underline" href="#">Forgot?</a>
                        </div>
                        <div class="relative">
                            <input
                                class="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline/60 transition-all"
                                id="password" placeholder="••••••••" type="password" />
                            <button
                                class="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant"
                                type="button">
                                <span class="material-symbols-outlined text-[20px]">visibility</span>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center gap-xs ml-xs">
                        <input class="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                            id="remember" type="checkbox" />
                        <label class="font-label-sm text-label-sm text-on-surface-variant" for="remember">Keep me signed
                            in for 30 days</label>
                    </div>
                    <button
                        class="w-full py-sm px-md bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors shadow-sm mt-md"
                        type="submit">Create Founder Account</button>`
      : `
                    <div class="space-y-xs group focus-ring rounded-lg">
                        <label class="block font-label-md text-label-md text-on-surface-variant ml-xs"
                            for="email">Professional Email</label>
                        <input
                            class="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline/60 transition-all"
                            id="email" placeholder="name@company.com" type="email" />
                    </div>
                    <div class="space-y-xs group focus-ring rounded-lg">
                        <div class="flex justify-between items-center px-xs">
                            <label class="block font-label-md text-label-md text-on-surface-variant"
                                for="password">Password</label>
                            <a class="font-label-sm text-label-sm text-secondary hover:underline" href="#">Forgot?</a>
                        </div>
                        <div class="relative">
                            <input
                                class="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-secondary focus:ring-0 text-on-surface placeholder:text-outline/60 transition-all"
                                id="password" placeholder="••••••••" type="password" />
                            <button
                                class="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant"
                                type="button">
                                <span class="material-symbols-outlined text-[20px]">visibility</span>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center gap-xs ml-xs">
                        <input class="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                            id="remember" type="checkbox" />
                        <label class="font-label-sm text-label-sm text-on-surface-variant" for="remember">Keep me signed
                            in for 30 days</label>
                    </div>
                    <button
                        class="w-full py-sm px-md bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors shadow-sm mt-md"
                        type="submit">
                        Sign In to SwipeSync
                    </button>`;

    return true;
  }

  function showToast(message) {
    let toast = document.querySelector('[data-app-toast]');
    if (!toast) {
      toast = document.createElement('div');
      toast.setAttribute('data-app-toast', '');
      toast.className =
        'fixed bottom-20 left-1/2 z-50 max-w-[min(90vw,420px)] -translate-x-1/2 rounded-lg bg-inverse-surface px-md py-sm text-center font-label-md text-label-md text-inverse-on-surface shadow-lg transition-opacity';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.style.opacity = '0';
    }, 2400);
  }

  const API_BASE = window.SWIPESYNC_API_URL || '';

  let backendConfigLoadError = null;

  async function initializeBackend() {
    try {
      const response = await fetch(`${API_BASE}/api/config`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      backendConfig = await response.json();

      if (backendConfig.authEnabled && backendConfig.firebase?.apiKey) {
        const firebaseApp = initializeApp(backendConfig.firebase);
        firebaseAuth = getAuth(firebaseApp);
        onAuthStateChanged(firebaseAuth, async (user) => {
          if (!user) return;
          try {
            await syncAuthSession({
              displayName: user.displayName,
              email: user.email,
            });
            await loadProfileFromApi();
          } catch (error) {
            console.error('Session sync failed', error);
          }
        });
      }
    } catch (error) {
      console.error('Backend config unavailable.', error);
      backendConfigLoadError = error;
      backendConfig = { authEnabled: false };
    }
  }

  async function getAuthToken() {
    if (!firebaseAuth?.currentUser) return '';
    return firebaseAuth.currentUser.getIdToken();
  }

  async function apiRequest(path, options = {}) {
    if (backendReadyPromise) await backendReadyPromise;

    const token = await getAuthToken();
    if (options.auth !== false && !token) {
      throw new Error('Sign in before syncing with the backend.');
    }

    const response = await fetch(`${API_BASE}${path}`, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(options.headers || {}),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || `Request failed: ${response.status}`);
    }

    return response.json();
  }

  async function syncAuthSession(extra = {}) {
    return apiRequest('/api/auth/session', {
      method: 'POST',
      body: extra,
    });
  }

  async function loadProfileFromApi() {
    try {
      const data = await apiRequest('/api/me');
      const profile = data.profile || {};
      const settings = data.settings || {};

      if (profile.displayName) {
        localStorage.setItem('swipesync-profile-name', profile.displayName);
      }
      if (profile.email) {
        localStorage.setItem('swipesync-profile-email', profile.email);
      }
      if (profile.photoURL) {
        localStorage.setItem('swipesync-profile-image', profile.photoURL);
      }
      if (profile.role) {
        localStorage.setItem('swipesync-profile-role', profile.role);
      }
      if (profile.bio) {
        localStorage.setItem('swipesync-profile-bio', profile.bio);
      }
      if (settings) {
        localStorage.setItem('swipesync-settings', JSON.stringify(settings));
      }

      applyStoredProfile();

      // FB-004: Fetch real projects from backend
      try {
        const { projects } = await apiRequest('/api/projects');
        if (projects && projects.length > 0) {
          projects.forEach((p, i) => {
            if (matches[i]) {
              matches[i].id = p.id; // Correctly map ID
              matches[i].name = p.name;
              matches[i].role = p.summary;
            }
          });
          renderMatchCard();
        }
      } catch (e) {
        console.warn('Failed to fetch projects', e);
      }
    } catch (error) {
      console.warn('Failed to load profile from API', error);
    }
  }

  function projectIdFromTarget(target) {
    const card = target.closest('[data-project-id]');
    if (card) return card.dataset.projectId;
    
    // Fallback for match card if it's currently showing a backend project
    const matchCard = document.querySelector('[data-match-card]');
    if (matchCard && matchCard.dataset.activeProjectId) {
      return matchCard.dataset.activeProjectId;
    }

    return null;
  }

  function markButton(target, message, label = 'Done') {
    if (target.tagName === 'BUTTON') {
      target.dataset.originalLabel = target.dataset.originalLabel || target.textContent.trim();
      target.textContent = label;
      target.setAttribute('aria-pressed', 'true');
      target.classList.add('brightness-95');
    }
    showToast(message);
  }

  function saveInterestedMatch(target, markTarget = true) {
    const matchName = document.querySelector('[data-match-name]')?.textContent.trim() || 'this match';
    const saved = JSON.parse(localStorage.getItem('swipesync-interested') || '[]');
    localStorage.setItem('swipesync-interested', JSON.stringify([...new Set([...saved, matchName])]));
    if (markTarget) {
      markButton(target, `${matchName} added to interested matches.`, 'Interested');
    } else {
      showToast(`${matchName} added to interested matches.`);
    }
    setTimeout(() => renderMatchCard(true), 450);
  }

  function activeMatch() {
    const list = visibleMatches();
    return list[activeMatchIndex] || list[0] || matches[0];
  }

  function viewActiveMatchProfile() {
    const match = activeMatch();
    if (!match) return false;
    localStorage.setItem('swipesync-selected-profile', match.name);
    window.location.href = profilePathFor(match);
    return true;
  }

  function skipMatch() {
    renderMatchCard(true);
    showToast('Match skipped.');
  }

  function scrollToHeading(text) {
    const needle = text.toLowerCase();
    const heading = Array.from(document.querySelectorAll('h2, h3, h4')).find((element) =>
      element.textContent.toLowerCase().includes(needle)
    );

    if (!heading) return false;
    heading.closest('section, div')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  }

  function toggleSkill(target) {
    const skill = target.textContent.trim();
    const selected = JSON.parse(localStorage.getItem('swipesync-skills') || '[]');
    const isSelected = selected.includes(skill);
    const next = isSelected ? selected.filter((item) => item !== skill) : [...selected, skill];

    localStorage.setItem('swipesync-skills', JSON.stringify(next));
    target.classList.toggle('bg-primary', !isSelected);
    target.classList.toggle('text-on-primary', !isSelected);
    target.classList.toggle('bg-tertiary-fixed', isSelected);
    target.classList.toggle('text-on-tertiary-fixed-variant', isSelected);
    showToast(`${skill} ${isSelected ? 'removed' : 'added'}.`);
  }

  async function saveSettings() {
    const settings = {
      email: document.querySelector('input[type="email"]')?.value || '',
      phone: document.querySelector('input[type="tel"]')?.value || '',
      notifications: {
        directMessages: document.querySelector('#dm-notifications')?.checked ?? true,
        matchAlerts: document.querySelector('#match-notifications')?.checked ?? true,
        communityUpdates: document.querySelector('#community-notifications')?.checked ?? false,
      },
      savedAt: new Date().toISOString(),
    };

    try {
      showToast('Saving settings...');
      await apiRequest('/api/settings', {
        method: 'PATCH',
        body: settings,
      });
      localStorage.setItem('swipesync-settings', JSON.stringify(settings));
      showToast('Settings saved successfully.');
    } catch (error) {
      console.error('Settings backend sync failed', error);
      showToast(`Error: ${error.message || 'Failed to save settings to backend.'}`);
    }
  }

  async function toggleSettingSwitch(target, clickEvent) {
    const checkbox = target.querySelector('input[type="checkbox"]');
    const label =
      target.closest('.flex.items-center.justify-between')?.querySelector('.font-label-md')?.textContent.trim() ||
      'Setting';

    if (!checkbox) return false;
    if (clickEvent.target !== checkbox) {
      checkbox.checked = !checkbox.checked;
    }

    await saveSettings();
    showToast(`${label} ${checkbox.checked ? 'enabled' : 'disabled'}.`);
    return true;
  }

  function openClickableCard(target) {
    const label = normalizeLabel(target);
    const match = matches.find((item) => label.includes(item.name.toLowerCase()));

    if (match) {
      localStorage.setItem('swipesync-selected-profile', match.name);
      window.location.href = profilePathFor(match);
      return true;
    }

    if (label.includes('sarah jenkins') || label.includes('marcus tye')) {
      showToast('Prototype match preview selected.');
      return true;
    }

    if (label.includes('ecogrid 2.0') || label.includes('quantum analytics')) {
      const projectName = label.includes('ecogrid 2.0') ? 'EcoGrid 2.0' : 'Quantum Analytics';
      localStorage.setItem('swipesync-active-project', projectName);
      showToast(`${projectName} selected.`);
      return true;
    }

    return false;
  }

  async function handlePrototypeAction(target, clickEvent) {
    const label = normalizeLabel(target);

    if (target.matches('.relative.inline-flex.cursor-pointer') && (await toggleSettingSwitch(target, clickEvent))) {
      return true;
    }

    if (!label) return false;

    if (currentPage === 'signup3.html' && target.tagName === 'BUTTON' && !target.dataset.route) {
      toggleSkill(target);
      return true;
    }

    if (currentPage === 'signup3.html' && label === 'close') {
      const chip = target.closest('span.inline-flex');
      if (chip) {
        const skill = chip.firstChild?.textContent.trim() || 'Skill';
        chip.remove();
        showToast(`${skill} removed.`);
        return true;
      }
    }

    if (label.includes('continue with linkedin') || label.includes('continue with github')) {
      localStorage.setItem('swipesync-auth', 'true');
      localStorage.setItem('swipesync-profile-name', label.includes('linkedin') ? 'LinkedIn Member' : 'GitHub Member');
      showToast('Signed in for this prototype.');
      goTo('first.html');
      return true;
    }

    if (label.includes('forgot')) {
      showToast('Password reset instructions are ready for the entered email.');
      return true;
    }

    if (label.includes('terms of service')) {
      showToast('Terms preview: respectful collaboration, verified identity, and safe data use.');
      return true;
    }

    if (label.includes('privacy policy')) {
      showToast('Privacy preview: profile data stays local in this prototype.');
      return true;
    }

    if (label === 'security') {
      showToast('Security preview: encrypted profile data and verified professional access.');
      return true;
    }

    if (label.includes('help')) {
      showToast('Help center opened for this prototype.');
      return true;
    }

    if (label.includes('start new search')) {
      localStorage.setItem('swipesync-search-started', new Date().toISOString());
      if (currentPage !== 'first.html') {
        goTo('first.html');
      } else {
        activeMatchType = 'all';
        activeMatchIndex = 0;
        renderMatchCard();
        showToast('New discovery search started.');
      }
      return true;
    }

    if (label.includes('interested')) {
      saveInterestedMatch(target);
      return true;
    }

    if (label.includes('swipe left')) {
      skipMatch();
      return true;
    }

    if (label.includes('swipe right')) {
      saveInterestedMatch(target, false);
      return true;
    }

    if (label.includes('view all potential matches')) {
      activeMatchType = 'all';
      activeMatchIndex = 0;
      renderMatchCard();
      scrollToHeading('Quick Matches');
      showToast('Showing all available prototype matches.');
      return true;
    }

    if (label.includes('profile') && target.matches('[data-view-match-profile]')) {
      viewActiveMatchProfile();
      return true;
    }

    if (label.includes('fix now')) {
      scrollToHeading('AI Recommendations');
      showToast('Suggested next steps surfaced below.');
      return true;
    }

    if (label.includes('view details')) {
      scrollToHeading('Network Composition');
      showToast('Network detail section selected.');
      return true;
    }

    if (label.includes('view calendar')) {
      scrollToHeading('Upcoming');
      showToast('Upcoming opportunities selected.');
      return true;
    }

    if (label.includes('refresh')) {
      localStorage.setItem('swipesync-recommendations-refreshed', new Date().toISOString());
      markButton(target, 'Recommendations refreshed.', 'Refreshed');
      return true;
    }

    if (label === 'connect' || label.includes('request invite') || label === 'message' || label.includes('message team')) {
      const isMessage = label.includes('message');
      const projectId = projectIdFromTarget(target);
      
      if (!projectId) {
        showToast('Project ID not found for this action.');
        return true;
      }

      try {
        showToast(isMessage ? 'Sending message...' : 'Sending request...');
        await apiRequest(`/api/projects/${projectId}/${isMessage ? 'message' : 'invite'}`, {
          method: 'POST',
          body: {
            body: 'I would like to connect about this project.',
            note: 'Requesting an invite to collaborate.',
          },
        });
        markButton(target, isMessage ? 'Message sent.' : 'Invite request sent.', isMessage ? 'Message Sent' : 'Requested');
      } catch (error) {
        console.error('Project action failed', error);
        showToast(`Error: ${error.message || 'Action failed.'}`);
      }
      return true;
    }

    if (label.includes('follow')) {
      const viewedProfile = document.body.dataset.viewingProfile;
      const match = viewedProfile ? profileForSlug(viewedProfile) : activeMatch();
      if (match) {
        setFollowingProfile(match, true);
        target.textContent = 'Following';
        target.setAttribute('aria-pressed', 'true');
        target.classList.add('brightness-95');
        showToast(`Following ${match.name}.`);
      } else {
        markButton(target, 'Profile followed.', 'Following');
      }
      return true;
    }

    if (label.includes('edit history')) {
      scrollToHeading('Professional Background');
      showToast('Professional background selected.');
      return true;
    }

    if (label.includes('view project case study')) {
      scrollToHeading('Featured Project');
      showToast('Featured project selected.');
      return true;
    }

    if (label.includes('change password')) {
      showToast('Password change request started.');
      return true;
    }

    if (label.includes('deactivate account')) {
      const confirmed = window.confirm('Deactivate this prototype account?');
      if (confirmed) {
        localStorage.removeItem('swipesync-auth');
        goTo('login.html');
      }
      return true;
    }

    if (label.includes('manage subscription')) {
      scrollToHeading('Billing History');
      showToast('Subscription tools selected.');
      return true;
    }

    if (label === 'account') {
      scrollToHeading('Account Information');
      showToast('Account settings selected.');
      return true;
    }

    if (label === 'profile' || label.includes('account_circle profile')) {
      goTo('prf.html');
      return true;
    }

    if (label.includes('save changes')) {
      await saveSettings();
      return true;
    }

    if (label.includes('privacy & security')) {
      scrollToHeading('Danger Zone');
      showToast('Privacy and security settings selected.');
      return true;
    }

    if (label.includes('notifications')) {
      if (currentPage === 'setting.html' && scrollToHeading('Notification Preferences')) {
        showToast('Notification preferences selected.');
        return true;
      }
      return false;
    }

    if (label.includes('subscriptions')) {
      scrollToHeading('Pro Professional');
      showToast('Subscription section selected.');
      return true;
    }

    if (label.includes('download')) {
      showToast('Invoice download prepared.');
      return true;
    }

    if (label.includes('menu')) {
      showToast('Menu is already visible on this screen.');
      return true;
    }

    if (target.classList.contains('cursor-pointer') && openClickableCard(target)) {
      return true;
    }

    return false;
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
    const profileRole = localStorage.getItem('swipesync-profile-role');
    const profileBio = localStorage.getItem('swipesync-profile-bio');

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

    if (profileRole) {
      document.querySelectorAll('[data-profile-role]').forEach((element) => {
        element.textContent = profileRole;
      });
    }

    if (profileBio) {
      document.querySelectorAll('[data-profile-bio]').forEach((element) => {
        element.textContent = profileBio;
      });
    }
  }

  function applyViewedProfile() {
    if (currentPage !== 'prf.html') return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('person');
    if (!slug) return;

    const match = profileForSlug(slug);
    if (!match) return;

    document.body.dataset.viewingProfile = slug;
    document.title = `${match.name} - SwipeSync`;

    const main = document.querySelector('main');
    if (!main) return;

    const email = `${profileSlug(match.name).replace(/-/g, '.')}@swipesync.network`;
    const bio =
      match.reason ||
      `${match.name} is available for high-trust professional collaboration through SwipeSync.`;

    main.querySelectorAll('[data-profile-name]').forEach((element) => {
      element.textContent = match.name;
    });
    main.querySelectorAll('[data-profile-email]').forEach((element) => {
      element.textContent = email;
    });
    main.querySelectorAll('[data-profile-role]').forEach((element) => {
      element.textContent = match.role;
    });
    main.querySelectorAll('[data-profile-image]').forEach((element) => {
      element.src = match.image;
    });
    main.querySelectorAll('[data-profile-bio]').forEach((element) => {
      element.textContent = bio;
    });

    const editButton = main.querySelector('[data-profile-edit-open]');
    const actionBar = editButton?.parentElement;
    if (editButton) editButton.remove();
    if (actionBar && !actionBar.querySelector('[data-follow-profile]')) {
      actionBar.insertAdjacentHTML(
        'afterbegin',
        `<button data-follow-profile
            class="flex-1 md:flex-none flex items-center justify-center gap-sm bg-primary text-on-primary px-gutter py-sm rounded-lg font-label-md hover:brightness-95 transition-all focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            aria-pressed="${isFollowingProfile(match)}">
            <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">person_add</span>
            ${isFollowingProfile(match) ? 'Following' : 'Follow'}
        </button>`
      );
    }

    const editor = document.querySelector('[data-profile-editor]');
    if (editor) editor.remove();

    const skills = main.querySelector('.md\\:col-span-4 .flex.flex-wrap.gap-sm');
    if (skills) {
      skills.innerHTML = (match.tags || [])
        .map(
          (tag) =>
            `<span class="px-md py-xs bg-primary-fixed text-on-primary-fixed-variant rounded-full font-label-md">${tag}</span>`
        )
        .join('');
    }

    showToast(`Viewing ${match.name}'s profile.`);
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

  function renderQuickMatches() {
    const container = document.querySelector('#quick-matches-container');
    if (!container) return;

    // Show top 3 matches that are NOT the current one if possible, or just first 3
    const list = visibleMatches();
    const toRender = list.filter((_, i) => i !== activeMatchIndex).slice(0, 3);
    
    // If we have fewer than 3, just show the first 3
    const finalDisplay = toRender.length > 0 ? toRender : list.slice(0, 3);

    container.innerHTML = finalDisplay.map(match => `
        <div class="bg-surface-container-lowest p-sm rounded-xl border border-outline-variant hover:border-primary transition-colors cursor-pointer group" data-project-id="${match.id || ''}">
            <div class="flex gap-sm items-start mb-2">
                <img class="w-12 h-12 rounded-lg object-cover" src="${match.image}" />
                <div class="flex-1">
                    <div class="flex justify-between items-start">
                        <p class="font-label-md text-label-md text-on-surface">${match.name}</p>
                        <span class="text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">${match.score}</span>
                    </div>
                    <p class="text-[12px] text-on-surface-variant line-clamp-1">${match.role}</p>
                </div>
            </div>
            <div class="flex gap-1 flex-wrap">
                ${(match.tags || []).slice(0, 2).map(tag => `
                    <span class="text-[10px] text-primary bg-primary-fixed px-2 py-0.5 rounded-md">${tag}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
  }

  function renderMatchCard(next = false) {
    const card = document.querySelector('[data-match-card]');
    if (!card) return;

    const list = visibleMatches();
    if (!list.length) return;
    if (next) activeMatchIndex = (activeMatchIndex + 1) % list.length;
    if (activeMatchIndex >= list.length) activeMatchIndex = 0;

    const match = list[activeMatchIndex];
    
    // Store project ID on card for actions
    if (match.id) {
        card.dataset.activeProjectId = match.id;
    } else {
        delete card.dataset.activeProjectId;
    }

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
      tags.innerHTML = (match.tags || [])
        .map(
          (tag) =>
            `<span class="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">${tag}</span>`
        )
        .join('');
    }
    if (reason) reason.textContent = `"${match.reason || 'No specific reason provided for this match.'}"`;
    
    // Sync sidebar
    renderQuickMatches();
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

  function applyStoredSelection() {
    const selectedMatch = localStorage.getItem('swipesync-selected-match');
    if (!selectedMatch || currentPage !== 'first.html') return;

    const match = matches.find((item) => item.name === selectedMatch);
    if (!match) return;

    activeMatchType = match.type;
    activeMatchIndex = 0;
    localStorage.removeItem('swipesync-selected-match');
  }

  function toggleProfileEditor(show) {
    const panel = document.querySelector('[data-profile-editor]');
    if (!panel) return;
    
    if (show) {
        const nameInput = panel.querySelector('[data-profile-edit-name]');
        const emailInput = panel.querySelector('[data-profile-edit-email]');
        const imageInput = panel.querySelector('[data-profile-edit-image]');
        const roleInput = panel.querySelector('[data-profile-edit-role]');
        const bioInput = panel.querySelector('[data-profile-edit-bio]');

        if (nameInput) nameInput.value = localStorage.getItem('swipesync-profile-name') || 'Alex Morrison';
        if (emailInput) emailInput.value = localStorage.getItem('swipesync-profile-email') || 'alex.morrison@swipesync.io';
        if (imageInput) imageInput.value = localStorage.getItem('swipesync-profile-image') || profileImageFallback;
        if (roleInput) roleInput.value = localStorage.getItem('swipesync-profile-role') || 'Senior AI Researcher';
        if (bioInput) bioInput.value = localStorage.getItem('swipesync-profile-bio') || '';
    }

    panel.classList.toggle('hidden', !show);
  }

  function setupProfileEditor() {
    const panel = document.querySelector('[data-profile-editor]');
    if (!panel) return;

    const fileInput = panel.querySelector('[data-profile-edit-file]');
    if (fileInput) {
      fileInput.addEventListener('change', async () => {
        const file = fileInput.files && fileInput.files[0];
        if (!file) return;

        // FB-005: Client-side size validation
        if (file.size > 2 * 1024 * 1024) {
          showToast('File too large. Max 2MB allowed.');
          return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', async () => {
          const base64Data = reader.result.split(',')[1];
          try {
            showToast('Uploading image...');
            const response = await apiRequest('/api/me/upload', {
              method: 'POST',
              body: {
                fileName: file.name,
                contentType: file.type,
                data: base64Data,
              },
            });
            localStorage.setItem('swipesync-profile-image', response.url);
            applyStoredProfile();
            showToast('Image uploaded successfully.');
          } catch (error) {
            console.error('Upload failed', error);
            showToast('Upload failed. Try again.');
          }
        });
        reader.readAsDataURL(file);
      });
    }
  }

  async function saveProfileEdits() {
    const panel = document.querySelector('[data-profile-editor]');
    if (!panel) return;

    const nameInput = panel.querySelector('[data-profile-edit-name]');
    const emailInput = panel.querySelector('[data-profile-edit-email]');
    const imageInput = panel.querySelector('[data-profile-edit-image]');
    const roleInput = panel.querySelector('[data-profile-edit-role]');
    const bioInput = panel.querySelector('[data-profile-edit-bio]');

    const payload = {
      displayName: nameInput?.value ? formatProfileName(nameInput.value) : undefined,
      email: emailInput?.value?.trim(),
      photoURL: imageInput?.value?.trim(),
      role: roleInput?.value?.trim(),
      bio: bioInput?.value?.trim(),
    };

    try {
      showToast('Saving profile to backend...');
      await apiRequest('/api/me', {
        method: 'PATCH',
        body: payload,
      });

      // Only update local state after successful backend save
      if (payload.displayName) localStorage.setItem('swipesync-profile-name', payload.displayName);
      if (payload.email) localStorage.setItem('swipesync-profile-email', payload.email);
      if (payload.photoURL) localStorage.setItem('swipesync-profile-image', payload.photoURL);
      if (payload.role) localStorage.setItem('swipesync-profile-role', payload.role);
      if (payload.bio) localStorage.setItem('swipesync-profile-bio', payload.bio);

      applyStoredProfile();
      toggleProfileEditor(false);
      showToast('Profile saved successfully.');
    } catch (error) {
      console.error('Profile backend sync failed', error);
      showToast(`Error: ${error.message || 'Failed to save profile.'}`);
    }
  }

  document.addEventListener('click', async (event) => {
    const target =
      event.target.closest('a, button, [data-route], nav div') ||
      event.target.closest('[data-icon="download"], [data-icon="close"], .relative.inline-flex.cursor-pointer, .cursor-pointer');
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
      await saveProfileEdits();
      return;
    }

    if (target.matches('[data-match-filter]')) {
      event.preventDefault();
      setMatchFilter(target);
      return;
    }

    if (target.matches('[data-match-skip]')) {
      event.preventDefault();
      skipMatch();
      return;
    }

    const explicitHref = target.getAttribute('href');
    const label = target.textContent || target.getAttribute('aria-label') || '';
    const route = target.dataset.route || findRoute(label || target.getAttribute('data-icon') || '');

    if (isAuthPage() && target.tagName === 'BUTTON' && ['login', 'sign up'].includes(normalizeLabel(target))) {
      event.preventDefault();
      setAuthMode(normalizeLabel(target) === 'sign up' ? 'signup' : 'login');
      return;
    }

    if (target.dataset.route) {
      event.preventDefault();
      goTo(route);
      return;
    }

    if (await handlePrototypeAction(target, event)) {
      event.preventDefault();
      return;
    }

    if (explicitHref === '#') {
      event.preventDefault();
      goTo(route);
      return;
    }

    if (
      !explicitHref &&
      route &&
      (target.closest('nav') ||
        target.getAttribute('aria-label') ||
        (target.tagName === 'BUTTON' && ['login', 'sign up'].includes(normalizeLabel(target))))
    ) {
      event.preventDefault();
      goTo(route);
    }
  });

  async function submitAuthForm(form) {
    if (!isAuthPage()) return false;

    const email =
      form.querySelector('#email, #business-email, input[type="email"]')?.value.trim() ||
      localStorage.getItem('swipesync-profile-email') ||
      '';
    const password = form.querySelector('#password')?.value || '';
    const companyName = form.querySelector('#company-name')?.value.trim() || '';
    const website = form.querySelector('#website')?.value.trim() || '';
    const displayName = companyName || formatProfileName(email.split('@')[0] || 'SwipeSync User');

    if (!firebaseAuth) {
      // FB-003: Disable prototype auth fallback in production
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        throw new Error('Authentication service is unavailable. Please try again later.');
      }
      saveProfileName(form);
      localStorage.setItem('swipesync-auth', 'true');
      showToast('Firebase config missing, using local prototype sign-in.');
      return true;
    }

    const credential =
      currentPage === 'signup.html'
        ? await createUserWithEmailAndPassword(firebaseAuth, email, password)
        : await signInWithEmailAndPassword(firebaseAuth, email, password);

    localStorage.setItem('swipesync-auth', 'true');
    localStorage.setItem('swipesync-profile-name', displayName);
    localStorage.setItem('swipesync-profile-email', credential.user.email || email);

    await syncAuthSession({
      displayName,
      companyName,
      website,
      email,
    });

    return true;
  }

  document.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!hasRequiredAuthFields(event.target)) return;

    if (isAuthPage()) {
      try {
        await submitAuthForm(event.target);
      } catch (error) {
        console.error('Auth failed', error);
        showToast(error.message || 'Authentication failed.');
        return;
      }
    } else {
      saveProfileName(event.target);
    }

    if (currentPage === 'signup.html') {
      goTo('signup2.html');
      return;
    }

    if (currentPage === 'signup2.html') {
      goTo('signup3.html');
      return;
    }

    if (currentPage === 'signup3.html') {
      localStorage.setItem('swipesync-auth', 'true');
      goTo('first.html');
      return;
    }

    localStorage.setItem('swipesync-auth', 'true');
    goTo('first.html');
  });

  window.addEventListener('popstate', () => {
    currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (isAuthPage()) {
      setAuthMode(currentPage === 'signup.html' ? 'signup' : 'login', true);
    }
  });

  function syncActiveNav() {
    const currentPageFile = window.location.pathname.split('/').pop() || 'index.html';

    // Map pages to nav keys
    const pageToNav = {
      'first.html': 'discovery',
      'second.html': 'discovery',
      'smart.html': 'analysis',
      'collab.html': 'collab',
      'prf.html': 'profile',
      'setting.html': 'profile',
      'index.html': 'discovery',
    };

    const activeNavKey = pageToNav[currentPageFile] || 'discovery';

    // Desktop Sidebar
    document.querySelectorAll('aside nav a[data-nav]').forEach((link) => {
      const navKey = link.dataset.nav;
      const isActive = navKey === activeNavKey;

      link.classList.toggle('text-primary', isActive);
      link.classList.toggle('bg-primary-fixed', isActive);
      link.classList.toggle('font-bold', isActive);
      link.classList.toggle('translate-x-1', isActive);

      link.classList.toggle('text-on-surface-variant', !isActive);
      link.classList.toggle('hover:bg-surface-variant', !isActive);
    });

    // Mobile Bottom Nav
    document.querySelectorAll('nav.fixed.bottom-0 a[data-nav]').forEach((link) => {
      const navKey = link.dataset.nav;
      const isActive = navKey === activeNavKey;

      link.classList.toggle('bg-primary-container', isActive);
      link.classList.toggle('text-on-primary-container', isActive);
      link.classList.toggle('rounded-xl', isActive);
      link.classList.toggle('scale-95', isActive);

      link.classList.toggle('text-on-surface-variant', !isActive);
    });
  }

  backendReadyPromise = initializeBackend();

  if (isAuthPage()) {
    setAuthMode(currentPage === 'signup.html' ? 'signup' : 'login', true);
  }

  syncActiveNav();
  applyStoredProfile();
  applyViewedProfile();
  applyStoredSelection();
  setupProfileEditor();
  renderMatchCard();
})();
