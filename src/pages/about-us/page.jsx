import { Box, Button, Card, Flex, Separator, Text } from "@radix-ui/themes";
import { NavLink, useLocation } from "react-router-dom";
import about_us from '../../assets/about/about_us.jpg';
import founder_1 from "../../assets/about/founder_1.png";
import mission from "../../assets/about/mission.png";
import aboutVector from "../../assets/about/vector.png";
import vision from "../../assets/about/vision.png";
import respect from "../../assets/about/respect.png";
import integrity from "../../assets/about/integrity.png";
import compassion from "../../assets/about/compassion.png";
import cure from "../../assets/about/cure.png";
import trust from "../../assets/about/trust.png";
import teamwork from "../../assets/about/teamwork.png";
import innovation from "../../assets/about/innovation.png";
import education from "../../assets/about/education.png";
import educationIcon from "../../assets/horizon/education.png";
import foundationIcon from "../../assets/horizon/foundation.png";
import hospitalIcon from "../../assets/horizon/hospital.png";
import wellnessIcon from "../../assets/horizon/wellness.png";
import Linkedin from "../../components/icons/linkedin";
import Whatsapp from "../../components/icons/whatsapp";
import Container from "../../components/ui/container";
import WhyChooseUs from "../home/why-us";
import Certificates from "../home/certificates";
import HaveQuestion from "../home/have-question";

