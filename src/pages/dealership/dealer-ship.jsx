import { Flex, Text } from "@radix-ui/themes";
import { NavLink } from "react-router-dom";
import grow from "../../assets/dealership/grow.png";
import innovative from "../../assets/dealership/innovative.png";
import Container from "../../components/ui/container";

export default function DealerShip() {

    return (
        <Flex direction='column' gap='8'>
            <Flex direction='column' py='9' style={{ background: "linear-gradient(91.45deg, rgba(40, 70, 148, 0.14) -1.47%, rgba(255, 255, 255, 0.14) 23.84%, rgba(40, 70, 148, 0.14) 49.14%, rgba(255, 255, 255, 0.14) 74.45%, rgba(40, 70, 148, 0.14) 99.76%)" }}>
                <Flex gap='3' align='center' justify='center' width='100%'>
                    <Text className="text-5xl font-semibold text-primary">Dealership</Text>
                </Flex>
                <Flex justify="center" gap='2' className="text-sm font-medium">
                    <NavLink to="/" className='text-textGray'>
                        Home
                    </NavLink>
                    <Text className='text-textGray'>/</Text>
                    <NavLink to="/dealership" className={({ isActive }) => isActive && 'text-primary'}>
                        Dealership
                    </NavLink>
                </Flex>
            </Flex>
            <Flex gap='8' direction='column' width='100%'>
                <Container className="w-full">
                    {/* Grow with Us  */}
                    <Flex direction='column' justify='center' align='center' gap='8'>
                        <Flex direction='column' justify='center' align='center' gap='2'>
                            <Text size="2" className="text-primary">
                                Grow with Us
                            </Text>
                            <Text weight="medium" className="text-black text-xl sm:text-3xl">
                                Why Partner With Ophthalmatic
                            </Text>
                        </Flex>
                        <Flex className="b w-full !justify-evenly">
                            <Flex gap='5' direction='column' className="b" justify='between' maxWidth='320px'>
                                <img src={grow} alt="Logo" className="object-none h-[60px]" />
                                <Flex direction='column' gap='2'>
                                    <Text className="text-xl font-medium text-center">
                                        Trusted Expertise
                                    </Text>
                                    <Text className="text-base font-normal text-center">
                                        Our extensive experience provides you with top-quality products and trusted insights tailored to your practice.
                                    </Text>
                                </Flex>
                            </Flex>

                            <Flex direction='column' className="b" justify='between' maxWidth='320px' >
                                <img src={innovative} alt="Logo" className="object-none h-[60px]" />
                                <Flex direction='column' gap='2'>
                                    <Text className="text-xl font-medium text-center">
                                        Innovative Solutions
                                    </Text>
                                    <Text className="text-base font-normal text-center">
                                        We offer advanced tools that enhance accuracy and efficiency, helping you deliver the best patient care
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex direction='column' className="b" justify='between' maxWidth='320px'>
                                <img src={innovative} alt="Logo" className="object-none h-[60px]" />
                                <Flex direction='column' gap='2'>
                                    <Text className="text-xl font-medium text-center">
                                        Dedicated Support
                                    </Text>
                                    <Text className="text-base font-normal text-center">
                                        Count on our team for responsive, personalized support, focused on helping your practice thrive.
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
        </Flex>
    )
}
