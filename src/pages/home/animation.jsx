import { Box, Button, Flex, Text } from "@radix-ui/themes";
import animation from "../../assets/animation/animation.jpg";
import Play from "../../components/icons/play";
import Container from "../../components/ui/container";

export default function Animation() {
  return (
    <Container className="h-full">
      <Box
        className="px-12 py-20 sm:px-24 sm:py-28 bg-cover bg-center rounded-[50px]"
        style={{ backgroundImage: `url(${animation})` }}
      >
        <Flex justify="center" align="center" height="100%">
          <Flex
            direction="column"
            gap="4"
            justify="center"
            align="center"
            height="100%"
          >
            <Text className="text-base sm:text-lg text-white text-center font-medium">
              Discover the Power of Precision
            </Text>
            <Text className="text-textWhite text-center text-xl sm:text-4xl sm:text-[54px] w-3/4 font-medium">
              Discover the power of our innovative tools.
            </Text>

            <Button
              variant="solid"
              size={{
                initial: "3",
                sm: "3",
                lg: "4",
              }}
              radius="full"
              className="!text-textBlack !bg-textWhite hover:!bg-footerbg hover:!text-textWhite"
            >
              Play Video <Play />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
