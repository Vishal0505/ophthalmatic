import { Box, Flex, Grid, Heading, Section } from "@radix-ui/themes";
import building1 from "../../assets/corporate/ch1.jpg";
import building2 from "../../assets/corporate/ch2.jpg";
import building3 from "../../assets/corporate/ch3.jpg";
import building4 from "../../assets/corporate/ch4.jpg";
import building5 from "../../assets/corporate/ch5.jpg";
import BackgroundImage from "../../components/ui/background-image";
import bgimg from "../../assets/bg/bgimg.jpg";
import { useEffect } from "react";

export default function OurCorporateHouse() {
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
                    Our Corporate House
                </Heading>
                <Grid columns="4" gap="4">
                    <Box className="col-span-3">
                        <img
                            src={building1}
                            alt="Building 1"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>

                    <Box className="col-span-1">
                        <Flex className="h-full" direction='column' gap='4'>
                            <img
                                src={building3}
                                alt="Building 3"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                            <img
                                src={building4}
                                alt="Building 4"
                                className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                            />
                        </Flex>
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={building5}
                            alt="Building 5"
                            className="w-full h-full object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={building2}
                            alt="Building 2"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                </Grid>
            </Section>
            <Box className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-l from-pink-300 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></Box>
        </Box>
    );
}
