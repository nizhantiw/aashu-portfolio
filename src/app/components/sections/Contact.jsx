'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaInstagram, FaTwitter, FaYoutube, FaSpotify, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, url: '#' },
  { name: 'Twitter', icon: FaTwitter, url: '#' },
  { name: 'YouTube', icon: FaYoutube, url: '#' },
  { name: 'Spotify', icon: FaSpotify, url: '#' },
  { name: 'TikTok', icon: FaTiktok, url: '#' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-accent/30 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Connect</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Follow on social media and join the mailing list
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl mb-6">Follow</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-accent text-white transition-colors duration-300"
                    aria-label={`Follow on ${social.name}`}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
            <p className="mt-8 text-gray-400">
              For bookings and press inquiries please email: <br />
              <a href="mailto:contact@artistname.com" className="text-white hover:text-accent transition-colors">
                contact@artistname.com
              </a>
            </p>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl mb-6">Join the Fan List</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to get exclusive updates, early access to tickets, and special content.
            </p>
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary mt-2"
              >
                Subscribe
              </button>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy and will never share your information. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 