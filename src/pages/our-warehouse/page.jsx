import { Box, Flex, Grid, Heading, Section } from "@radix-ui/themes";
import warehouse1 from "../../assets/warehouse/warehouse1.jpg";
import warehouse2 from "../../assets/warehouse/warehouse2.jpg";
import warehouse3 from "../../assets/warehouse/warehouse3.jpg";
import warehouse4 from "../../assets/warehouse/warehouse4.jpg";
import warehouse5 from "../../assets/warehouse/warehouse5.jpg";
import warehouse6 from "../../assets/warehouse/warehouse6.jpg";
import warehouse7 from "../../assets/warehouse/warehouse7.jpg";
import warehouse8 from "../../assets/warehouse/warehouse8.jpg";
import warehouse9 from "../../assets/warehouse/warehouse9.jpg";
import warehouse10 from "../../assets/warehouse/warehouse10.jpg";

import BackgroundImage from "../../components/ui/background-image";
import bgimg from "../../assets/bg/bgimg.jpg";

export default function OurWareHouse() {
    return (
        <Box className="relative  bg-gradient-to-b from-blue-300 via-purple-300 to-indigo-300 inset-0">
            <BackgroundImage imageUrl={bgimg} opacity={0.7} />
            <Section className="relative max-w-7xl mx-auto px-4 z-10">
                <Heading as="h2" className=" text-center text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800">
                    Our Warehouse
                </Heading>
                <Grid columns="4" gap="4">
                    <Box className="col-span-3">
                        <img
                            src={warehouse1}
                            alt="Building 1"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>

                    <Box className="col-span-1">
                        <Flex className="h-full" direction='column' gap='4'>
                            <img
                                src={warehouse2}
                                alt="Building 3"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                            <img
                                src={warehouse3}
                                alt="Building 4"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Flex>
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={warehouse4}
                            alt="Building 5"
                            className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={warehouse5}
                            alt="Building 2"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Flex className="h-full" direction='column' gap='4'>
                        <Box className="col-span-2">
                            <img
                                src={warehouse9}
                                alt="Building 5"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Box>
                        <Box className="col-span-2">
                            <img
                                src={warehouse10}
                                alt="Building 2"
                                className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Box>
                    </Flex>
                    <Box className="col-span-2">
                        <img
                            src={warehouse6}
                            alt="Building 1"
                            className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>

                    <Box className="col-span-1">
                        <Flex className="h-full" direction='column' gap='4'>
                            <img
                                src={warehouse7}
                                alt="Building 3"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                            <img
                                src={warehouse8}
                                alt="Building 4"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Flex>
                    </Box>
                </Grid>
            </Section>
            <Box className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-l from-pink-300 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></Box>
        </Box>
    );
}
