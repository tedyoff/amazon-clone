import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocationContext } from "../contexts/LocationContext";

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const { location } = useLocationContext();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p className="p-6 text-center">Product not found.</p>;

  return (
    <main className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-contain"
        />

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="font-bold text-xl">${product.price}</p>

          {/* Ratings */}
          <p>
            Rating: {"⭐".repeat(product.rating)} ({product.rating} / 5)
          </p>

          {/* Description */}
          <p>{product.description}</p>

          {/* Delivery Info */}
          <p className="text-sm text-gray-600 mt-2">
            Deliver to: <span className="font-semibold">{location}</span>
          </p>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mt-4">
            <label>
              Qty:
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="ml-2 w-16 p-1 border rounded"
              />
            </label>
            <button
              onClick={() => addToCart(product, quantity)}
              className="bg-amazon-yellow px-4 py-2 rounded font-semibold hover:bg-yellow-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
