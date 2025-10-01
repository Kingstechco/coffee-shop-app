'use client';

import productsData from '@/data/products.json';
import { Product } from '@/types/product';
import Link from 'next/link';
import { useState } from 'react';
import ProductImage from '@/components/ProductImage';
import { formatPrice } from '@/utils/currency';

export default function Home() {
  const products: Product[] = productsData.products;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1600&h=900&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-700/80"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white/90 text-sm font-medium">
                📍 University of Venda, Thohoyandou
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in text-white">
              Coffee Haven <span className="text-amber-300">Limpopo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Your favorite coffee spot at the University of Venda.<br/>
              Freshly brewed with love, every single day! 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="inline-block bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-all transform hover:scale-105 text-center">
                🍵 Explore Our Menu
              </a>
              <a href="#location" className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 text-center">
                📍 Find Us
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Open Daily: 7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>015 962 8000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="menu" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Menu</h2>
            <p className="text-gray-700 text-lg md:text-xl">Freshly prepared with love for UNIVEN students & staff</p>
          </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-bold transition-all shadow-md ${
              selectedCategory === 'all'
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-800 hover:bg-amber-100 border-2 border-gray-200 hover:border-amber-300'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setSelectedCategory('hot-drinks')}
            className={`px-6 py-3 rounded-full font-bold transition-all shadow-md ${
              selectedCategory === 'hot-drinks'
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-800 hover:bg-amber-100 border-2 border-gray-200 hover:border-amber-300'
            }`}
          >
            Hot Drinks ☕
          </button>
          <button
            onClick={() => setSelectedCategory('cold-drinks')}
            className={`px-6 py-3 rounded-full font-bold transition-all shadow-md ${
              selectedCategory === 'cold-drinks'
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-800 hover:bg-amber-100 border-2 border-gray-200 hover:border-amber-300'
            }`}
          >
            Cold Drinks 🧊
          </button>
          <button
            onClick={() => setSelectedCategory('food')}
            className={`px-6 py-3 rounded-full font-bold transition-all shadow-md ${
              selectedCategory === 'food'
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-white text-gray-800 hover:bg-amber-100 border-2 border-gray-200 hover:border-amber-300'
            }`}
          >
            Food 🥐
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <ProductImage 
                    name={product.name} 
                    category={product.category}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 to-red-700/90 flex flex-col items-center justify-center backdrop-blur-sm">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-6 mb-3">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-white font-bold text-xl">Out of Stock</span>
                      <span className="text-white/80 text-sm mt-1">Check back soon!</span>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">{formatPrice(product.price)}</span>
                    <span className={`text-sm font-bold px-2 py-1 rounded-full ${product.inStock ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'}`}>
                      {product.inStock ? '✓ Available' : '✗ Sold Out'}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-900 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Us</h2>
            <p className="text-amber-100 text-lg md:text-xl">Conveniently located on campus</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-amber-900">📍 Coffee Haven Limpopo</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p className="text-gray-600">
                      University of Venda<br />
                      University Road<br />
                      Thohoyandou, Limpopo<br />
                      0950
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p className="text-gray-600">015 962 8000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Hours:</p>
                    <p className="text-gray-600">
                      Monday - Friday: 7:00 AM - 10:00 PM<br />
                      Saturday: 8:00 AM - 8:00 PM<br />
                      Sunday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-amber-900">✨ Why Visit Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">✓</span>
                  <span className="text-gray-700">Perfect study spot with free Wi-Fi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">✓</span>
                  <span className="text-gray-700">Student-friendly prices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">✓</span>
                  <span className="text-gray-700">Fresh local ingredients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">✓</span>
                  <span className="text-gray-700">Comfortable seating areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">✓</span>
                  <span className="text-gray-700">Quick service between classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 text-xl">✓</span>
                  <span className="text-gray-700">Proudly South African ☕️ 🇿🇦</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </>
  );
}