'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import ProductImage from '@/components/ProductImage';
import { formatPrice } from '@/utils/currency';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Add some delicious items to your cart!</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.product.id} className="bg-white rounded-2xl shadow-lg p-6 transition-all hover:shadow-xl">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <ProductImage 
                    name={item.product.name} 
                    category={item.product.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{item.product.name}</h3>
                  <p className="text-gray-700">{item.product.description}</p>
                  <p className="text-lg font-bold text-amber-600 mt-2">{formatPrice(item.product.price)} each</p>
                </div>
                
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 bg-white rounded hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="w-12 text-center font-bold text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 bg-white rounded hover:bg-gray-50 transition-colors flex items-center justify-center"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            {items.map(item => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-gray-600">{item.product.name} × {item.quantity}</span>
                <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-6 mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{formatPrice(getTotalPrice())}</span>
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-gray-600">VAT (15%)</span>
              <span className="font-medium">{formatPrice(getTotalPrice() * 0.15)}</span>
            </div>
            <div className="flex justify-between items-baseline text-xl font-bold text-gray-900 mt-4">
              <span>Total</span>
              <span className="text-2xl text-amber-600">{formatPrice(getTotalPrice() * 1.15)}</span>
            </div>
          </div>
          
          <Link href="/checkout" className="block w-full">
            <button className="w-full bg-amber-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-amber-700 transition-colors mb-3 transform hover:scale-105">
              Proceed to Checkout
            </button>
          </Link>
          
          <button
            onClick={clearCart}
            className="w-full text-red-600 hover:text-red-700 text-sm font-medium py-2"
          >
            Clear Cart
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}