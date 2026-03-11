import { motion } from 'motion/react';
import { CheckCircle2, Calendar, Clock, MapPin } from 'lucide-react';
import { COURSE_CONTENT } from '@/src/constants';

export default function CourseBreakdown() {
  const days = [
    { 
      day: 'Day 1', 
      title: COURSE_CONTENT.day1.title, 
      topics: COURSE_CONTENT.day1.topics,
      description: 'We start with the bedrock of a successful business. No fluff, just the essential foundations you need to build on.'
    },
    { 
      day: 'Day 2', 
      title: COURSE_CONTENT.day2.title, 
      topics: COURSE_CONTENT.day2.topics,
      description: 'The core of the bootcamp. You will learn the art and science of live selling by actually doing it in a professional studio.'
    },
    { 
      day: 'Day 3', 
      title: COURSE_CONTENT.day3.title, 
      topics: COURSE_CONTENT.day3.topics,
      description: 'Sales are only half the battle. We show you how to handle the volume and build a sustainable, scalable operation.'
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Course Breakdown</h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            A detailed look at our intensive 3-day training structure. Each day is designed to take you from zero to a fully operational live selling business.
          </p>
        </div>

        <div className="space-y-12">
          {days.map((day, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 bg-zinc-50 rounded-3xl border border-zinc-100"
            >
              <div className="lg:col-span-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest mb-4">
                  {day.day}
                </span>
                <h2 className="text-3xl font-bold mb-4">{day.title}</h2>
                <p className="text-zinc-600 leading-relaxed">{day.description}</p>
              </div>
              <div className="lg:col-span-8 bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold uppercase tracking-widest text-sm text-zinc-400 mb-6">What we cover:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {day.topics.map((topic, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-zinc-800">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-zinc-950 text-white rounded-2xl">
            <Calendar className="w-8 h-8 text-emerald-500 mb-6" />
            <h4 className="text-xl font-bold mb-2">3 Full Days</h4>
            <p className="text-zinc-400">Intensive in-person training from 9 AM to 6 PM daily.</p>
          </div>
          <div className="p-8 bg-zinc-950 text-white rounded-2xl">
            <MapPin className="w-8 h-8 text-emerald-500 mb-6" />
            <h4 className="text-xl font-bold mb-2">Real Warehouse</h4>
            <p className="text-zinc-400">Training takes place inside our working fulfillment center.</p>
          </div>
          <div className="p-8 bg-zinc-950 text-white rounded-2xl">
            <Clock className="w-8 h-8 text-emerald-500 mb-6" />
            <h4 className="text-xl font-bold mb-2">Lifetime Access</h4>
            <p className="text-zinc-400">Includes our 30-day launch plan and community support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
