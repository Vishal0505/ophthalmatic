import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import bgimg from "../../assets/bg/bgimg.jpg";
import BackgroundImage from "../../components/ui/background-image";
import { Goal, Lightbulb } from 'lucide-react';

export default function AboutUs() {
    return (
        <Box className="relative bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-300 inset-0 overflow-hidden">
            <BackgroundImage imageUrl={bgimg} opacity={0.7} />
            <Box className="relative text-center overflow-hidden px-4 py-12">
                <Flex direction="column" gap="4" justify="center" align="center" className="h-full">
                    <Heading as="h1" size="9" className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800">
                        About Us
                    </Heading>
                    <Text size="4" className="max-w-3xl text-gray-800 leading-relaxed mb-10">
                        Ophthalmatic is a leading medical equipment manufacturing company known for its quality, reliability, and technological innovations. Their ophthalmological equipment range is produced using cutting-edge technology, meeting global industry standards. The designs reflect a deep understanding of ophthalmologists' real needs, gathered by the company's founders over many years. Their competitive edge is enhanced by prompt delivery, dedicated after-sales support, and valuable technical advice.
                    </Text>
                </Flex>

                {/* Mission and Vision Section */}
                <Grid columns="2" gap="6" className="max-w-3xl mx-auto mt-12">
                    <Box className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 flex flex-col justify-between">
                        <Goal size='80' className=" text-blue-400" />
                        <Heading as="h2" size="7" className="font-bold text-start text-blue-400 mb-4">
                            Our Mission
                        </Heading>
                        <Text size="5" className="text-justify text-gray-700 leading-relaxed">
                            To enhance vision and eye health globally through innovative, high quality ophthalmic solutions and exceptional patient care.
                        </Text>
                    </Box>
                    <Box className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 flex flex-col justify-between">
                        <Lightbulb size='80' className=" text-blue-400" />
                        <Heading as="h2" size="7" className="font-bold text-start text-blue-400 mb-4">
                            Our Vision
                        </Heading>
                        <Text size="4" className="text-start text-gray-700 leading-relaxed">
                            To be the leading provider of cutting edge eye care technologies, ensuring clear vision and improved quality of life for all.
                        </Text>
                    </Box>
                </Grid>
            </Box>

            {/* Decorative Element */}
            <Box className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-l from-pink-300 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></Box>
        </Box>
    );
}
