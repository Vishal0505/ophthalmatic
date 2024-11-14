import { Box, Flex, Text } from "@radix-ui/themes";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Prod1 from "../../assets/products/prem-1.png";
import Prod2 from "../../assets/products/prem-2.png";
import Prod3 from "../../assets/products/prem-3.png";
import Prod4 from "../../assets/products/prem-4.png";
import LeftArrow from "../../components/icons/round/left-arrow";
import RightArrow from "../../components/icons/round/right-arrow";
import Container from "../../components/ui/container";
const products = [
  {
    id: 1,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod1,
  },
  {
    id: 2,
    name: " Ophthalmic Operation Table ",
    category: "(OT - 02)",
    imageUrl: Prod2,
  },
  {
    id: 3,
    name: "Ophthalmic Operation Table ",
    category: "(OT - 01) ",
    imageUrl: Prod3,
  },
  {
    id: 4,
    name: "Surgeon’s Chair ",
    category: "(SC-01)",
    imageUrl: Prod4,
  },
  {
    id: 5,
    name: "Ophthalmic Operation Table ",
    category: "(OT - 01) ",
    imageUrl: Prod1,
  },
  {
    id: 6,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod2,
  },
  {
    id: 7,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod2,
  }, {
    id: 8,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod2,
  },
];

export default function OurProducts({ title, subTitles }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  console.log("currentIndex", currentIndex);

  const updateItemsPerSlide = () => {
    if (window.innerWidth <= 768) {
      setItemsPerSlide(1);
    } else if (window.innerWidth <= 1024) {
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(4);
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerSlide]);


  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const currentItems = products.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <>
      <Container className="w-full">
        <Flex direction='column' className="w-full overflow-hidden" gap='7'>
          <Flex justify="between">
            <Flex direction="column" align="start">
              <Text className="text-primary text-base font-medium">
                {title}
              </Text>
              <Text className="text-black text-[40px] font-semibold">
                {subTitles}
              </Text>
            </Flex>
            <Flex gap="4">
              <Box className={`cursor-pointer ${currentIndex === 0 && 'opacity-50 pointer-events-none'}`} onClick={handlePrev} aria-label="Previous slide">
                <LeftArrow />
              </Box>
              <Box className={`cursor-pointer ${currentIndex === totalSlides - 1 && 'opacity-50 pointer-events-none'}`} onClick={handleNext}>
                <RightArrow />
              </Box>

            </Flex>
          </Flex>
          <Flex gap='5' style={{ gridTemplateColumns: `repeat(${itemsPerSlide}, 1fr)` }}>
            {currentItems.map((item) => (
              <div key={item.id} className="flex-1">
                <Flex direction='column' className="p-4 bg-white rounded-md border border-gray-300">
                  <img src={item.imageUrl} alt={item.name} className="h-56 object-contain rounded-md mb-4" loading="lazy" />
                  <Flex justify="center" direction="column">
                    <Text align="center" className="text-base font-medium text-center "  >
                      {item.name}
                    </Text>
                    <Text align="center" className="text-base font-medium text-center " >
                      {item.category}
                    </Text>
                  </Flex>
                </Flex>
              </div>
            ))}
          </Flex>
        </Flex>
      </Container>
    </>
  );
}


OurProducts.propTypes = {
  title: PropTypes.string.isRequired,    // title should be a string and is required
  subTitles: PropTypes.string.isRequired // subTitles should be a string and is required
};