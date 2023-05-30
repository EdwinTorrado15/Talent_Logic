import React, { useState, useEffect } from "react";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideData = [
    "https://images.unsplash.com/photo-1654157925394-4b7809721149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80",
    "https://plus.unsplash.com/premium_photo-1683309555671-7efeac6caa3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1684848141072-6a0370502661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1685028667224-55f94b358d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative w-4/5 lg:w-2/3 h-2/5 lg:h-1/2 m-auto rounded-3xl mt-3 bg-gray-500">
      {/* Barras de navegación */}
      <div className="flex absolute bottom-0 left-0 right-0 justify-center mb-4">
        {slideData.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 lg:h-1 lg:w-12 mx-1 rounded-full cursor-pointer z-10 ${
              activeSlide === index ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>

      {/* Contenido del slider */}
      <div className="flex items-center justify-center w-full h-full rounded-3xl">
        {slideData.map((slide, index) => (
          <img
            key={index}
            className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-3xl transition-opacity duration-500"
            style={{ opacity: activeSlide === index ? 1 : 0 }}
            src={slide}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
