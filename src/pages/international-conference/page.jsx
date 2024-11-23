import { Box, Flex, Grid, Heading, Section } from "@radix-ui/themes";
import ic1 from "../../assets/international/ic1.jpg";
import ic2 from "../../assets/international/ic2.jpg";
import ic3 from "../../assets/international/ic3.jpg";
import ic4 from "../../assets/international/ic4.jpg";
import ic5 from "../../assets/international/ic5.jpg";
import ic6 from "../../assets/international/ic6.jpg";
import ic7 from "../../assets/international/ic7.jpg";
import ic8 from "../../assets/international/ic8.jpg";

import BackgroundImage from "../../components/ui/background-image";
import bgimg from "../../assets/bg/bgimg.jpg";
import { useEffect } from "react";

export default function InternationalConference() {
    useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Adds smooth scrolling effect
  });
}, []);
    return (
        <Box className="relative  bg-gradient-to-b from-blue-300 via-purple-300 to-indigo-300 inset-0">
            <BackgroundImage imageUrl={bgimg} opacity={0.7} />
            <Section className="relative max-w-7xl mx-auto px-4 z-10">
                <Heading as="h2" className=" text-center text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800">
                    International Conference
                </Heading>
                <Grid columns="4" gap="4">
                    <Box className="col-span-3">
                        <img
                            src={ic1}
                            alt="Building 1"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Box className="col-span-1">
                        <Flex className="h-full" direction='column' gap='4'>
                            <img
                                src={ic2}
                                alt="Building 3"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                            <img
                                src={ic3}
                                alt="Building 4"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Flex>
                    </Box>
                    <Box className="col-span-1">
                        <Flex className="h-full" direction='column' gap='4'>
                            <img
                                src={ic6}
                                alt="Building 3"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                            <img
                                src={ic7}
                                alt="Building 4"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Flex>
                    </Box>

                    <Box className="col-span-3">
                        <img
                            src={ic5}
                            alt="Building 2"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>

                    <Box className="col-span-2">
                        <img
                            src={ic4}
                            alt="Building 5"
                            className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={ic8}
                            alt="Building 1"
                            className="w-full h-80 object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                </Grid>
            </Section>
            <Box className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-l from-pink-300 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></Box>
        </Box>
    );
}
