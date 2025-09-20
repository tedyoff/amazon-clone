import React from "react";

function Footer() {
  const sections = [
    {
      title: "Get to Know Us",
      links: ["About Us", "Careers", "Press Releases", "Amazon Cares"],
    },
    {
      title: "Connect with Us",
      links: ["Facebook", "Twitter", "Instagram"],
    },
    {
      title: "Make Money with Us",
      links: ["Sell on Amazon", "Affiliate Program", "Advertise Your Products"],
    },
    {
      title: "Let Us Help You",
      links: ["Your Account", "Returns Centre", "Help"],
    },
  ];

  // Smooth scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-amazon-blue text-white mt-12">
      {/* Back to Top */}
      <div
        onClick={scrollToTop}
        className="bg-gray-700 text-white text-center py-4 cursor-pointer hover:bg-gray-800"
      >
        Back to Top
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        {sections.map((section, i) => (
          <div key={i}>
            <h3 className="font-bold mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="bg-gray-800 text-center text-xs py-3">
        © 2025 Amazon Clone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
