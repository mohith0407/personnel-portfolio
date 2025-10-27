'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '../components/Contact';
import Footer from '@/components/Footer';
export default function Page() {
  return (
    <main className="min-h-screen antialiased">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills/>
      <Education/>
      <Contact />
      {/* <Footer/> */}
    </main>
  );
}
