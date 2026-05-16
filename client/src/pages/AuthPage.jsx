import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AuthPage() {
  const [mode, setMode] = useState('signup');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === 'login') {
      localStorage.setItem('swipesync-auth', 'true');
      navigate('/fourth');
      return;
    }
    navigate('/onboarding');
  };

  return (
    <div className="bg-background text-on-surface min-h-screen network-grid flex items-center justify-center px-gutter py-12">
      <main className="w-full max-w-lg glass-panel rounded-2xl p-8 glow-cyan">
        <Link to="/home" className="inline-flex items-center gap-2 text-primary-container font-headline-md mb-8">
          <span className="material-symbols-outlined">bubble_chart</span>
          <span>SwipeSync AI</span>
        </Link>

        <div className="flex bg-white/5 rounded-xl p-1 mb-8">
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-3 rounded-lg font-label-sm text-label-sm uppercase transition-colors ${mode === 'signup' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-3 rounded-lg font-label-sm text-label-sm uppercase transition-colors ${mode === 'login' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Log In
          </button>
        </div>

        <h1 className="font-display-lg text-display-lg-mobile text-primary-container mb-3">
          {mode === 'signup' ? 'Create your account' : 'Welcome back'}
        </h1>
        <p className="text-on-surface-variant mb-8">
          Continue into SwipeSync and complete your collaboration profile.
        </p>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <input
            className="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-container"
            placeholder="LinkedIn profile URL"
            type="url"
          />
          <input
            className="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-container"
            placeholder="GitHub profile URL"
            type="url"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-container"
            placeholder="Username"
            type="text"
            required
          />
          {mode === 'signup' && (
            <input
              className="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-container"
              placeholder="Email"
              type="email"
              required
            />
          )}
          <input
            className="w-full bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-container"
            placeholder="Password"
            type="password"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-container/80 to-secondary-container/80 text-on-primary-container py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-transform"
          >
            {mode === 'signup' ? 'Sign Up' : 'Log In'}
          </button>
        </form>
      </main>
    </div>
  );
}

export default AuthPage;
