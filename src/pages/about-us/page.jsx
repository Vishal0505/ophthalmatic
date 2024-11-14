import { Box, Button, Card, Flex, Separator, Text } from "@radix-ui/themes";
import { Link, useLocation } from "react-router-dom";
import about_us from '../../assets/about/about_us.jpg';
import compassion from "../../assets/about/compassion.png";
import cure from "../../assets/about/cure.png";
import education from "../../assets/about/education.png";
import founder_1 from "../../assets/about/founder_1.png";
import innovation from "../../assets/about/innovation.png";
import integrity from "../../assets/about/integrity.png";
import mission from "../../assets/about/mission.png";
import respect from "../../assets/about/respect.png";
import teamwork from "../../assets/about/teamwork.png";
import trust from "../../assets/about/trust.png";
import aboutVector from "../../assets/about/vector.png";
import vision from "../../assets/about/vision.png";
import educationIcon from "../../assets/horizon/education.png";
import foundationIcon from "../../assets/horizon/foundation.png";
import hospitalIcon from "../../assets/horizon/hospital.png";
import wellnessIcon from "../../assets/horizon/wellness.png";
import LinkedinRound from "../../components/icons/round/linkedin-round";
import WhatsappRound from "../../components/icons/round/whatsapp-round";
import Breadcrumb from "../../components/ui/breadcrumb";
import Container from "../../components/ui/container";
import Certificates from "../home/certificates";
import HaveQuestion from "../home/have-question";
import WhyChooseUs from "../home/why-us";

export default function AboutUs() {
    const location = useLocation();

    const isAboutPage = location.pathname === '/about-us';

    const items = [
        { src: respect, label: 'Respect' },
        { src: integrity, label: 'Integrity' },
        { src: compassion, label: 'Compassion' },
        { src: cure, label: 'Cure' },
        { src: trust, label: 'Trust' },
        { src: teamwork, label: 'Teamwork' },
        { src: innovation, label: 'Innovation' },
        { src: education, label: 'Education' }
    ];

    return (
        <Flex direction='column'>
            {isAboutPage && (
                <Breadcrumb title="About" secondaryTitle="US" path="about-us" label="About Us" />
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
                        <Flex className="flex-1 gap-5" direction="column">
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
                                {!isAboutPage && (
                                    <Flex className="justify-center">
                                        <Button
                                            variant="outline"
                                            size="4"
                                            radius="full"
                                            className="!text-primary !border-primary hover:!bg-footerbg hover:!text-textWhite"
                                        >
                                            <Link to='about-us'>
                                                View More
                                            </Link>
                                        </Button>
                                    </Flex>
                                )}
                            </Flex>
                        </Flex>
                    </Flex>
                    {isAboutPage && (
                        <>
                            {/* founder  */}
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
                                            <Text className="text-base text-end ">As the Founder & Chairman of Gadhiya Group, Bansil Gadhiya brings over a decade of expertise in pioneering medical equipment innovation. His extensive experience spans a diverse range of roles, including working closely with doctors, dealers, and importers to overcome industry challenges and drive significant business growth.</Text>
                                            <Flex gap='5'>
                                                <Text>
                                                    <LinkedinRound />
                                                </Text>
                                                <Text>
                                                    <WhatsappRound />
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

                            {/* our horizon  */}
                            <Flex direction='column' justify='center' align='center' gap='8'>
                                <Flex direction='column' justify='center' align='center' gap='2'>
                                    <Text size="2" className="text-primary">
                                        Our Horizon
                                    </Text>
                                    <Text weight="medium" className="text-black text-xl sm:text-3xl">
                                        Exploring Boundless Possibilities
                                    </Text>
                                </Flex>
                                <Flex className="w-full font-semibold text-[22px] text-primary text-center !justify-center !sm:justify-between flex-wrap sm:flex-nowrap">
                                    <Flex direction='column' gap='4' px='5'>
                                        <img
                                            src={educationIcon}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <Text>
                                            Education
                                        </Text>
                                    </Flex>
                                    <Flex direction='column' gap='4' px='5'>
                                        <img
                                            src={hospitalIcon}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <Text>
                                            Multi Speciality <br /> Hospital
                                        </Text>
                                    </Flex>
                                    <Flex direction='column' gap='4' px='5'>
                                        <img
                                            src={foundationIcon}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <Text>
                                            Charitable  <br /> Foundation
                                        </Text>
                                    </Flex>
                                    <Flex direction='column' gap='4' px='5'>
                                        <img
                                            src={wellnessIcon}
                                            alt="About Us"
                                            className="h-auto"
                                        />
                                        <Text>
                                            Wellness
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            {/* our direction   */}
                            <Flex direction="column" gap="8" className="bg-skyblue rounded-[20px] p-6 sm:p-12">
                                <Flex direction="column" justify="center" align="center" gap="2">
                                    <Text size="2" className="text-primary">
                                        Our Direction and Dedication
                                    </Text>
                                    <Text weight="medium" className="text-black text-xl sm:text-3xl">
                                        Focused on Purpose, Driven by Passion
                                    </Text>
                                </Flex>
                                <Flex width="100%" justify="center">
                                    <Flex className="w-full lg:w-3/5 custom-card-container flex-col sm:flex-row" gap="6" justify="center">
                                        <Card className="!p-5 w-full bg-white">
                                            <Flex direction="column" gap="4">
                                                <Flex justify="center">
                                                    <img
                                                        src={mission}
                                                        alt="Mission"
                                                        className="w-auto h-auto max-w-full"
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
                                        <Card className="!p-5 w-full !bg-white">
                                            <Flex direction="column" gap="4">
                                                <Flex justify="center">
                                                    <img
                                                        src={vision}
                                                        alt="Vision"
                                                        className="w-auto h-auto max-w-full"
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
                            {/* our value    */}
                            <Flex direction="column" gap="8" className="font-medium text-xl text-black text-center mb-12">
                                <Flex direction="column" justify="center" align="center" gap="2">
                                    <Text size="2" className="text-primary">
                                        Our Value
                                    </Text>
                                    <Text weight="medium" className="text-black text-xl sm:text-3xl">
                                        Building a Legacy Through Our Values
                                    </Text>
                                </Flex>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                    {items.map((item, index) => (
                                        <div key={index} className="flex flex-col items-center space-y-2 cursor-pointer">
                                            <img src={item.src} alt={item.label} />
                                            <Text className="font-medium text-xl text-black text-center">{item.label}</Text>
                                        </div>
                                    ))}
                                </div>
                            </Flex>
                        </>
                    )}
                </Flex>
            </Container>
            {isAboutPage && (
                <>
                    <WhyChooseUs />
                    <Box >
                        <Certificates />
                    </Box>
                    <Box className="bg-skyblue py-12">
                        <HaveQuestion />
                    </Box>
                </>
            )}
        </Flex>
    );
}
