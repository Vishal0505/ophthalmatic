import { Box, Flex, Heading } from "@radix-ui/themes";
import bgimg from "../../assets/bg/bgimg.jpg";
import educationIcon from "../../assets/horizon/education.png";
import foundationIcon from "../../assets/horizon/foundation.png";
import hospitalIcon from "../../assets/horizon/hospital.png";
import wellnessIcon from "../../assets/horizon/wellness.png";
import BackgroundImage from "../../components/ui/background-image";

export default function OurHorizon() {
  const services = [
    { name: "Education", icon: educationIcon },
    { name: "Multi Speciality Hospital", icon: hospitalIcon },
    { name: "Charitable Foundation", icon: foundationIcon },
    { name: "Wellness", icon: wellnessIcon },
  ];

  return (
    <Box className="relative py-16 bg-gradient-to-b from-indigo-300 via-purple-300 to-blue-300  overflow-hidden">
      <BackgroundImage imageUrl={bgimg} opacity={0.7} />
      <Box className="relative max-w-6xl mx-auto text-center z-10">
        <Heading as="h2" className="text-4xl font-extrabold mb-12 text-gray-900">
          Our Horizon
        </Heading>
        <Flex wrap="wrap" justify="center" gap="6">
          {services.map((service, index) => (
            <Flex key={index} className="relative bg-white p-6 rounded-lg border border-gray-300 shadow-lg w-full sm:w-1/2 md:w-1/3 flex flex-col items-center justify-center mx-2 transition-transform transform hover:scale-105" >
              <Flex justify='center' align='center'>
                <img src={service.icon} alt={service.name} className="h-32 object-contain"
                />
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>
      <Box className="absolute top-0 right-0 w-32 h-32  bg-gradient-to-r from-blue-300 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2"></Box>
    </Box>
  );
}
