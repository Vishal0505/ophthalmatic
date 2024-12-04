import { Box, Button, Flex, Text } from "@radix-ui/themes";
import hero_bg from "../../assets/herosection/hero_bg.jpg";
import Container from "../../components/ui/container";
import Phone from "../../components/icons/phone";

export default function Herosection() {
  return (
    <Box className="px-0 sm:px-6 bg-cover bg-center" style={{ backgroundImage: `url(${hero_bg})` }}>
      <Container className="h-full">
        <Flex justify='center' align='center' className=" pb-24 pt-10 sm:pb-32 sm:pt-12">
          <Flex className="w-3/4 sm:w-2/3 gap-8 sm:gap-6" direction='column' justify='center' align='center' height='100%'>
            <Text className="text-textWhite text-center text-3xl sm:text-6xl font-semibold">
              Reliable <span className="text-yellow-400">Dental Equipment</span> for Every Practice
            </Text>
            <Text size='4' className="text-white text-center font-medium">
              Explore a wide range of high-quality tools and technology, designed to elevate your clinic’s care. Fast shipping, expert support, and trusted brands.
            </Text>
            <a
              className="font-normal text-base"
              href="tel:+918140259610"
            >
              <Button variant="solid" size='4' radius="full" className="!bg-primary hover:!bg-footerbg" >
                <Phone /> Contact Now
              </Button>
            </a>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
