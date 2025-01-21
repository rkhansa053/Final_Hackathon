

'use client';

import { useCart } from '@/app/CONTEXT/cartContext';
import Image from 'next/image';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // State to manage checkout form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  // State to track checkout submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateTotal = () =>
    cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);

  if (cart.length === 0) {
    return <h1 className="text-2xl font-bold text-center mt-10">Your cart is empty</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item._id} className="flex items-start gap-4">
              <div className="w-28 h-28 bg-gray-100 p-2 rounded-md">
                <Image
                  src={typeof item.image === 'string' ? item.image : item.image.url}
                  alt={item.productName}
                  className="w-full h-full object-contain"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold">{item.productName}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="mt-2 text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item._id, (item.quantity || 1) - 1)}
                  className="px-2 py-1 border border-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}
                  className="px-2 py-1 border border-gray-300"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <p>Total: ${calculateTotal()}</p>
          <button
            onClick={() => setIsSubmitting(true)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Checkout Form */}
      {isSubmitting && (
        <div className="mt-8 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCheckout();
            }}
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="address">
                Address
              </label>
              <textarea
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );

  function handleCheckout() {
    // Simulate order submission
    console.log('Order Submitted:', {
      formData,
      cart,
      total: calculateTotal(),
    });

    // After submitting the order, clear the cart and reset form
    // Assuming you have a clearCart method in your context
    // clearCart();
    alert('Order placed successfully!');
    setFormData({ name: '', email: '', address: '' });
    setIsSubmitting(false);
  }
}
