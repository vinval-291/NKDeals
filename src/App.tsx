import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseBreakdown from './pages/CourseBreakdown';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Application from './pages/Application';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <div className="bg-zinc-900 text-white py-2 text-center text-[10px] uppercase tracking-[0.2em] font-bold">
          Sample Website Created by <span className="text-emerald-500">Kuteyi Vincent</span>
        </div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<CourseBreakdown />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/apply" element={<Application />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
