import { Box, Flex, Text } from "@radix-ui/themes";
import Chair from "../../assets/why-us/chair.png";
import BgOne from "../../assets/why-us/trusted_a_bg.png";
import BgTwo from "../../assets/why-us/trusted_b_bg.png";

export default function WhyChooseUs() {
  return (
    <>
      <Box className="bg-skyblue py-10 sm:py-12  relative ">
        <Box className=" absolute top-0 right-0 w-52 ">
          <img className="hidden sm:block" src={BgOne}></img>
        </Box>
        <Box className=" absolute bottom-0 left-0 w-52">
          <img className="hidden sm:block" src={BgTwo}></img>
        </Box>
        <Flex direction="column" gap="4">
          <Box>
            <Flex
              // justify="center"
              // align="center"
              // direction="column"
              // gap="6"
              className=" justify-center items-center flex-col gap-4"
            >
              <Text size="2" className="text-primary">
                Why Choose us
              </Text>
              <Text weight="medium" className="text-black text-xl sm:text-3xl">
                Trusted Quality, Unmatched Expertise
              </Text>
            </Flex>
          </Box>
          <Flex
            className="flex-col sm:flex-row gap-8 sm:gap-10"
            justify="center"
            align="center"
            px="8"
            // gap="6"
          >
            <Box className="">
              <Flex className="flex-col gap-4 sm:gap-8 ">
                <Flex direction="column">
                  <Text className="pb-1 text-base sm:text-lg text-start sm:text-end font-medium">
                    Premium Quality
                  </Text>
                  <Text className="text-textskyblue text-start sm:text-end">
                    We offer durable, high-performance equipment
                  </Text>
                  <Text className="text-textskyblue text-start sm:text-end">
                    from top manufacturers, ensuring the best
                  </Text>
                  <Text className="text-textskyblue text-start sm:text-end">
                    results for your practice.
                  </Text>
                </Flex>
                <Flex direction="column" className="">
                  <Text className="pb-1 text-base sm:text-lg text-start sm:text-end font-medium">
                    Expert Guidance
                  </Text>
                  <Text className="text-textskyblue text-start sm:text-end">
                    Our team helps you find the right solutions
                  </Text>
                  <Text className="text-textskyblue text-start sm:text-end">
                    tailored to your practice.
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="w-3/4 sm:w-auto">
              <img src={Chair} />
            </Box>
            <Box className="">
            <Flex className="flex-col gap-4 sm:gap-8 ">

                <Flex direction="column">
                  <Text className="pb-1 text-base sm:text-lg text-start  font-medium">
                    Fast Delivery
                  </Text>
                  <Text className="text-textskyblue text-start ">
                    Count on timely deliveries to keep your practice
                  </Text>
                  <Text className="text-textskyblue text-start ">
                    running smoothly.
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text className="pb-1 text-base sm:text-lg text-start  font-medium">
                    Competitive Prices
                  </Text>
                  <Text className="text-textskyblue text-start ">
                    Get top-tier products at affordable prices,
                  </Text>
                  <Text className="text-textskyblue text-start ">
                    without sacrificing quality.
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
