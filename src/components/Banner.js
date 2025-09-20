import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Banner() {
  const PrevArrow = ({ className, onClick }) => (
    <button
      className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-1 sm:p-2 rounded-full shadow ${className}`}
      onClick={onClick}
    >
      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
    </button>
  );

  const NextArrow = ({ className, onClick }) => (
    <button
      className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-1 sm:p-2 rounded-full shadow ${className}`}
      onClick={onClick}
    >
      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const images = [
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`banner-${i}`}
              className="w-full h-48 sm:h-72 md:h-96 object-cover"
            />
          </div>
        ))}
      </Slider>
      <div
        className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}

export default Banner;
