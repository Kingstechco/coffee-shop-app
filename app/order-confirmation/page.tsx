'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { formatPrice } from '@/utils/currency';

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('order');
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Order Not Found</h1>
        <Link href="/" className="text-amber-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  const estimatedTime = orderDetails.formData.deliveryMethod === 'pickup' ? '15-20 minutes' : '30-45 minutes';
  const deliveryFee = orderDetails.formData.deliveryMethod === 'delivery' ? 10 : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-2">Thank you for your order, {orderDetails.formData.name}</p>
            <p className="text-gray-600">Your order number is:</p>
            <p className="text-3xl font-bold text-amber-600 mt-2">{orderDetails.orderNumber}</p>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Order Details</h2>
            
            <div className="space-y-4 mb-8">
              {orderDetails.items.map((item: any) => (
                <div key={item.product.id} className="flex justify-between items-center py-3 border-b">
                  <div>
                    <p className="font-semibold">{item.product.name}</p>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <span className="font-semibold">{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(orderDetails.total / 1.15)}</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (15%)</span>
                <span>{formatPrice(orderDetails.total - (orderDetails.total / 1.15))}</span>
              </div>
              {deliveryFee > 0 && (
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>{formatPrice(deliveryFee)}</span>
                </div>
              )}
              <div className="flex justify-between text-xl font-bold pt-2 border-t">
                <span>Total</span>
                <span className="text-amber-600">{formatPrice(orderDetails.total + deliveryFee)}</span>
              </div>
            </div>
          </div>

          {/* Collection/Delivery Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">
              {orderDetails.formData.deliveryMethod === 'pickup' ? '📍 Pickup Information' : '🚚 Delivery Information'}
            </h2>
            
            <div className="bg-amber-50 rounded-lg p-6 mb-6">
              <p className="text-lg font-semibold text-amber-900 mb-2">
                Estimated Ready Time: {estimatedTime}
              </p>
              <p className="text-amber-800">
                {orderDetails.formData.deliveryMethod === 'pickup' 
                  ? 'Your order will be ready for pickup at Coffee Haven Limpopo, University of Venda'
                  : 'Your order will be delivered to your location within UNIVEN campus'}
              </p>
            </div>

            {orderDetails.formData.paymentMethod === 'eft' && (
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">🏦 Banking Details</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Bank:</strong> Standard Bank</p>
                  <p><strong>Account Name:</strong> Coffee Haven Limpopo</p>
                  <p><strong>Account Number:</strong> 123 456 7890</p>
                  <p><strong>Reference:</strong> {orderDetails.orderNumber}</p>
                </div>
                <p className="text-blue-800 mt-3 text-sm">
                  Please make payment within 30 minutes to confirm your order
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about your order, please don't hesitate to contact us:
            </p>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>015 962 8000</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>orders@coffeehavenlimpopo.co.za</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#menu" 
              className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors text-center"
            >
              Order Again
            </Link>
            <Link 
              href="/" 
              className="bg-white border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}