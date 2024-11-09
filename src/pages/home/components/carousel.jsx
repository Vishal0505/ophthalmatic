import { Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const Slider = ({
  items,
  itemsPerSlide = 4,
  autoSlide = true,
  slideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };
  
  const currentItems = items.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <div className=" w-full overflow-hidden px-4  border border-green-600">
      <Flex justify="between" pb="4">
        <Flex direction="column" align="start">
          <Text size="2" className="text-primary" align="right">
            Our Products
          </Text>
          <Text size="4" weight="medium">
            Explore Our Premium Products
          </Text>
        </Flex>
        <Flex gap="2">
          <ChevronLeft
            onClick={handlePrev}
            className=" border border-blue-950 rounded-full size-8 p-2"
          />
          <ChevronRight
            onClick={handleNext}
            className=" border border-blue-950 rounded-full size-8 p-2"
          />
        </Flex>
      </Flex>
      <div
        className="flex"
        // style={{
        //   transform: `translateX(-${currentIndex * 50}%)`,
        // }}
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 px-4 border border-red-600"
          >
            <div className="p-4 bg-white rounded-md border border-gray-300">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <Flex justify="center" direction="column">
                <Text
                  align="center"
                  className="text-base font-medium text-center "
                >
                  {item.name}
                </Text>
                <Text
                  align="center"
                  className="text-base font-medium text-center "
                >
                  {item.category}
                </Text>
              </Flex>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
