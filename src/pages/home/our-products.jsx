import { Box, Flex, Text } from "@radix-ui/themes";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../components/icons/round/left-arrow";
import RightArrow from "../../components/icons/round/right-arrow";
import Container from "../../components/ui/container";
import { Products } from "../products/constant";
import { scrollToTop } from "../../utils/utils";

export default function OurProducts({ title, subTitles }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  let navigate = useNavigate();

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

  const totalSlides = Math.ceil(Products.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const currentItems = Products.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <>
      <Container className="w-full">
        {/* <Slider items={items} itemsPerSlide={4} /> */}
        <Flex direction="column" className="w-full overflow-hidden" gap="7">
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

              <Box
                className={`cursor-pointer ${currentIndex === 0 && "opacity-50 pointer-events-none"
                  }`}
                onClick={handlePrev}
              >
                <LeftArrow />
              </Box>
              <Box
                className={`cursor-pointer ${currentIndex === totalSlides - 1 &&
                  "opacity-50 pointer-events-none"
                  }`}
                onClick={handleNext}
              >
                <RightArrow />
              </Box>
            </Flex>
          </Flex>
          <Flex gap="5">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="flex-1"
                onClick={() => {
                  scrollToTop();
                  navigate("/product-detail", { state: { product: item } });
                }}
              >
                <Flex
                  direction="column"
                  className="p-4 bg-white rounded-md border border-gray-300"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="h-56 object-contain rounded-md mb-4"
                  />
                  <Flex justify="center" direction="column">
                    <Text
                      align="center"
                      className="text-base font-medium text-center "
                    >
                      {item.category}
                    </Text>
                    <Text
                      align="center"
                      className="text-base font-medium text-center "
                    >
                      {item.name}
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