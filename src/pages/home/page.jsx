import { Flex } from "@radix-ui/themes";
import AboutUs from "../about-us/page";
import Certificates from "./certificates";
import CompanyOverview from "./companyoverview";
import Founders from "./founders";
import Herosection from "./herosection";
import OurHorizon from "./our-horizon";
import OurValue from "./our-value";

export default function HomePage() {
  return (
    <Flex direction='column' gap='8'>
      <Herosection />
      <AboutUs />
      <CompanyOverview />
      <Founders />
      <OurHorizon />
      <OurValue />
      <Certificates />
    </Flex>
  )
}
