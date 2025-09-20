import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

// Menu Pages
import TodaysDeals from "./pages/TodaysDeals";
import CustomerService from "./pages/CustomerService";
import Registry from "./pages/Registry";
import GiftCards from "./pages/GiftCards";
import Sell from "./pages/Sell";

import { LocationProvider } from "./contexts/LocationContext";

function App() {
  const [cart, setCart] = useState([]);

  // ✅ Sample Products (Amazon-style)
  const products = [
    {
      id: 1,
      title: "Apple iPhone 15 Pro",
      price: 999.99,
      rating: 5,
      category: "Electronics",
      image:
        "https://s7d1.scene7.com/is/image/dish/iPhone_15_Pro_Black_1?$ProductBase$&fmt=webp-alpha",
      description: "The latest iPhone with amazing performance.",
    },
    {
      id: 2,
      title: "Samsung Galaxy S23",
      price: 899.99,
      rating: 4,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1709744722656-9b850470293f?q=80&w=2127&auto=format&fit=crop",
      description: "High-end Android smartphone with excellent camera.",
    },
    {
      id: 3,
      title: "The Lean Startup",
      price: 19.99,
      rating: 5,
      category: "Books",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1198&auto=format&fit=crop",
      description: "Book on how to build a successful startup.",
    },
    {
      id: 4,
      title: "Nike Air Max Sneakers",
      price: 129.99,
      rating: 4,
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1570051779696-244e9f680cf7?q=80&w=764&auto=format&fit=crop",
      description: "Comfortable and stylish sneakers for everyday use.",
    },
    {
      id: 5,
      title: "LEGO Star Wars Set",
      price: 79.99,
      rating: 5,
      category: "Toys",
      image:
        "https://images.unsplash.com/photo-1683624307337-9f8e0b7cba4f?q=80&w=1974&auto=format&fit=crop",
      description: "Fun LEGO set for kids and collectors.",
    },
    {
      id: 6,
      title: "Amazon Echo Dot",
      price: 49.99,
      rating: 4,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=1074&auto=format&fit=crop",
      description: "Smart speaker with Alexa voice assistant.",
    },
    {
      id: 7,
      title: "Harry Potter Box Set",
      price: 89.99,
      rating: 5,
      category: "Books",
      image:
        "https://images.unsplash.com/photo-1698816901348-6f7c035814ee?q=80&w=689&auto=format&fit=crop",
      description: "Complete Harry Potter book series collection.",
    },
    {
      id: 8,
      title: "Adidas Running Shorts",
      price: 29.99,
      rating: 4,
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1598443126060-d20c2f10bf0f?q=80&w=687&auto=format&fit=crop",
      description: "Lightweight and comfortable running shorts.",
    },
    {
      id: 9,
      title: "Barbie Dreamhouse",
      price: 199.99,
      rating: 5,
      category: "Toys",
      image:
        "https://plus.unsplash.com/premium_photo-1731107968247-6ad6d210a468?q=80&w=2137&auto=format&fit=crop",
      description: "Ultimate Barbie Dreamhouse for kids.",
    },
    {
      id: 10,
      title: "Sony WH-1000XM5 Headphones",
      price: 349.99,
      rating: 5,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1550009158-61dec72587bf?q=80&w=2000&auto=format&fit=crop",
      description: "Noise-cancelling over-ear headphones.",
    },
  ];

  // ✅ Cart Handler
  const addToCart = (product, quantity) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <LocationProvider>
      <Router>
        <Header cart={cart} />
        <main className="bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/products" element={<Products products={products} />} />
            <Route
              path="/product/:id"
              element={
                <ProductDetails products={products} addToCart={addToCart} />
              }
            />
            <Route
              path="/cart"
              element={<CartPage cart={cart} setCart={setCart} />}
            />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} setCart={setCart} />}
            />

            {/* Menu Pages */}
            <Route path="/today's-deals" element={<TodaysDeals />} />
            <Route path="/customer-service" element={<CustomerService />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LocationProvider>
  );
}

export default App;
