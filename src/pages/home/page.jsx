import { Box } from "@radix-ui/themes";
import CompanyOverview from "./companyoverview";
import Founders from "./founders";
import Herosection from "./herosection";
import OurHorizon from "./our-horizon";
import OurValue from "./our-value";
import Certificates from "./certificates";

export default function HomePage() {
  return (
    <Box  >
      <Herosection />
      <CompanyOverview />
      <Founders />
      <OurHorizon />
      <OurValue />
      <Certificates/>
    </Box>
  )
}
