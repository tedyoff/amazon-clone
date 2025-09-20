import React from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";

function Home({ products }) {
  return (
    <main className="bg-gray-100">
      {/* Banner */}
      <Banner />

      {/* Products Grid Overlapping Banner */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 -mt-20 relative z-20">
        {products.map((p) => (
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

export default Home;
