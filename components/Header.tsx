'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { getTotalItems } = useCart();
  const itemCount = getTotalItems();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-amber-900 bg-opacity-95'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-20">
          <Link href="/" className={`text-2xl font-bold flex items-center gap-2 transition-colors ${
            scrolled ? 'text-amber-900' : 'text-white'
          }`}>
            <span className="text-3xl">☕</span>
            <span>Coffee Haven</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="/#menu" className={`hidden md:block font-medium transition-colors hover:text-amber-500 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Menu
            </Link>
            <Link href="/about" className={`hidden md:block font-medium transition-colors hover:text-amber-500 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              About
            </Link>
            <Link href="/#contact" className={`hidden md:block font-medium transition-colors hover:text-amber-500 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Contact
            </Link>
            
            <Link href="/cart" className="relative group">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                scrolled 
                  ? 'bg-amber-100 text-amber-900 hover:bg-amber-200' 
                  : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-colors ${
                  scrolled ? 'text-amber-900' : 'text-white'
                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className={`font-semibold transition-colors ${
                  scrolled ? 'text-amber-900' : 'text-white'
                }`}>Cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse shadow-lg">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}