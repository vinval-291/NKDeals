import { Link } from 'react-router-dom';
import { Warehouse, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <Warehouse className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tighter uppercase">NKDeals <span className="text-emerald-600">Bootcamp</span></span>
            </Link>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              The UK's premier hands-on live selling training. Build a profitable business inside a real working warehouse environment.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link to="/course" className="hover:text-emerald-500 transition-colors">Course Breakdown</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Instructor</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-500 transition-colors">Pricing & Details</Link></li>
              <li><Link to="/apply" className="hover:text-emerald-500 transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <a href="mailto:info@livesellerbootcamp.co.uk" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              info@livesellerbootcamp.co.uk
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© 2026 NKDeals Live Seller Bootcamp. All rights reserved.</p>
            <span className="hidden md:block text-zinc-800">|</span>
            <p className="text-emerald-600/60">Website created by <span className="text-emerald-500 font-medium">Kuteyi Vincent</span></p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
