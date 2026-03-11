import React from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Application() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send an email/save to DB
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md px-4"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 tracking-tight">Application Received!</h1>
          <p className="text-zinc-600 text-lg mb-8">
            Thank you for applying to the NKDeals Live Seller Bootcamp. We'll review your application and get back to you within 48 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-emerald-600 font-bold uppercase tracking-widest hover:underline"
          >
            Submit another application
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-zinc-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Apply for the Bootcamp</h1>
          <p className="text-xl text-zinc-600">
            Tell us a bit about yourself. We review all applications to ensure the bootcamp is the right fit for your goals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-100 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="+44 7000 000000"
              className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Previous Online Selling Experience</label>
            <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none">
              <option>None - I'm a complete beginner</option>
              <option>Beginner - Sold a few items</option>
              <option>Intermediate - Regular seller</option>
              <option>Advanced - Full-time seller looking to scale</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-widest text-zinc-500">Why do you want to join the bootcamp?</label>
            <textarea 
              required
              rows={4}
              placeholder="Tell us about your goals and what you hope to achieve..."
              className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-emerald-600 text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/20"
          >
            Submit Application
            <Send className="w-5 h-5" />
          </button>

          <p className="text-center text-xs text-zinc-400 uppercase tracking-widest">
            By submitting, you agree to our terms and privacy policy.
          </p>
        </form>
      </div>
    </div>
  );
}
