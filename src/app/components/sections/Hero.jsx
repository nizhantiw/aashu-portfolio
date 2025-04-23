'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden pt-28">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 h-full w-full"
        style={{ scale: videoScale }}
      >
        <div className="relative w-full h-full">
        <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
  poster="/images/logo.jpg"
  onLoadedData={() => setVideoLoaded(true)}
>
  <source src="/videos/main-vid.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: videoLoaded ? 1 : 0, 
              y: videoLoaded ? 0 : 50 
            }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ y: titleY, opacity: textOpacity }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-glow">
              Aashu on the Beat
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
              New Album &quot;Rhythm Revolution&quot; Out Now
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#listen" className="btn btn-primary">
                Listen Now
              </a>
              <a href="#tour" className="btn btn-outline">
                Tour Dates
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: textOpacity }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-gray-300">Scroll to explore</span>
          <motion.div 
            className="w-0.5 h-10 bg-white/70"
            animate={{ 
              height: [10, 40, 10], 
              opacity: [0.3, 0.8, 0.3] 
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </div>
  );
} 