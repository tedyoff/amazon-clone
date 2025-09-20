import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, title, price, image }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className="w-full h-48 object-contain mb-2" />
        <h2 className="font-semibold">{title}</h2>
        <p className="mt-1 font-bold">${price}</p>
      </Link>
    </div>
  );
}

export default ProductCard;
