import { Box, Grid, Heading, Section } from "@radix-ui/themes";
import export1 from "../../assets/export/export1.jpg";
import export2 from "../../assets/export/export2.jpg";
import export3 from "../../assets/export/export3.jpg";
import export4 from "../../assets/export/export4.jpg";


import bgimg from "../../assets/bg/bgimg.jpg";
import BackgroundImage from "../../components/ui/background-image";

export default function ExportActivity() {
    return (
        <Box className="relative bg-gradient-to-b from-blue-300 via-purple-300 to-indigo-300 inset-0">
            <BackgroundImage imageUrl={bgimg} opacity={0.7} />
            <Section className="relative max-w-7xl mx-auto px-4 z-10">
                <Heading as="h2" className="text-center text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800">
                    Export Activity
                </Heading>

                <Grid columns="4" gap="4">
                    <Box className="col-span-2">
                        <img
                            src={export1}
                            alt="Building 1"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={export2}
                            alt="Building 1"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={export3}
                            alt="Building 1"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                    <Box className="col-span-2">
                        <img
                            src={export4}
                            alt="Building 1"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
                        />
                    </Box>
                </Grid>
            </Section>

            <Box className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-l from-pink-300 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></Box>
        </Box>
    );
}
