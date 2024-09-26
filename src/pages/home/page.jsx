import { Box } from "@radix-ui/themes";
import Herosection from "./herosection";
import CompanyOverview from "./companyoverview";
import Founders from "./founders";
import OurHorizon from "./our-horizon";

export default function HomePage() {
  return (
    <Box className="bg-gray-50" >
      <Herosection />
      <CompanyOverview />
      <Founders />
      <OurHorizon />
    </Box>
  )
}
