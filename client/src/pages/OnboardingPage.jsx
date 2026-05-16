import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function OnboardingPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const suggestions = {
    interest: ['AI products', 'Climate tech', 'Fintech', 'Healthtech', 'Developer tools', 'B2B SaaS'],
    goal: ['Find cofounders', 'Meet investors', 'Hire early team', 'Validate an idea', 'Find pilot customers'],
    personality: ['Builder', 'Strategist', 'Operator', 'Creative', 'Analytical', 'Connector'],
    communication: ['Async-first', 'Direct', 'Collaborative', 'High-context', 'Structured', 'Fast feedback'],
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('swipesync-auth', 'true');
    setStatus('Profile completed. Redirecting to your home dashboard...');
    window.setTimeout(() => navigate('/profile'), 700);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen network-grid px-gutter py-10">
      <main className="max-w-4xl mx-auto glass-panel rounded-2xl p-8">
        <Link to="/home" className="inline-flex items-center gap-2 text-primary-container font-headline-md mb-8">
          <span className="material-symbols-outlined">bubble_chart</span>
          <span>SwipeSync AI</span>
        </Link>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary-container mb-3">
          Complete your profile
        </h1>
        <p className="text-on-surface-variant mb-8">
          Add the details SwipeSync needs to tune your match graph and collaboration recommendations.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['Company detail', 'company', null],
            ['Name', 'name', null],
            ['Business email', 'email', null],
            ['Interest', 'interest', 'interest-options'],
            ['Goal', 'goal', 'goal-options'],
            ['Personality', 'personality', 'personality-options'],
            ['Communication style', 'communication', 'communication-options'],
            ['Startup stage', 'stage', null],
          ].map(([label, name, listId]) => (
            <label key={name} className="flex flex-col gap-2">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">{label}</span>
              <input
                name={name}
                list={listId || undefined}
                type={name === 'email' ? 'email' : 'text'}
                required
                className="bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-container"
              />
              {listId && (
                <datalist id={listId}>
                  {suggestions[name].map((option) => (
                    <option key={option} value={option} />
                  ))}
                </datalist>
              )}
            </label>
          ))}
          <button
            type="submit"
            className="md:col-span-2 mt-4 bg-primary-container text-on-primary-container py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-transform"
          >
            Complete Profile
          </button>
        </form>
        {status && <p className="mt-6 text-primary-fixed-dim">{status}</p>}
      </main>
    </div>
  );
}

export default OnboardingPage;
