'use client';

import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/currency';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentNumber: '',
    deliveryMethod: 'pickup',
    paymentMethod: 'cash',
    specialInstructions: ''
  });

  const subtotal = getTotalPrice();
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate order number
    const orderNumber = `CH${Date.now().toString().slice(-8)}`;
    
    // Store order details
    localStorage.setItem('lastOrder', JSON.stringify({
      orderNumber,
      items,
      total,
      formData,
      timestamp: new Date().toISOString()
    }));
    
    setOrderPlaced(true);
    clearCart();
    
    // Redirect to confirmation after 3 seconds
    setTimeout(() => {
      router.push(`/order-confirmation?order=${orderNumber}`);
    }, 3000);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">Please add some items to your cart before checkout.</p>
            <Link href="/#menu" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <div className="animate-bounce mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Order Placed Successfully!</h1>
            <p className="text-gray-600">Redirecting to confirmation...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Checkout</h1>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Your Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-900">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-900">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-900">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-900">Student Number (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                    value={formData.studentNumber}
                    onChange={(e) => setFormData({...formData, studentNumber: e.target.value})}
                    placeholder="For student discount verification"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Collection Method</h3>
                <div className="space-y-3">
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all shadow-sm ${
                    formData.deliveryMethod === 'pickup' 
                      ? 'border-amber-500 bg-amber-50' 
                      : 'border-gray-300 bg-white hover:bg-amber-50 hover:border-amber-300'
                  }`}>
                    <input
                      type="radio"
                      name="delivery"
                      value="pickup"
                      checked={formData.deliveryMethod === 'pickup'}
                      onChange={(e) => setFormData({...formData, deliveryMethod: e.target.value})}
                      className="mr-3 text-amber-600 focus:ring-amber-500 w-5 h-5"
                    />
                    <div>
                      <p className="font-bold text-gray-900">Pickup at Store</p>
                      <p className="text-sm text-gray-700">Ready in 15-20 minutes</p>
                    </div>
                  </label>
                  
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all shadow-sm ${
                    formData.deliveryMethod === 'delivery' 
                      ? 'border-amber-500 bg-amber-50' 
                      : 'border-gray-300 bg-white hover:bg-amber-50 hover:border-amber-300'
                  }`}>
                    <input
                      type="radio"
                      name="delivery"
                      value="delivery"
                      checked={formData.deliveryMethod === 'delivery'}
                      onChange={(e) => setFormData({...formData, deliveryMethod: e.target.value})}
                      className="mr-3 text-amber-600 focus:ring-amber-500 w-5 h-5"
                    />
                    <div>
                      <p className="font-bold text-gray-900">Campus Delivery</p>
                      <p className="text-sm text-gray-700">Within UNIVEN campus only (+R10)</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Payment Method</h3>
                <div className="space-y-3">
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all shadow-sm ${
                    formData.paymentMethod === 'cash' 
                      ? 'border-amber-500 bg-amber-50' 
                      : 'border-gray-300 bg-white hover:bg-amber-50 hover:border-amber-300'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                      className="mr-3 text-amber-600 focus:ring-amber-500 w-5 h-5"
                    />
                    <div>
                      <p className="font-bold text-gray-900">Cash on Collection</p>
                      <p className="text-sm text-gray-700">Pay when you collect your order</p>
                    </div>
                  </label>
                  
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all shadow-sm ${
                    formData.paymentMethod === 'eft' 
                      ? 'border-amber-500 bg-amber-50' 
                      : 'border-gray-300 bg-white hover:bg-amber-50 hover:border-amber-300'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="eft"
                      checked={formData.paymentMethod === 'eft'}
                      onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                      className="mr-3 text-amber-600 focus:ring-amber-500 w-5 h-5"
                    />
                    <div>
                      <p className="font-bold text-gray-900">EFT/Bank Transfer</p>
                      <p className="text-sm text-gray-700">Transfer to our bank account (details in confirmation)</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold mb-2 text-gray-900">Special Instructions (Optional)</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                  value={formData.specialInstructions}
                  onChange={(e) => setFormData({...formData, specialInstructions: e.target.value})}
                  placeholder="Any special requests or dietary requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-amber-700 transition-colors transform hover:scale-105"
              >
                Place Order • {formatPrice(total + (formData.deliveryMethod === 'delivery' ? 10 : 0))}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 border border-gray-100">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {items.map(item => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.product.name} × {item.quantity}</span>
                    <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>VAT (15%)</span>
                  <span>{formatPrice(vat)}</span>
                </div>
                {formData.deliveryMethod === 'delivery' && (
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span>{formatPrice(10)}</span>
                  </div>
                )}
                <div className="border-t pt-2 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-amber-600">
                    {formatPrice(total + (formData.deliveryMethod === 'delivery' ? 10 : 0))}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Orders are typically ready in 15-20 minutes. 
                  You'll receive a confirmation email with your order details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}