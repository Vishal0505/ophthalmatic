import { Button, Flex, Text } from "@radix-ui/themes";
import about_us from '../../assets/about/about_us.jpg';
import Container from "../../components/ui/container";

export default function AboutUs() {
    return (
        <>
            <Container>
                <Flex align='center' justify='center' gap='7'>
                    <Flex className="flex-1">
                        <img
                            src={about_us}
                            alt="About Us"
                            className="w-full h-auto"
                        />
                    </Flex>
                    <Flex className="flex-1" direction='column' gap='5'>
                        <Flex>
                            <Text className="text-primary text-base font-medium" >
                                About Us
                            </Text>
                        </Flex>
                        <Flex>
                            <Text className="font-semibold text-4xl">
                                Who We Are
                            </Text>
                        </Flex>
                        <Flex direction='column' gap='3'>
                            <Flex>
                                <Text>
                                    Ophthalmatic is a leading medical equipment manufacturing company known for its quality, reliability, and technological innovations. Their ophthalmological equipment range is produced using cutting-edge technology, meeting global industry standards. The designs reflect a deep understanding of ophthalmologist’s real needs, gathered by the company’s founders over many years. Their competitive edge is enhanced by prompt delivery, dedicated after-sales support, and valuable technical advice.
                                </Text>
                            </Flex>
                            <Flex>
                                <Button variant="outline" size='4' radius="full" className="!text-primary !border-primary hover:!bg-footerbg hover:!text-textWhite">
                                    View More
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </>
    );
}
