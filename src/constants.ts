export interface BootcampDate {
  id: string;
  date: string;
  status: 'available' | 'limited' | 'sold-out';
}

export const BOOTCAMP_DATES: BootcampDate[] = [
  { id: '1', date: 'March 21–23, 2026', status: 'available' },
  { id: '2', date: 'April 18–20, 2026', status: 'limited' },
  { id: '3', date: 'May 9–11, 2026', status: 'available' },
];

export const PRICING = {
  amount: '£1,750',
  deposit: '£500',
};

export const COURSE_CONTENT = {
  day1: {
    title: 'Foundations',
    topics: [
      'Understanding the live selling business model',
      'Finding profitable inventory',
      'Business setup (Sole Trader vs Ltd)',
      'VAT basics',
      'Pricing strategy'
    ]
  },
  day2: {
    title: 'Live Selling Mastery',
    topics: [
      'Setting up a live selling studio',
      'Running a professional live show',
      'Auction psychology and audience engagement',
      'Watching a professional live selling show in action'
    ]
  },
  day3: {
    title: 'Launch & Scale',
    topics: [
      'Packaging systems',
      'Order fulfilment workflow',
      'Customer retention strategies',
      'Creating a 30-day launch plan'
    ]
  }
};
