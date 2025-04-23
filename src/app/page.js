import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Music from './components/sections/Music';
import Tour from './components/sections/Tour';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <main className="relative">
    <Navbar />
    <Hero />
    <Music />
    <Tour />
    <Contact />
    <Footer />
  </main>
  );
}
