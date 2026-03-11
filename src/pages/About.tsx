import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
              alt="Instructor" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-emerald-600 p-10 rounded-3xl hidden md:block">
              <p className="text-white font-bold text-lg uppercase tracking-widest mb-1">Kuteyi Vincent</p>
              <p className="text-white/80 text-sm">Founder, NKDeals Bootcamp</p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Meet Your Instructor</h2>
            <h1 className="text-5xl font-bold tracking-tighter mb-8">Building the Future of Live Commerce</h1>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                With over a decade of experience in e-commerce and a pioneer in the UK live selling space, I created this bootcamp to solve one major problem: the gap between "knowing" and "doing".
              </p>
              <p>
                My journey started in a small spare room, selling on eBay. Today, we operate a full-scale warehouse, running professional live shows that generate thousands in revenue every single week.
              </p>
              <p>
                I don't just teach theory. I run a real business every day. This bootcamp is an open-book look at our entire operation—from how we source stock to how we ship 500+ orders a day.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="h-px flex-1 bg-zinc-100" />
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-50 p-10 rounded-3xl">
            <h4 className="text-4xl font-bold mb-2">10k+</h4>
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Orders Fulfilled</p>
          </div>
          <div className="bg-zinc-50 p-10 rounded-3xl">
            <h4 className="text-4xl font-bold mb-2">500+</h4>
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Live Shows Run</p>
          </div>
          <div className="bg-zinc-50 p-10 rounded-3xl">
            <h4 className="text-4xl font-bold mb-2">£1M+</h4>
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Sales Generated</p>
          </div>
        </div>
      </div>
    </div>
  );
}
