import { Box, Button, Flex, Text } from "@radix-ui/themes";
import hero_bg from "../../assets/herosection/hero_bg.jpg";
import Container from "../../components/ui/container";
import Phone from "../../components/icons/phone";

export default function Herosection() {
  return (
    <Box className="h-[74vh] px-6 bg-cover bg-center" style={{ backgroundImage: `url(${hero_bg})` }}>
      <Container className="h-full">
        <Flex justify='center' align='center' height='100%'>
          <Flex width='70%' direction='column' gap='4' justify='center' align='center' height='100%'>
            <Text className="text-textWhite text-center text-[70px] font-semibold">
              Reliable <span className="text-yellow-400">Dental Equipment</span> for Every Practice
            </Text>
            <Text size='4' className="text-white text-center font-medium">
              Explore a wide range of high-quality tools and technology, designed to elevate your clinic’s care. Fast shipping, expert support, and trusted brands.
            </Text>
            <Button variant="solid" size='4' radius="full" className="!bg-primary hover:!bg-footerbg">
              <Phone /> Contact Now
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
