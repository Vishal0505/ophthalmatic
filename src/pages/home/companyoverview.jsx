import { Box, Flex, Text } from "@radix-ui/themes";
import Chair from "../../assets/why-us/chair.png";

export default function WhyChooseUs() {
  return (
    <>
      <Box className="bg-skyblue py-12 ">
        <Flex direction="column" gap="4">
          <Box>
            <Flex
              justify="center"
              align="center"
              direction="column"
              gap="4"
              className="px-60"
            >
              <Text size="2" className="text-primary">
                Why Choose us
              </Text>
              <Text size="7" weight="medium" className="text-black">
                Trusted Quality, Unmatched Expertise
              </Text>
              <Text size="3" align="center" className="text-black">
                These subtitles aim to convey trust, quality, and a focus on
                professional partnership. Do any of these capture the tone
                you’re looking for?
              </Text>
            </Flex>
          </Box>
          <Flex direction="row" justify="center" align="center" px="8" gap="6">
            <Box className="w-4/5">
              <Flex direction="column" align="end" gap="4">
                <Flex direction="column">
                  <Text align="right" weight="medium" className="pb-1">
                    Premium Quality
                  </Text>
                  <Text align="right" className="text-textskyblue">
                    We offer durable, high-performance equipment
                  </Text>
                  <Text align="right" className="text-textskyblue">
                    from top manufacturers, ensuring the best
                  </Text>
                  <Text align="right" className="text-textskyblue">
                    results for your practice.
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text align="right" weight="medium" className="pb-1">
                    Expert Guidance
                  </Text>
                  <Text align="right" className="text-textskyblue">
                    Our team helps you find the right solutions
                  </Text>
                  <Text align="right" className="text-textskyblue">
                    {" "}
                    tailored to your practice.
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box className="w-[460px]">
              <img src={Chair} />
            </Box>
            <Box className="w-4/5">
              <Flex direction="column" gap="4">
                <Flex direction="column">
                  <Text align="left" weight="medium" className="pb-1">
                    Fast Delivery
                  </Text>
                  <Text align="left" className="text-textskyblue">
                    Count on timely deliveries to keep your practice
                  </Text>
                  <Text align="left" className="text-textskyblue">running smoothly.</Text>
                </Flex>
                <Flex direction="column">
                  <Text align="left" weight="medium" className="pb-1">
                    Competitive Prices
                  </Text>
                  <Text align="left" className="text-textskyblue">
                    Get top-tier products at affordable prices,
                  </Text>
                  <Text align="left" className="text-textskyblue">without sacrificing quality.</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
