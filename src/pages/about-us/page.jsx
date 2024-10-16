import { Box, Card, Flex, Grid, Heading, Inset, Separator, Text } from "@radix-ui/themes";
import { Linkedin, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ab_1 from "../../assets/about/ab_1.jpg";
import ab_10 from "../../assets/about/ab_10.png";
import ab_2 from "../../assets/about/ab_2.jpg";
import ab_3 from "../../assets/about/ab_3.png";
import ab_4 from "../../assets/about/ab_4.jpg";
import ab_5 from "../../assets/about/ab_5.jpg";
import ab_6 from "../../assets/about/ab_6.jpg";
import ab_7 from "../../assets/about/ab_7.jpg";
import ab_8 from "../../assets/about/ab_8.jpg";
import ab_9 from "../../assets/about/ab_9.jpg";
import about_us from "../../assets/about/about_us.jpg";
import bgimg from "../../assets/bg/bgimg.jpg";
import BackgroundImage from "../../components/ui/background-image";

export default function AboutUs() {
    return (
        <>
            <Flex gap='8' className="container px-auto mx-auto" direction='column'>
                <Flex className="container mx-auto relative flex items-center justify-center h-[50vh] z-10">
                    <img
                        src={about_us}
                        alt="About Us Banner depicting a modern ophthalmic facility"
                        className="w-full h-full object-cover"
                    />
                    <Flex
                        width="55%"
                        justify='center'
                        align='start'
                        direction='column'
                        className="px-6 absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
                    >
                        <Heading size="9" className="text-white">About Us</Heading>
                        <Flex className="mt-4 space-x-2">
                            <Link to="/" className="text-white">
                                Home
                            </Link>
                            <Text className="text-white">/</Text>
                            <Text className="text-gray-300">About Us</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Box className="relative bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-300 inset-0 overflow-hidden py-6">
                    <BackgroundImage imageUrl={bgimg} opacity={0.7} />
                    <Flex justify='between' className="z-10">
                        <Flex className="z-10 px-6" direction='column' width='50%' gap='4'>
                            <Flex>
                                <Box className="border border-black rounded-full py-1 px-5">
                                    <Text size="3">About Us</Text>
                                </Box>
                            </Flex>
                            <Flex>
                                <Heading size="8">Innovating Quality Products for Global Markets with Excellence</Heading>
                            </Flex>
                            <Flex direction='column' gap='4'>
                                <Text size="3">
                                    Gadhiya Group is a leading name in the field of ophthalmic medical
                                    equipment, dedicated to providing high-quality solutions for eye care
                                    professionals worldwide. With a strong focus on innovation and precision,
                                    we manufacture products that are reliable, efficient, and designed to meet
                                    the evolving needs of the ophthalmic industry.
                                </Text>
                                <Text size="3">
                                    At Gadhiya Group, we are committed to exceeding industry standards,
                                    ensuring the highest level of accuracy and performance in every product
                                    we offer. Our dedication to customer satisfaction drives us to deliver
                                    exceptional solutions that enhance patient care and support the success
                                    of eye care specialists globally.
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex className="z-10">
                            <Box maxWidth="300px">
                                <Card size="2" className="bg-blue-50">
                                    <Flex direction='column' gap='4'>
                                        <Text as="div" size="2" weight="bold">
                                            Delivering Quality Worldwide
                                        </Text>
                                        <Text as="p" size="3">
                                            With over 10 years of experience, Gadhiya Group has mastered
                                            innovation and quality, delivering exceptional products worldwide.
                                        </Text>
                                        <Separator size="4" />
                                        <Flex justify='start' direction='column' gap='4'>
                                            <Box className="border border-black rounded-full py-1 px-2 text-center w-min">
                                                <Text size="3" className="text-nowrap">Countries Served - 50+</Text>
                                            </Box>
                                            <Box className="border border-black rounded-full py-1 px-2 text-center w-min">
                                                <Text size="3">280+ Team</Text>
                                            </Box>
                                        </Flex>
                                        <Flex align='end' gap='4' className="text-slate-600">
                                            <Heading size="9">2016</Heading>
                                            <Heading size="6">YR</Heading>
                                        </Flex>
                                    </Flex>
                                </Card>
                            </Box>
                        </Flex>
                        <Flex className="z-10 aspect-[10/1] overflow-hidden">
                            <img
                                src={ab_1}
                                alt="About Us visual showcasing our innovation"
                                className="w-full h-full object-cover"
                            />
                        </Flex>
                    </Flex>
                    <Box className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-l from-pink-300 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></Box>
                </Box>
                <Flex direction='column' gap='6' className="bg-blue-50 py-6">
                    <Flex className="px-6">
                        <Flex width='40%' align='center'>
                            <Box className="border border-black rounded-full py-1 px-5 w-min">
                                <Text className="text-nowrap" size="3">What Defines Us</Text>
                            </Box>
                        </Flex>
                        <Flex width='60%'>
                            <Heading size="8">
                                We are defined by our commitment to quality, innovation, and exceptional customer satisfaction.
                            </Heading>
                        </Flex>
                    </Flex>
                    <Flex gap='4' className="px-6">
                        <Flex width='45%' className="z-10 aspect-[10/1] overflow-hidden">
                            <img
                                src={ab_2}
                                alt="Visual representation of our mission and vision"
                                className="w-full h-full object-cover rounded-md"
                            />
                        </Flex>
                        <Flex width='55%' direction='column' gap='4' className="z-10">
                            <Heading size="4">Our Mission</Heading>
                            <Text as="p" size="3">
                                Our mission is to deliver innovative, high-quality products that enhance everyday
                                life. We are dedicated to exceeding industry standards through exceptional
                                craftsmanship and sustainability, and we focus on meeting the diverse needs
                                of our global customers.
                            </Text>
                            <Separator size="4" />
                            <Heading size="4">Our Vision</Heading>
                            <Text as="p" size="3">
                                Our vision is to be a global leader in our industry, recognized for our
                                commitment to innovation and quality. We aim to set new benchmarks in
                                product excellence, fostering a positive impact on communities
                                and industries worldwide.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Box className="overflow-hidden py-6">
                    <BackgroundImage imageUrl={bgimg} opacity={0.7} />
                    <Flex justify='between' className="z-10">
                        <Flex className="z-10 px-6" direction='column' width='50%' gap='4'>
                            <Flex>
                                <Box className="border border-black rounded-full py-1 px-5">
                                    <Text size="3">Why Choose Us</Text>
                                </Box>
                            </Flex>
                            <Flex>
                                <Heading size="8">Discover the Key Benefits of Choosing Us
                                    for Your Needs</Heading>
                            </Flex>
                            <Flex direction='column' gap='4'>
                                <Heading size="4">Our Advantages:</Heading>
                                <Flex gap='8'>
                                    <Flex>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li className="text-gray-700 text-lg">
                                                Quality Assurance
                                            </li>
                                            <li className="text-gray-700 text-lg">
                                                Unparalleled Selection
                                            </li>
                                            <li className="text-gray-700 text-lg">
                                                Long-Term Business Vision
                                            </li>
                                            <li className="text-gray-700 text-lg">
                                                Endless Product Variety
                                            </li>
                                        </ul>
                                    </Flex>
                                    <Flex>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li className="text-gray-700 text-lg">
                                                Explore Before You Buy
                                            </li>
                                            <li className="text-gray-700 text-lg">
                                                Custom Packaging
                                            </li>
                                            <li className="text-gray-700 text-lg">
                                                Quick Delivery
                                            </li>
                                            <li className="text-gray-700 text-lg">
                                                Eco-Friendly Practices
                                            </li>
                                        </ul>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex className="z-10 aspect-[10/7] overflow-hidden">
                            <Card className="bg-blue-50">
                                <img
                                    src={ab_3}
                                    alt="About Us visual showcasing our innovation"
                                    className="w-full h-full object-cover border border-2 rounded-lg"
                                />
                            </Card>
                        </Flex>
                    </Flex>
                    <Box className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-l from-pink-300 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></Box>
                </Box>
                <Flex className="flex-1 bg-red-600">
                    {/* <Card className=""> */}
                    <img
                        src={ab_4}
                        alt="About Us visual showcasing our innovation"
                        className="w-full h-full z-10 object-cover border border-2 rounded-lg"
                    />
                </Flex>
                <Flex justify='between' className="z-10 w-full">
                    <Flex className="z-10 px-6 w-full" direction='column' gap='4'>
                        <Flex>
                            <Box className="border border-black rounded-full py-1 px-5">
                                <Text size="3">Navigate Pages</Text>
                            </Box>
                        </Flex>
                        <Flex>
                            <Heading size="8">Explore Our Workshop, Customer Highlights and Key Initiatives</Heading>
                        </Flex>

                        <Flex width='100%' className="flex-1 gap-6 ">
                            <Card size="2" className="flex-1">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src={ab_5}
                                        alt="About Us visual showcasing our innovation"
                                        className="w-full h-full z-10 object-cover block h-44 border-b-2"
                                    />
                                </Inset>
                                <Heading size="4">Workshop</Heading>
                                <Text as="p" size="3">
                                    Partners in Success
                                </Text>
                            </Card>

                            <Card size="2" className="flex-1">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src={ab_6}
                                        alt="About Us visual showcasing our innovation"
                                        className="w-full h-full z-10 object-cover block h-44"
                                    />
                                </Inset>
                                <Heading size="4">Our Customers</Heading>
                                <Text as="p" size="3">
                                    Where Ideas Come to Life
                                </Text>
                            </Card>

                            <Card size="2" className="flex-1">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src={ab_7}
                                        alt="About Us visual showcasing our innovation"
                                        className="w-full h-full z-10 object-cover block h-44"
                                    />
                                </Inset>
                                <Heading size="4">CSR</Heading>
                                <Text as="p" size="3">
                                    Caring for Communities
                                </Text>
                            </Card>

                            <Card size="2" className="flex-1">
                                <Inset clip="padding-box" side="top" pb="current">
                                    <img
                                        src={ab_8}
                                        alt="About Us visual showcasing our innovation"
                                        className="w-full h-full z-10 object-cover block h-44"
                                    />
                                </Inset>
                                <Heading size="4">Dealership</Heading>
                                <Text as="p" size="3">
                                    Growing with Trust
                                </Text>
                            </Card>
                        </Flex>
                        <Grid columns="7" gap="3">
                            <Flex direction='column' gap='6' className="bg-blue-50 py-6 col-span-5 ">
                                <Flex className="px-6">
                                    <Flex width='40%' align='center'>
                                        <Box className="border border-black rounded-full py-1 px-5 w-min">
                                            <Text className="text-nowrap" size="3">Let's Talk</Text>
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Flex className="px-6">
                                    <Heading size="8">
                                        Connect with Our Global Business Head
                                    </Heading>
                                </Flex>
                                <Flex gap='4' className="px-6 ">
                                    <Flex direction='column' gap='9' className="z-10">
                                        <Text as="p" size="3">
                                            As a Global Business Director with over 10 years of experience, I specialize
                                            in supporting ophthalmic medical equipment distributors in overcoming
                                            challenges and driving substantial business growth. I understand the
                                            complexities of sourcing reliable, high-quality equipment in a competitive
                                            market. My commitment is to deliver top-tier ophthalmic products,
                                            ensuring precision, durability, and performance. Additionally, I provide
                                            exceptional support to help you navigate the industry, enabling long-term
                                            success. Partner with us for excellence and growth in the ophthalmic field.
                                        </Text>
                                        <Flex direction='column' gap='4'>
                                            <Flex align='center' gap='2'>
                                                <MoveUpRight size="17" />
                                                <Text as="p" size="3">
                                                    Connect with me for insights, opportunities, and strategic discussions.
                                                </Text>
                                            </Flex>
                                            <Separator my="3" size="4" />
                                            <Flex gap='4'>
                                                <Flex gap='3' align='center' className=" rounded-full px-4 bg-white py-2">
                                                    <Linkedin size='18' />
                                                    <Flex direction='column' className='leading-1'>
                                                        <a href='letstalk' className='text-sm text-black'>
                                                            Whatsapp
                                                        </a>
                                                    </Flex>
                                                </Flex>
                                                <Flex gap='3' align='center' className=" rounded-full px-4 bg-white py-2">
                                                    <Linkedin size='18' />
                                                    <Flex direction='column' className='leading-1'>
                                                        <a href='letstalk' className='text-sm text-black'>
                                                            LinkedIn
                                                        </a>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex className="z-10  w-32 col-span-2 w-full" >
                                <Card >
                                    <img
                                        src={ab_9}
                                        alt="Visual representation of our mission and vision"
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </Card>
                            </Flex>
                        </Grid>
                        <Flex align='center'>
                            <Heading className="" size="8">Inquire Now For Personalized Assistance</Heading>
                            <Flex justify='start'>
                                <img
                                    src={ab_10}
                                    alt="Visual representation of our mission and vision"
                                    className="w-full h-full object-contain rounded-md h-52"
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}
