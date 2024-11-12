import { Box, Flex, Text } from "@radix-ui/themes";
import React from "react";
import img1 from "../../assets/certificates/1.png";
import img10 from "../../assets/certificates/10.png";
import img11 from "../../assets/certificates/11.png";
import img12 from "../../assets/certificates/12.png";
import img13 from "../../assets/certificates/13.png";
import img14 from "../../assets/certificates/14.png";
import img15 from "../../assets/certificates/15.png";
import img16 from "../../assets/certificates/16.png";
import img17 from "../../assets/certificates/17.png";
import img18 from "../../assets/certificates/18.png";
import img19 from "../../assets/certificates/19.png";
import img2 from "../../assets/certificates/2.png";
import img3 from "../../assets/certificates/3.png";
import img4 from "../../assets/certificates/4.png";
import img5 from "../../assets/certificates/5.png";
import img6 from "../../assets/certificates/6.png";
import img7 from "../../assets/certificates/7.png";
import img8 from "../../assets/certificates/8.png";
import img9 from "../../assets/certificates/9.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img6,
  img7,
  img5,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];

export default function Certificates() {
  return (
    <React.Fragment>
      <Box className=" max-w-full mx-auto text-center py-12">
        <Flex direction="column" justify="center" align="center">
          <Text size="2" className="text-primary">
            Trusted & Certified
          </Text>
          <Text weight="medium" className="text-black text-xl sm:text-3xl">
            Recognized for quality and industry excellence.
          </Text>
        </Flex>
        <Flex className="overflow-hidden w-full h-auto">
          <Flex className="flex w-max animate-slide gap-8 py-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Sliding Image ${index}`}
                className="w-full !h-[120px] object-cover"
              />
            ))}
            {images.map((image, index) => (
              <img
                key={index + images.length}
                src={image}
                alt={`Sliding Image ${index}`}
                className="w-full !h-[120px] object-cover"
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </React.Fragment>
  );
}
