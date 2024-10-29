import React, { useState, useEffect } from 'react';

const Slider = ({ items, itemsPerSlide = 3, autoSlide = true, slideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  // Handles the next slide with wrapping
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Handles the previous slide with wrapping
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Auto-slide effect using useEffect and setInterval
  useEffect(() => {
    if (!autoSlide) return;

    const intervalId = setInterval(() => {
      handleNext();
    }, slideInterval);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [autoSlide, slideInterval]);

  // Determines items to display for the current slide
  const currentItems = items.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`,
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="p-4 bg-white shadow-md rounded-md">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        Prev
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