export default function AboutUs() {
    const location = useLocation();

    const isAboutPage = location.pathname === '/about-us';

    return (
        <Flex direction='column'>
            {isAboutPage && (
                <Flex direction='column' py='9' style={{ background: "linear-gradient(91.45deg, rgba(40, 70, 148, 0.14) -1.47%, rgba(255, 255, 255, 0.14) 23.84%, rgba(40, 70, 148, 0.14) 49.14%, rgba(255, 255, 255, 0.14) 74.45%, rgba(40, 70, 148, 0.14) 99.76%)" }}>
                    <Flex gap='3' align='center' justify='center' width='100%'>
                        <Text className="text-5xl font-semibold text-primary">About</Text>
                        <Text className="text-5xl font-semibold">US</Text>
                    </Flex>
                    <Flex justify="center" gap='2' className="text-sm font-medium">
                        <NavLink to="/" className='text-textGray'>
                            Home
                        </NavLink>
                        <Text className='text-textGray'>/</Text>
                        <NavLink to="/about-us" className={({ isActive }) => isActive && 'text-primary'}>
                            About US
                        </NavLink>
                    </Flex>
                </Flex>
            )}
            <Container >
                <Flex direction='column' gap='8'>
                    <Flex align="center" justify="center" className={`flex-col sm:flex-row ${isAboutPage && "mt-12"}`} gap="7">
                        <Flex className="flex-1">
                            <img
                                src={about_us}
                                alt="About Us"
                                className="w-full h-auto"
                            />
                        </Flex>
                        <Flex className="flex-1 gap-5 " direction="column">
                            <Flex className="justify-center">
                                <Text className="text-primary text-base font-medium text-center">
                                    About Us
                                </Text>
                            </Flex>
                            <Flex className="justify-center">
                                <Text className="font-semibold text-3xl sm:text-4xl text-center ">
                                    Who We Are
                                </Text>
                            </Flex>
                            <Flex direction="column" gap="3">
                                <Flex>
                                    <Text>
                                        Ophthalmatic is a leading medical equipment manufacturing company
                                        known for its quality, reliability, and technological innovations. Their
                                        ophthalmological equipment range is produced using cutting-edge technology,
                                        meeting global industry standards. The designs reflect a deep understanding
                                        of ophthalmologist’s real needs, gathered by the company’s founders over
                                        many years. Their competitive edge is enhanced by prompt delivery, dedicated
                                        after-sales support, and valuable technical advice.
                                    </Text>
                                </Flex>
                                <Flex className="justify-center">
                                    <Button
                                        variant="outline"
                                        size="4"
                                        radius="full"
                                        className="!text-primary !border-primary hover:!bg-footerbg hover:!text-textWhite"
                                    >
                                        View More
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                    {isAboutPage && (
                        <>
                            <Flex direction='column' className=""
                                style={{
                                    background: `url(${aboutVector}), linear-gradient(278.64deg, #284694 0.02%, #0D1B2A 99.98%)`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: 'center',
                                    borderRadius: "20px",
                                }}
                            >
                                <Flex gap='7' className="px-12">
                                    <Flex className="flex-1 text-textWhite" justify='end' align='center'>
                                        <Flex width='85%' gap='4' direction='column' justify='center' align='end'>
                                            <Text className="text-base">Founder & Chairman</Text>
                                            <Text className="text-4xl ">Mr. Bansil Gadhiya</Text>
                                            <Text className="text-base text-end">As the Founder & Chairman of Gadhiya Group, Bansil Gadhiya brings over a decade of expertise in pioneering medical equipment innovation. His extensive experience spans a diverse range of roles, including working closely with doctors, dealers, and importers to overcome industry challenges and drive significant business growth.</Text>
                                            <Flex gap='5'>
                                                <Text>
                                                    <Linkedin />
                                                </Text>
                                                <Text>
                                                    <Whatsapp />
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                    <Flex className="flex-0">
                                        <img
                                            src={founder_1}
                                            alt="About Us"
                                            className="w-full h-auto"
                                        />
                                    </Flex>
                                </Flex>
                            </Flex>

                            <Flex direction='column' justify='center' align='center' gap='8'>
                                <Flex direction='column' justify='center' align='center' gap='2'>
                                    <Text size="2" className="text-primary">
                                        Our Horizon
                                    </Text>
                                    <Text weight="medium" className="text-black text-xl sm:text-3xl">
                                        Exploring Boundless Possibilities
                                    </Text>
                                </Flex>
                                <Flex justify='between' className="w-full">
                                    <img
                                        src={educationIcon}
                                        alt="About Us"
                                        className="h-auto"
                                    />
                                    <img
                                        src={foundationIcon}
                                        alt="About Us"
                                        className="h-auto"
                                    />
                                    <img
                                        src={hospitalIcon}
                                        alt="About Us"
                                        className="h-auto"
                                    />
                                    <img
                                        src={wellnessIcon}
                                        alt="About Us"
                                        className="h-auto"
                                    />
                                </Flex>
                            </Flex>
                            <Flex direction="column" gap="8" className="bg-skyblue rounded-[20px] p-12">
                                <Flex direction='column' justify='center' align='center' gap='2'>
                                    <Text size="2" className="text-primary">
                                        Our Direction and Dedication
                                    </Text>
                                    <Text weight="medium" className="text-black text-xl sm:text-3xl">
                                        Focused on Purpose, Driven by Passion
                                    </Text>
                                </Flex>
                                <Flex width='100%' justify='center'>
                                    <Flex gap='9' width='60%'>
                                        <Card className="!p-5">
                                            <Flex direction='column' gap='4'>
                                                <Flex justify='center'>
                                                    <img
                                                        src={mission}
                                                        alt="About Us"
                                                        className="w-auto h-auto"
                                                    />
                                                </Flex>
                                                <Text as="div" size="5" className="font-medium w-full text-center">
                                                    OUR MISSION
                                                </Text>
                                                <Separator size="4" className="w-full" />
                                                <Text as="p" size="3" className="text-textskyblue font-normal text-center">
                                                    To enhance vision and eye health globally through innovative, high-quality ophthalmic solutions and exceptional patient care.
                                                </Text>
                                            </Flex>
                                        </Card>
                                        <Card className="!p-5">
                                            <Flex direction='column' gap='4'>
                                                <Flex justify='center'>
                                                    <img
                                                        src={vision}
                                                        alt="About Us"
                                                        className="w-auto h-auto"
                                                    />
                                                </Flex>
                                                <Text as="div" size="5" className="font-medium w-full text-center">
                                                    OUR VISION
                                                </Text>
                                                <Separator size="4" />
                                                <Text as="p" size="3" className="text-textskyblue font-normal text-center">
                                                    To be the leading provider of cutting-edge eye care technologies, ensuring clear vision and improved quality of life for all.
                                                </Text>
                                            </Flex>
                                        </Card>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex direction="column" gap="8" className="mb-12">
                                <Flex direction='column' justify='center' align='center' gap='2'>
                                    <Text size="2" className="text-primary">
                                        Our Value
                                    </Text>
                                    <Text weight="medium" className="text-black text-xl sm:text-3xl">
                                        Building a Legacy Through Our Values
                                    </Text>
                                </Flex>
                                <Flex direction='column' gap='8'>
                                    <Flex justify='between' className="w-full px-28">
                                        <img
                                            src={respect}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <img
                                            src={integrity}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <img
                                            src={compassion}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <img
                                            src={cure}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                    </Flex>
                                    <Flex justify='between' className="w-full px-28" >
                                        <img
                                            src={trust}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <img
                                            src={teamwork}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <img
                                            src={innovation}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <img
                                            src={education}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </>
                    )}
                </Flex>
            </Container>
            {isAboutPage && (
                <>
                    <WhyChooseUs />
                    <Box className="py-6">
                        <Certificates />
                    </Box>
                    <Box className="mb-12">
                        <HaveQuestion />
                    </Box>
                </>
            )}
        </Flex>
    );
}
