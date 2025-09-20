import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaShoppingCart,
  FaUserCircle,
  FaGift,
  FaTags,
  FaHandsHelping,
  FaStore,
  FaChevronDown,
} from "react-icons/fa";
import { useLocationContext } from "../contexts/LocationContext";

function Header({ cart }) {
  const { location, updateLocation } = useLocationContext();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showLocation, setShowLocation] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      `/products?search=${encodeURIComponent(search.trim())}&category=${encodeURIComponent(
        category
      )}`
    );
    setSearch("");
  };

  const handleLocationSelect = (loc) => {
    updateLocation(loc);
    setShowLocation(false);
  };

  const menuItems = [
    {
      name: "Products",
      path: "/products",
      icon: null,
      dropdown: ["Electronics", "Books", "Clothing", "Toys"],
    },
    {
      name: "All",
      path: "/all",
      icon: <FaTags />,
      dropdown: [
        {
          title: "Top Categories",
          items: [
            { name: "Electronics", img: "/images/electronics.jpg" },
            { name: "Books", img: "/images/books.jpg" },
            { name: "Clothing", img: "/images/clothing.jpg" },
            { name: "Toys", img: "/images/toys.jpg" },
          ],
        },
        {
          title: "Trending",
          items: [
            { name: "Smart Home", img: "/images/smart-home.jpg" },
            { name: "Gaming", img: "/images/gaming.jpg" },
            { name: "Fitness", img: "/images/fitness.jpg" },
            { name: "Beauty", img: "/images/beauty.jpg" },
          ],
        },
        {
          title: "Featured",
          items: [
            { name: "Prime Deals", img: "/images/prime-deals.jpg" },
            { name: "New Releases", img: "/images/new-releases.jpg" },
            { name: "Best Sellers", img: "/images/best-sellers.jpg" },
          ],
        },
      ],
    },
    {
      name: "Today's Deals",
      path: "/today's-deals",
      icon: <FaGift />,
      dropdown: ["Lightning Deals", "Deal of the Day", "Limited Time Offers"],
    },
    {
      name: "Customer Service",
      path: "/customer-service",
      icon: <FaHandsHelping />,
      dropdown: ["Help Center", "Returns", "Contact Us"],
    },
    { name: "Registry", path: "/registry", icon: <FaStore />, dropdown: [] },
    { name: "Gift Cards", path: "/gift-cards", icon: <FaGift />, dropdown: [] },
    { name: "Sell", path: "/sell", icon: <FaStore />, dropdown: [] },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0 shadow-md" : "-translate-y-full"
      }`}
    >
      {/* Top Nav */}
      <div className="bg-[#131921] text-white flex items-center p-2 gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="./amazon-logo.png" alt="Amazon Logo" className="w-28 object-contain" />
        </Link>

        {/* Location */}
        <div className="relative hidden sm:flex">
          <button
            onClick={() => setShowLocation(!showLocation)}
            className="flex flex-col items-start px-2 hover:bg-[#232f3e] rounded focus:outline-none"
          >
            <span className="flex items-center gap-1 text-xs">
              <FaMapMarkerAlt /> Deliver to
            </span>
            <span className="font-bold">{location}</span>
          </button>
          {showLocation && (
            <div className="absolute top-10 left-0 bg-white text-black p-4 rounded shadow-lg z-50 w-48">
              <h3 className="font-bold mb-2">Choose your location</h3>
              <ul className="space-y-2">
                {["New York", "Los Angeles", "Chicago", "Houston"].map((loc) => (
                  <li key={loc}>
                    <button
                      onClick={() => handleLocationSelect(loc)}
                      className="hover:underline w-full text-left"
                    >
                      {loc}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-1 mx-2 rounded overflow-hidden"
        >
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-100 text-black p-2 outline-none"
          >
            {["All", "Books", "Electronics", "Clothing", "Toys"].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Amazon"
            className="flex-1 p-2 outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 px-4 hover:bg-yellow-500 font-semibold"
          >
            🔍
          </button>
        </form>

        {/* Right Nav */}
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/signin" className="flex flex-col items-start hover:underline">
            <FaUserCircle size={20} />
            <span>Sign In</span>
          </Link>
          <Link to="/orders" className="flex flex-col items-start hover:underline">
            Orders
          </Link>
          <Link to="/cart" className="flex flex-col items-start hover:underline">
            <FaShoppingCart size={20} />
            <span>Cart ({cart.length})</span>
          </Link>
        </nav>

        <button className="sm:hidden ml-2" onClick={() => setMobileMenu(!mobileMenu)}>
          ☰
        </button>
      </div>

      {/* Secondary Nav */}
      <div className="bg-[#232f3e] text-white px-4 py-2 flex gap-4 overflow-x-auto relative">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="relative flex items-center gap-1"
            onMouseEnter={() => setHoveredMenu(item.name)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link
              to={item.path}
              className="flex items-center gap-1 hover:underline whitespace-nowrap"
            >
              {item.icon && <span>{item.icon}</span>}
              {item.name} {item.dropdown.length > 0 && <FaChevronDown size={10} />}
            </Link>

            {/* Dropdown */}
            {hoveredMenu === item.name && item.dropdown.length > 0 && (
              <div className="absolute top-full left-0 bg-white text-black mt-1 rounded shadow-lg z-50 p-4 w-80 flex flex-wrap gap-4">
                {item.name === "All"
                  ? item.dropdown.map((section) => (
                      <div key={section.title} className="w-36">
                        <h4 className="font-bold text-sm mb-2">{section.title}</h4>
                        <ul className="space-y-1">
                          {section.items.map((sub) => (
                            <li key={sub.name} className="flex items-center gap-2">
                              <img
                                src={sub.img}
                                alt={sub.name}
                                className="w-10 h-10 object-cover rounded"
                              />
                              <Link
                                to={`/products?category=${encodeURIComponent(sub.name)}`}
                                className="hover:underline"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  : Array.isArray(item.dropdown)
                  ? item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        to={`/products?category=${encodeURIComponent(sub)}`}
                        className="block hover:bg-gray-200 p-1 rounded"
                      >
                        {sub}
                      </Link>
                    ))
                  : null}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile menu items */}
      {mobileMenu && (
        <div className="bg-[#232f3e] text-white flex flex-col px-4 py-2 sm:hidden">
          {menuItems.map((item) => (
            <div key={item.name} className="py-1">
              <Link
                to={item.path}
                className="flex items-center gap-1 hover:underline"
                onClick={() => setMobileMenu(false)}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
