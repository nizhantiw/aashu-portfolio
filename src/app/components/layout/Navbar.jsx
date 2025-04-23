'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RiSpotifyFill, RiAppleFill, RiYoutubeFill } from 'react-icons/ri';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Music', path: '/#music' },
  { name: 'Tour', path: '/#tour' },
  { name: 'Gallery', path: '/#gallery' },
  { name: 'About', path: '/#about' },
  { name: 'Contact', path: '/#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-3/4 lg:w-3/5"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`backdrop-blur-lg bg-black/80 shadow-xl rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled ? 'shadow-2xl' : ''
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-blue-600 text-xl font-extrabold tracking-wide">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <Image src="/images/logo1.jpg" className='rounded-full' alt="logo" width={50} height={50} />
            </motion.div>
          </Link>
          
          {/* Menu */}
          <div className="flex mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-white text-base font-medium hover:text-blue-500 transition-colors px-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-3 text-white">
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <RiSpotifyFill className="w-5 h-5" />
            </a>
            <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <RiAppleFill className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <RiYoutubeFill className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar; 