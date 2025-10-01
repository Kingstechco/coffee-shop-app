'use client';

import productsData from '@/data/products.json';
import { Product } from '@/types/product';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useState, use } from 'react';
import ProductImage from '@/components/ProductImage';
import { formatPrice } from '@/utils/currency';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = productsData.products.find(p => p.id === parseInt(resolvedParams.id));
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 font-medium">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to menu
      </Link>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
          <ProductImage 
            name={product.name} 
            category={product.category}
            className="w-full h-full"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              {product.category.replace('-', ' ').toUpperCase()}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-amber-600">{formatPrice(product.price)}</span>
              <span className="text-gray-500">per item</span>
            </div>
          </div>
          
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-lg font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ Available' : '✗ Out of Stock'}
              </span>
            </div>
            {product.inStock && (
              <p className="text-sm text-gray-600">Ready for pickup or delivery</p>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className={`w-full md:w-auto px-10 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 ${
              product.inStock
                ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            {added ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Added to Cart!
              </span>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}