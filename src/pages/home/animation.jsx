import { Box, Button, Flex, Text } from "@radix-ui/themes";
import Container from "../../components/ui/container";
import Phone from "../../components/icons/phone";
import animation from "../../assets/animation/animation.jpg"
import Play from "../../components/icons/play";

export default function Animation() {
    return (
        <Container className="h-full">
            <Box className=" p-6 bg-cover bg-center rounded-[50px]" style={{ backgroundImage: `url(${animation})` }}>
                <Flex justify='center' align='center' height='100%'>
                    <Flex direction='column' gap='4' justify='center' align='center' height='100%'>
                        <Text size='4' className="text-white text-center font-medium">
                            Discover the Power of Precision
                        </Text>
                        <Text className="text-textWhite text-center text-[54px] w-3/4 font-semibold">
                            Discover the power of our innovative tools.
                        </Text>

                        <Button variant="solid" size='4' radius="full" className="!text-textBlack !bg-textWhite hover:!bg-footerbg hover:!text-textWhite">
                            Play Video  <Play />
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    )
}
