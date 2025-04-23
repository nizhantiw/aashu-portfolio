'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';

const tourDates = [
  {
    id: 1,
    date: 'Oct 15, 2023',
    venue: 'The Grand Hall',
    city: 'New York, NY',
    ticketLink: '#',
    isSoldOut: false,
  },
  {
    id: 2,
    date: 'Oct 22, 2023',
    venue: 'Music Arena',
    city: 'Los Angeles, CA',
    ticketLink: '#',
    isSoldOut: false,
  },
  {
    id: 3,
    date: 'Oct 29, 2023',
    venue: 'The Sound Garden',
    city: 'Chicago, IL',
    ticketLink: '#',
    isSoldOut: true,
  },
  {
    id: 4,
    date: 'Nov 05, 2023',
    venue: 'Rhythm Club',
    city: 'Miami, FL',
    ticketLink: '#',
    isSoldOut: false,
  },
  {
    id: 5,
    date: 'Nov 12, 2023',
    venue: 'Echo Hall',
    city: 'Austin, TX',
    ticketLink: '#',
    isSoldOut: false,
  },
];

export default function Tour() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section id="tour" className="py-20 bg-black/90 relative" ref={sectionRef}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Tour Dates</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Come see the live experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {tourDates.map((show, index) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6 bg-black/50 backdrop-blur-sm rounded-lg border border-white/10 p-6 hover:border-accent/50 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-3">
                    <FaCalendar className="text-accent" />
                    <span className="font-medium">{show.date}</span>
                  </div>
                  
                  <div className="md:border-l md:border-white/20 md:pl-6">
                    <h3 className="font-bold text-xl group-hover:text-accent transition-colors">{show.venue}</h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaMapMarkerAlt />
                      <span>{show.city}</span>
                    </div>
                  </div>
                </div>

                <div>
                  {show.isSoldOut ? (
                    <span className="px-4 py-2 bg-white/10 text-white/70 rounded-full text-sm inline-block">
                      Sold Out
                    </span>
                  ) : (
                    <a 
                      href={show.ticketLink} 
                      className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-full inline-flex items-center gap-2 transition-colors"
                    >
                      <FaTicketAlt />
                      <span>Tickets</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a href="#" className="btn btn-outline inline-flex items-center gap-2">
            <span>View All Tour Dates</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 