import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Package, TrendingUp, Camera, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { BOOTCAMP_DATES, PRICING } from '@/src/constants';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Warehouse environment" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
              In-Person Training • UK Based
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tighter">
              Build a Profitable Live Selling Business in <span className="text-emerald-500 italic">Just 3 Days</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-2xl">
              Hands-on training inside a real live-selling warehouse. Master sourcing, auction psychology, and fulfillment systems from the pros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/apply" 
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 group"
              >
                Apply for the Bootcamp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#dates" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center"
              >
                View Upcoming Dates
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Students Will Learn */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-4">Curriculum</h2>
            <h3 className="text-4xl font-bold tracking-tight">What You Will Master</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Live Selling Fundamentals', desc: 'Master the business model that is taking over global e-commerce.' },
              { icon: Package, title: 'Product Sourcing', desc: 'Learn where to find high-margin inventory that sells out instantly.' },
              { icon: Users, title: 'Auction Psychology', desc: 'Understand how to build hype, manage bids, and keep viewers engaged.' },
              { icon: Box, title: 'Fulfillment Systems', desc: 'Professional packaging and shipping workflows for high-volume sales.' },
              { icon: TrendingUp, title: 'Scaling Your Business', desc: 'From your first show to a full-time warehouse operation.' },
              { icon: Camera, title: 'Studio Setup', desc: 'Lighting, audio, and platform tech for professional broadcasts.' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-zinc-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Section - The Differentiator */}
      <section className="py-24 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">The Real Deal</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Real Warehouse Training Environment</h3>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                This isn't a generic online course. You'll be training inside a working live-selling warehouse. Experience the noise, the pace, and the systems that power a successful operation.
              </p>
              <ul className="space-y-4">
                {[
                  'Professional Live Selling Studio',
                  'High-Volume Packaging Area',
                  'Inventory Sourcing & Storage',
                  'End-to-End Fulfillment Operations'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800" 
                  alt="Warehouse" 
                  className="rounded-2xl aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=800" 
                  alt="Packaging" 
                  className="rounded-2xl aspect-square object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 p-8 rounded-2xl hidden md:block">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm uppercase tracking-widest font-bold opacity-80">Hands-on Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 md:p-20 shadow-sm border border-zinc-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-4xl font-bold mb-8">What's Included</h3>
                <div className="space-y-6">
                  {[
                    '3-Day Intensive In-Person Training',
                    'Hands-on Live Selling Experience',
                    'Business Setup & VAT Guidance',
                    'Inventory Sourcing Strategies',
                    'Packaging & Fulfilment Systems',
                    '£500 Live Seller Launch Kit'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-zinc-50 rounded-xl">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <span className="font-bold text-zinc-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-8 bg-zinc-950 rounded-3xl text-white">
                <p className="text-emerald-500 font-bold uppercase tracking-widest mb-4">Investment</p>
                <p className="text-6xl font-bold mb-4">{PRICING.amount}</p>
                <p className="text-zinc-400 mb-8">Limited to 8 students per bootcamp for maximum hands-on attention.</p>
                <Link 
                  to="/apply" 
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all"
                >
                  Apply Now
                </Link>
                <p className="mt-4 text-xs text-zinc-500 uppercase tracking-widest">Deposit options available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Dates */}
      <section id="dates" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Upcoming Bootcamp Dates</h2>
            <p className="text-zinc-600">Secure your spot in our next intake. These fill up fast.</p>
          </div>

          <div className="space-y-4">
            {BOOTCAMP_DATES.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center justify-between p-8 border border-zinc-100 rounded-2xl hover:border-emerald-200 transition-all gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-zinc-100 rounded-xl flex items-center justify-center font-bold text-zinc-400">
                    2026
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">{item.date}</h4>
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-widest",
                      item.status === 'available' ? "text-emerald-600" : "text-orange-500"
                    )}>
                      {item.status === 'available' ? '● Spots Available' : '● Limited Capacity'}
                    </span>
                  </div>
                </div>
                <Link 
                  to="/apply" 
                  className="w-full md:w-auto bg-black text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready to Launch Your Business?</h2>
          <p className="text-emerald-100 text-xl mb-10 max-w-2xl mx-auto">
            Join the next generation of live sellers. Apply today for our 3-day intensive bootcamp.
          </p>
          <Link 
            to="/apply" 
            className="inline-block bg-white text-emerald-600 px-12 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-100 transition-all shadow-xl shadow-black/10"
          >
            Apply for the Next Bootcamp
          </Link>
        </div>
      </section>
    </div>
  );
}
