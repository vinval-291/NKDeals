import { motion } from 'motion/react';
import { CheckCircle2, Info, MapPin, Users, Package, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING } from '@/src/constants';

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Bootcamp Details & Pricing</h1>
          <p className="text-xl text-zinc-600">
            Everything you need to know about the investment and what's included in your 3-day transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Pricing Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100">
              <h2 className="text-2xl font-bold mb-8">What's Included in the {PRICING.amount}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  '3-Day Intensive Warehouse Training',
                  'Hands-on Live Selling Experience',
                  'Business Setup & VAT Guidance',
                  'Inventory Sourcing Strategies',
                  'Packaging & Fulfilment Systems',
                  '£500 Live Seller Launch Kit',
                  '30-Day Launch Roadmap',
                  'Post-Bootcamp Support Group'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-zinc-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-zinc-100">
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-zinc-900" />
                </div>
                <h3 className="font-bold text-xl mb-2">Location</h3>
                <p className="text-zinc-600">Our working warehouse in the UK. Full address provided upon application approval.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-zinc-100">
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-zinc-900" />
                </div>
                <h3 className="font-bold text-xl mb-2">Capacity</h3>
                <p className="text-zinc-600">Strictly limited to 8 students per intake to ensure personalized hands-on training.</p>
              </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8">
            <div className="bg-zinc-950 text-white p-10 rounded-3xl sticky top-32">
              <p className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">Total Investment</p>
              <h3 className="text-6xl font-bold mb-2">{PRICING.amount}</h3>
              <p className="text-zinc-400 mb-8">Secure your spot with a {PRICING.deposit} deposit.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <CreditCard className="w-4 h-4 text-emerald-500" />
                  <span>Payment plans available</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Package className="w-4 h-4 text-emerald-500" />
                  <span>Includes £500 Launch Kit</span>
                </div>
              </div>

              <Link 
                to="/apply" 
                className="block w-full bg-emerald-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-center hover:bg-emerald-500 transition-all"
              >
                Apply Now
              </Link>
              
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Applications are reviewed within 48 hours. Successful applicants will be sent a booking link.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
