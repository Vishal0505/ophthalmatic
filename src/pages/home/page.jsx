import { Flex } from "@radix-ui/themes";
import AboutUs from "../about-us/page";
import Animation from "./animation";
import Certificates from "./certificates";
import HaveQuestion from "./have-question";
import Herosection from "./herosection";
import OurHorizon from "./our-horizon";
import WhyChooseUs from "./why-us";
import OurProducts from "./our-products";

export default function HomePage() {
  return (
    <Flex direction='column' gap='8'>
      <Herosection />
      <AboutUs />
      <WhyChooseUs />
      <OurProducts title={"Our Products"} subTitles={"Explore Our Premium Products"}/>
      <Animation />
      <OurHorizon />
      <HaveQuestion  />
      <Certificates />
    </Flex>
  )
}
