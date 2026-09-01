import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import CaseStudyPage from './pages/CaseStudyPage';

/** react-router doesn't scroll to #hash targets on navigation — do it here. */
function HashScroll() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [hash, pathname]);
  return null;
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <HashScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<CaseStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
