import React from "react";
import ProductCard from "../../components/ProductCard";

// Sample categories/products
const allProducts = [
  {
    id: 201,
    title: "Laptop Sleeve",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/71eR6+EJiyL._AC_SX679_.jpg",
  },
  {
    id: 202,
    title: "Wireless Mouse",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/61EwH8nAK9L._AC_SX679_.jpg",
  },
  {
    id: 203,
    title: "Bluetooth Headphones",
    price: 59.99,
    image: "https://m.media-amazon.com/images/I/71CZjEPRsFL._AC_SX679_.jpg",
  },
  {
    id: 204,
    title: "Smart Plug",
    price: 14.99,
    image: "https://m.media-amazon.com/images/I/61FqQhP6ZCL._AC_SX679_.jpg",
  },
];

function All() {
  return (
    <main className="max-w-6xl mx-auto p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        ))}
      </section>
    </main>
  );
}

export default All;
