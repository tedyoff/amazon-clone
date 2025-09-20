import React from "react";
import ProductCard from "../../components/ProductCard";

// Sample deals products
const dealsProducts = [
  {
    id: 101,
    title: "Fire TV Stick 4K – Deal",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/51CgKGfMelL._AC_SX679_.jpg",
  },
  {
    id: 102,
    title: "Echo Dot (5th Gen) – Deal",
    price: 39.99,
    image: "https://m.media-amazon.com/images/I/61MbLLagiVL._AC_SX679_.jpg",
  },
  {
    id: 103,
    title: "Kindle Paperwhite – Deal",
    price: 119.99,
    image: "https://m.media-amazon.com/images/I/61kKZ2N4LFL._AC_SX679_.jpg",
  },
  {
    id: 104,
    title: "Ring Video Doorbell – Deal",
    price: 79.99,
    image: "https://m.media-amazon.com/images/I/71m1A0pYkXL._AC_SX679_.jpg",
  },
];

function Deals() {
  return (
    <main className="max-w-6xl mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Today's Deals</h1>
      <p className="mb-4">Grab these limited-time offers before they are gone!</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dealsProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </section>
    </main>
  );
}

export default Deals;
