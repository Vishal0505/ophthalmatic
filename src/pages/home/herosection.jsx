import { Box, Flex, Text } from "@radix-ui/themes";
import bgimg from "../../assets/bg/bgimg.jpg";
import BackgroundImage from "../../components/ui/background-image";

export default function Herosection() {
  return (

    <Box className="relative bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-300 inset-0 overflow-hidden">
      <BackgroundImage imageUrl={bgimg} opacity={0.7} />
      <Box className="relative text-center overflow-hidden" height='100vh'>
        <Flex direction='column' gap='4' justify='center' align='center' className=" h-full">
          <Text size='9'>Gadhiya Groups</Text>
          <Text size='4'>Hero Section Will Comming Soon.............!</Text>
        </Flex>
      </Box>
      <Box className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-l from-pink-300 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></Box>
    </Box>
  )
}
