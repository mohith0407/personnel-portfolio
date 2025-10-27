'use client';
import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name:'Skills',href:'#skills'},
    { name:'Education',href:'#education'},
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled ? 'backdrop-blur-sm bg-white/80 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="text-2xl font-bold">
          <a
          key={'Home'}
          href={'#home'}>
            <span className="text-amber-300">GKH </span>MOHITH
          </a>
        </nav>

        {/* desktop nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {nav.map((n) => (
            <a
              key={n.name}
              href={n.href}
              className="text-gray-700 hover:text-amber-400 transition font-medium"
            >
              {n.name}
            </a>
          ))}
        </nav>

        {/* mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md border border-gray-200"
          >
            {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 border-t border-gray-200">
          <div className="px-4 py-4 flex flex-col space-y-2">
            {nav.map((n) => (
              <a
                key={n.name}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-gray-700 hover:text-amber-400"
              >
                {n.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-2 px-3 bg-amber-400 text-white rounded-lg text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
