import React from "react";
import { useLocation, Link } from "react-router-dom";

function Products({ products }) {
  const locationHook = useLocation();
  const queryParams = new URLSearchParams(locationHook.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";
  const categoryQuery = queryParams.get("category") || "All";

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery);
    const matchesCategory =
      categoryQuery === "All" || product.category === categoryQuery;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.length === 0 ? (
        <p className="col-span-full text-center text-gray-500">
          No products found for "{searchQuery}" in "{categoryQuery}" category.
        </p>
      ) : (
        filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border p-4 rounded hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-2"
            />
            <h2 className="font-bold text-sm mb-1">{product.title}</h2>
            <p className="text-gray-700 font-semibold mb-1">${product.price}</p>
            <p className="text-yellow-500">{'⭐'.repeat(product.rating)}</p>
          </Link>
        ))
      )}
    </main>
  );
}

export default Products;
