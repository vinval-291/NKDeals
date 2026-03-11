import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Warehouse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Course Breakdown', path: '/course' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-black p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <Warehouse className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tighter uppercase">NKDeals <span className="text-emerald-600">Bootcamp</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest hover:text-emerald-600 transition-colors",
                  location.pathname === item.path ? "text-emerald-600" : "text-zinc-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-black/5 absolute w-full left-0"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-900 border-b border-zinc-100"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
