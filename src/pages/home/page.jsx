import { Flex } from "@radix-ui/themes";
import AboutUs from "../about-us/page";
import Animation from "./animation";
import Certificates from "./certificates";
import Herosection from "./herosection";
import OurHorizon from "./our-horizon";
import OurProducts from "./our-products";
import OurValue from "./our-value";
import WhyChooseUs from "./why-us";

export default function HomePage() {
  return (
    <Flex direction='column' gap='8'>
      <Herosection />
      <AboutUs />
      <WhyChooseUs />
      <Animation />
      <OurProducts />
      <OurHorizon />
      <OurValue />
      <Certificates />
    </Flex>
  )
}
