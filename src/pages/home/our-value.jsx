import { Box, Flex, Heading } from "@radix-ui/themes";
import bgimg from "../../assets/bg/bgimg.jpg";
import respect from "../../assets/value/respect.png";
import integrity from "../../assets/value/integrity.png";
import compassion from "../../assets/value/compassion.png";
import cure from "../../assets/value/cure.png";
import trust from "../../assets/value/trust.png";
import teamwork from "../../assets/value/teamwork.png";
import innovation from "../../assets/value/innovation.png";
import education from "../../assets/value/education.png";
import BackgroundImage from "../../components/ui/background-image";

export default function OurValue() {
  const services = [
    { name: "Respect", icon: respect },
    { name: "Integrity", icon: integrity },
    { name: "Compassion", icon: compassion },
    { name: "Cure", icon: cure },
    { name: "Trust", icon: trust },
    { name: "Teamwork", icon: teamwork },
    { name: "Innovation", icon: innovation },
    { name: "Education", icon: education },
  ];

  return (
    <Box className="relative py-16 bg-gradient-to-b from-indigo-300 via-purple-300 to-blue-300 overflow-hidden">
      <BackgroundImage imageUrl={bgimg} opacity={0.7} />
      <Box className="relative max-w-full mx-auto text-center z-10">
        <Heading as="h2" className="text-4xl font-extrabold mb-12 text-gray-900">
          Our Value
        </Heading>
        <Flex width="full" justify="center">
          <Flex wrap="wrap" justify="center" gap="6" className="w-3/5">
            {services.map((service, index) => (
              <Flex
                key={index}
                className="relative bg-white p-6 rounded-lg border border-gray-300 shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex flex-col items-center justify-center mx-2 transition-transform transform hover:scale-105"
              >
                <Flex justify="center" align="center">
                  <img src={service.icon} alt={service.name} className="h-20 object-contain" />
                </Flex>
                {/* <p className="mt-2 font-medium">{service.name}</p> */}
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Box>
      <Box className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-300 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2"></Box>
    </Box>
  );
}
