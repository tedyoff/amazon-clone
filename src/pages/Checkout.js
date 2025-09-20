import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocationContext } from "../contexts/LocationContext";

function Checkout({ cart, setCart }) {
  const { location } = useLocationContext();
  const navigate = useNavigate();
  const [address, setAddress] = useState(location);
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  // Calculate total
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(
      `Order placed successfully!\nDeliver to: ${address}\nTotal: $${total.toFixed(
        2
      )}`
    );
    setCart([]);
    navigate("/");
  };

  // Helper to get random estimated delivery date
  const getEstimatedDelivery = () => {
    const today = new Date();
    const deliveryDays = Math.floor(Math.random() * 5) + 3; // 3–7 days
    today.setDate(today.getDate() + deliveryDays);
    return today.toLocaleDateString();
  };

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delivery & Payment */}
        <div className="space-y-4">
          {/* Delivery Address */}
          <div className="p-4 border rounded">
            <h2 className="font-bold mb-2">Delivery Address</h2>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Payment Method */}
          <div className="p-4 border rounded">
            <h2 className="font-bold mb-2">Payment Method</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Amazon Pay">Amazon Pay</option>
            </select>
          </div>
        </div>

        {/* Order Summary */}
        <div className="p-4 border rounded flex flex-col gap-4">
          <h2 className="font-bold text-xl mb-2">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col gap-1 border-b pb-2">
              <div className="flex justify-between">
                <span>{item.title} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              {/* Stock Status */}
              <p className="text-green-600 text-sm">In Stock</p>
              {/* Estimated Delivery */}
              <p className="text-gray-600 text-sm">
                Estimated delivery: {getEstimatedDelivery()}
              </p>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="mt-4 w-full bg-amazon-yellow py-2 rounded font-semibold hover:bg-yellow-500"
          >
            Place Your Order
          </button>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
