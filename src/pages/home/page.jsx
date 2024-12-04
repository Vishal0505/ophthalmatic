import { Box, Flex } from "@radix-ui/themes";
import AboutUs from "../about-us/page";
import Animation from "./animation";
import Certificates from "./certificates";
import HaveQuestion from "./have-question";
import Herosection from "./herosection";
import OurHorizon from "./our-horizon";
import OurProducts from "./our-products";
import WhyChooseUs from "./why-us";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Adds smooth scrolling effect
  });
}, []);
  return (
    <Flex direction="column" gap="8">
      <Herosection />
      <AboutUs />
      <WhyChooseUs />
      <OurProducts
        title={"Our Products"}
        subTitles={"Explore Our Premium Products"}
      />
      <Animation />
      <OurHorizon />
      <Box className="bg-skyblue py-12">
        <HaveQuestion />
      </Box>
      <Certificates />
    </Flex>
  );
}
