import { Box, Flex, Text } from "@radix-ui/themes";
import Chair from "../../assets/why-us/chair.png";

export default function WhyChooseUs() {
  return (
    <>
      <Box className="bg-sky-blue py-12 ">
        <Flex direction="column" gap="4">
          <Box>
            <Flex
              justify="center"
              align="center"
              direction="column"
              gap="4"
              className="px-60"
            >
              <Text size="2" className="text-primary-blue">
                Why Choose us
              </Text>
              <Text size="7" weight="medium" className="text-black">
                Trusted Quality, Unmatched Expertise
              </Text>
              <Text size="3"  align="center" className="text-black">
                These subtitles aim to convey trust, quality, and a focus on
                professional partnership. Do any of these capture the tone
                you're looking for?
              </Text>
            </Flex>
          </Box>
          <Flex direction="row" justify="center" align="center" px="9" gap="6">
            <Box className="w-4/5">
              <Flex direction="column" align="end" gap="4">
                <Flex direction="column">
                  <Text align="right" weight="medium">
                    Premium Quality
                  </Text>
                  <Text align="right">
                    We offer durable, high-performance equipment
                  </Text>
                  <Text align="right">
                    from top manufacturers, ensuring the best
                  </Text>
                  <Text align="right">results for your practice.</Text>
                </Flex>
                <Flex direction="column">
                  <Text align="right" weight="medium">
                    Expert Guidance
                  </Text>
                  <Text align="right">
                    Our team helps you find the right solutions
                  </Text>
                  <Text align="right"> tailored to your practice.</Text>
                </Flex>
              </Flex>
            </Box>
            <Box>
              <img src={Chair} />
            </Box>
            <Box className="w-4/5">
              <Flex direction="column" gap="4">
                <Flex direction="column">
                  <Text align="left" weight="medium">
                    Fast Delivery
                  </Text>
                  <Text align="left">
                    Count on timely deliveries to keep your practice
                  </Text>
                  <Text align="left">running smoothly.</Text>
                </Flex>
                <Flex direction="column">
                  <Text align="left" weight="medium">
                    Competitive Prices
                  </Text>
                  <Text align="left">
                    Get top-tier products at affordable prices,
                  </Text>
                  <Text align="left">without sacrificing quality.</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
