import { Flex, Text } from "@radix-ui/themes";
import Container from "../../components/ui/container";
import Slider from "./components/carousel";
import Prod1 from "../../assets/products/prem-1.png";
import Prod2 from "../../assets/products/prem-2.png";
import Prod3 from "../../assets/products/prem-3.png";
import Prod4 from "../../assets/products/prem-4.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
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
  },{
    id: 8,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod2,
  },
];

export default function OurProducts({title, subTitles}) {
  let itemsPerSlide = 4


  const [currentIndex, setCurrentIndex] = useState(0);


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
      <Container >
        {/* <Slider items={items} itemsPerSlide={4} /> */}
        <div className=" w-full overflow-hidden px-4 ">
        <Flex justify="between" pb="4">
        <Flex direction="column" align="start">
          <Text size="2" className="text-primary" align="right">
            {title}
          </Text>
          <Text size="4" weight="medium">
            {subTitles}
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
        className="flex "
    
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-full sm:w-2/5 md:w-1/3 lg:w-1/4 px-4"
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
      </Container>
    </>
  );
}
