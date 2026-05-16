import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import AuthPage from './pages/AuthPage';
import OnboardingPage from './pages/OnboardingPage';
import ProfilePage from './pages/ProfilePage';

function RequireAuth({ children }) {
  const isAuthed = localStorage.getItem('swipesync-auth') === 'true';
  return isAuthed ? children : <Navigate to="/home" replace />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SecondPage />} />
        <Route path="/home" element={<SecondPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/insights" element={<RequireAuth><FirstPage /></RequireAuth>} />
        <Route path="/third" element={<RequireAuth><ThirdPage /></RequireAuth>} />
        <Route path="/fourth" element={<RequireAuth><FourthPage /></RequireAuth>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />
      </Routes>
    </Router>
  );
}

export default App;
