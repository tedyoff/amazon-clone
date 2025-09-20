import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocationContext } from "../contexts/LocationContext";

function CartPage({ cart, setCart }) {
  const navigate = useNavigate();
  const { location } = useLocationContext();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Update quantity
  const handleQuantityChange = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  // Remove item
  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Apply promo code
  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "AMAZON10") {
      setDiscount(0.1); // 10% off
      alert("Promo applied! 10% discount.");
    } else {
      setDiscount(0);
      alert("Invalid promo code.");
    }
  };

  // Total
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal * (1 - discount);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is empty. <Link to="/" className="text-blue-600 underline">Go shopping</Link>
        </p>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center p-4 border rounded bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />
                <div className="flex-1">
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="text-sm text-gray-600">
                    Estimated Delivery to <span className="font-semibold">{location}</span>
                  </p>
                  <p>${item.price.toFixed(2)} each</p>
                  <p className="font-semibold">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Quantity */}
                  <label>
                    Qty:
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="ml-2 w-16 p-1 border rounded"
                    />
                  </label>

                  {/* Remove button */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 ml-4 hover:underline"
                  >
                    Remove
                  </button>

                  {/* Availability */}
                  <p className="text-green-600 text-sm mt-1">In Stock</p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <p>Items: {cart.length}</p>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>

            {/* Promo code */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <button
                onClick={handleApplyPromo}
                className="bg-amazon-yellow px-3 rounded font-semibold hover:bg-yellow-500"
              >
                Apply
              </button>
            </div>

            {discount > 0 && (
              <p className="text-green-600 font-semibold">
                Discount applied: {discount * 100}%
              </p>
            )}

            <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-amazon-yellow py-2 rounded font-semibold hover:bg-yellow-500"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default CartPage;
