import { useState } from 'react';
import { Link } from 'react-router-dom';

const defaultPhoto = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeoPztYuDGLc9lKCH8oa9Bs9beKItPBVJnZyu9ZrejFRhpzh8X2vAMdLsLAFFJyGAiZe_mEFZL37vQ4Cyh5Y9aT9jHBCcHkcEKwq-ZKI5zjqaj1GJgwyTSCQjXXtwY-FRWnxVFr3eOYvpsH9-sXW06lX4af3otd9p1Qe5ci5XhTdCNQvunOpULO9h8OHOZgyQl18kjM10eTmUDowDxUK7BCynBgXVfEEnfOjKSay2oZV3rZRcWGi2ae3ppFT8rZRm7hbFNF0fQw6Y';

function ProfilePage() {
  const [profile, setProfile] = useState({
    username: 'Ecosystem Admin',
    email: 'admin@swipesync.ai',
    photo: defaultPhoto,
  });
  const [saved, setSaved] = useState(false);

  const updateProfile = (field, value) => {
    setSaved(false);
    setProfile((current) => ({ ...current, [field]: value }));
  };

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    updateProfile('photo', URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen network-grid px-gutter py-10">
      <main className="max-w-3xl mx-auto glass-panel rounded-2xl p-8 glow-cyan">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link to="/home" className="inline-flex items-center gap-2 text-primary-container font-headline-md">
            <span className="material-symbols-outlined">bubble_chart</span>
            <span>SwipeSync AI</span>
          </Link>
          <Link to="/fourth" className="text-on-surface-variant hover:text-primary-container transition-colors">
            Back to matches
          </Link>
        </div>

        <h1 className="font-display-lg text-display-lg-mobile text-primary-container mb-8">Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img src={profile.photo} alt="Profile preview" className="w-28 h-28 rounded-full object-cover border-2 border-primary-container/40" />
            <label className="cursor-pointer glass-panel rounded-xl px-5 py-3 hover:bg-white/5 transition-colors">
              <span className="font-bold">Change profile picture</span>
              <input type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Username</span>
            <input
              value={profile.username}
              onChange={(event) => updateProfile('username', event.target.value)}
              className="bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-container"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Email</span>
            <input
              type="email"
              value={profile.email}
              onChange={(event) => updateProfile('email', event.target.value)}
              className="bg-surface-container-high border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-container"
            />
          </label>

          <button type="submit" className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-bold hover:scale-105 active:scale-95 transition-transform">
            Save Profile
          </button>
        </form>
        {saved && <p className="mt-6 text-primary-fixed-dim">Profile updated.</p>}
      </main>
    </div>
  );
}

export default ProfilePage;
