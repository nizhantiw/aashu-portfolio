'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaSpotify, FaApple, FaYoutube, FaSoundcloud } from 'react-icons/fa';

const albums = [
  {
    id: 1,
    title: "Phone Call",
    singer: "Aashu On The Beat",
    music: "Aashu On The Beat",
    lyrics: "Aashu & Sahib",
    cover: "https://i.ytimg.com/vi/JG5ugHdGR9M/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: 'https://www.youtube.com/watch?v=JG5ugHdGR9M',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    id: 2,
    title: "Jawline",
    singer: "Aashu On The Beat",
    music: "SubtraX",
    lyrics: "Musikstar",
    cover: "https://i.ytimg.com/vi/gY6hfMq-WzE/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: 'https://www.youtube.com/watch?v=gY6hfMq-WzE',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    id: 3,
    title: "Aaj Raat",
    singer: "Aashu On The Beat",
    music: "SubtraX",
    cover: "https://i.ytimg.com/vi/hS31zRRI2Ds/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: 'https://www.youtube.com/watch?v=hS31zRRI2Ds',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    id: 4,
    title: "Bewafa",
    singer: "Aashu On The Beat",
    music: "Tarun Music",
    lyrics: "Sahib Music",
    cover: "https://i.ytimg.com/vi/7AhXaps5g-o/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: 'https://www.youtube.com/watch?v=7AhXaps5g-o',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    id: 5,
    title: "Bhool Jaa",
    singer: "Aashu On The Beat",
    music: "Aashu On The Beat",
    lyrics: "Sahib Music",
    cover: "https://i.ytimg.com/vi/twvAgfAwvlU/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: 'https://www.youtube.com/watch?v=twvAgfAwvlU',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    id: 6,
    title: "Feeling",
    singer: "Aashu On The Beat",
    music: "Tarun Music",
    lyrics: "Sahib Music",
    cover: "https://i.ytimg.com/vi/7AhXaps5g-o/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: '#',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    id: 7,
    title: "Heartless",
    singer: "Aashu On The Beat",
    music: "Tarun Music",
    cover: "https://i.ytimg.com/vi/AY-Rmkce8BU/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: 'https://www.youtube.com/watch?v=AY-Rmkce8BU',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    id: 8,
    title: "Tera Deewana",
    singer: "Aashu On The Beat",
    music: "Aashu On The Beat",
    lyrics: "Aashu & Sahib",
    cover: "https://i.ytimg.com/vi/UonB_tfUmyg/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: 'https://www.youtube.com/watch?v=UonB_tfUmyg',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    id: 9,
    title: "All Night",
    singer: "Aashu On The Beat",
    music: "Tarun Music",
    lyrics: "Aashu On The Beat",
    cover: "https://i.ytimg.com/vi/_Dp18acoego/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: 'https://www.youtube.com/watch?v=_Dp18acoego',
      soundcloud: '#',
      bandcamp: '#',
    },
  },
  {
    id: 10,
    title: "Alive",
    singer: "Daksh",
    rap: "Aashu On The Beat",
    music: "Tarun Music",
    lyrics: "Daksh, Aashu, Sahib",
    cover: "https://i.ytimg.com/vi/_NbpMwwoNwI/hq720.jpg",
    streamLinks: {
      spotify: '#',
      apple: '#',
      youtube: 'https://www.youtube.com/watch?v=_NbpMwwoNwI',
      soundcloud: '#',
      bandcamp: '#',
    },
  }
];

export default function Music() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section id="listen" className="py-20 relative overflow-hidden" ref={sectionRef} style={{ backgroundColor: '#000000' }}>
      <div className="absolute w-full h-full top-0 left-0 opacity-10">
        <div className="absolute top-[20%] right-[10%] w-96 h-96 rounded-full bg-accent/30 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-72 h-72 rounded-full bg-purple-500/20 blur-[80px]" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Music</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Listen to the latest releases from Aashu on the Beat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 group"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{album.title}</h3>
                {album.singer && <p className="text-gray-300 text-sm">Artist: {album.singer}</p>}
                {album.music && <p className="text-gray-400 text-sm">Music: {album.music}</p>}
                {album.lyrics && <p className="text-gray-400 text-sm mb-4">Lyrics: {album.lyrics}</p>}
                {album.rap && <p className="text-gray-400 text-sm">Rap: {album.rap}</p>}
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-3">
                    <a href={album.streamLinks.spotify} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent" aria-label="Listen on Spotify">
                      <FaSpotify size={24} />
                    </a>
                    <a href={album.streamLinks.apple} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent" aria-label="Listen on Apple Music">
                      <FaApple size={24} />
                    </a>
                    <a href={album.streamLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent" aria-label="Listen on YouTube Music">
                      <FaYoutube size={24} />
                    </a>
                    <a href={album.streamLinks.soundcloud} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent" aria-label="Listen on SoundCloud">
                      <FaSoundcloud size={24} />
                    </a>
                  </div>
                  <a href={album.streamLinks.bandcamp} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent" style={{ color: '#ffffff' }}>
                    More →
                  </a>
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
          <a href="#" className="btn btn-outline inline-flex items-center">
            View All Releases
          </a>
        </motion.div>
      </div>
    </section>
  );
} 