import { Box, Flex, Heading, Section, Text } from "@radix-ui/themes";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { User } from 'lucide-react';
import founder_1 from "../../assets/founders/founder_1.jpg"

export default function Founders() {
  const founders = [
    {
      name: "Bansil Gadhiya",
      title: "Founder & Chairman - Gadhiya Group",
      description: `As the Founder & Chairman of Gadhiya Group, Bansil Gadhiya brings over a decade of expertise in pioneering medical equipment innovation. His extensive experience spans a diverse range of roles, including working closely with doctors, dealers, and importers to overcome industry challenges and drive significant business growth.`,
      photo: founder_1,
    },
    {
      name: "Rohitbhai Gadhiya",
      title: "Managing Trustee - Gadhiya Group",
      description: `Rohitbhai Gadhiya, a distinguished Trustee of Gadhiya Group, is a driving force behind the impactful initiatives of Gadhiya Foundation. His commitment to community service is exemplified through the foundation’s efforts to enhance well-being and social welfare.`,
     photo: "https://via.placeholder.com/100",
    },
    {
      name: "Vivek Hisoriya",
      title: "Chief Operating Officer - Gadhiya Group",
      description: `Vivek Hisoriya drives the advancement of medical instrument manufacturing with a focus on precision and innovation. Leveraging cutting-edge technology and stringent quality controls, Vivek Hisoriya ensures our products exceed industry standards, enhancing both performance and reliability.`,
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Mayur Gadhiya",
      title: "Chief Financial Officer - Gadhiya Group",
      description: `As CFO of Gadhiya Group, Mayur Gadhiya plays a crucial role in fortifying our financial stability and strategic growth.`,
      photo: "",
    },
  ];

  const items = founders.map((founder, index) => (
    <Box key={index}
      className="relative bg-white p-6 rounded-lg border border-gray-300 shadow-md flex flex-col justify-between h-96 mx-4"
      style={{
        backgroundImage: "url('/path-to-texture.png')",
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
      }}
    >
      <Box className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-lg"></Box>
      <Box className="flex justify-center items-center mb-4">
        {founder.photo ? (
          <img src={founder.photo} alt={founder.name} className="w-24 h-24 rounded-full object-cover border-4 border-indigo-300" />
        ) : (
          <User className="w-24 h-24 text-gray-500 border-2 border-gray-300 rounded-full" />
        )}
      </Box>
      <Heading as="h3" className="text-xl font-bold text-indigo-900 mb-2">
        {founder.name}
      </Heading>
      <Flex direction="column" className="h-full">
        <Text className="text-md font-semibold text-purple-700 mb-2">
          {founder.title}
        </Text>
        <Text className="text-gray-700 leading-relaxed flex-grow">
          {founder.description}
        </Text>
      </Flex>
    </Box>
  ));

  return (
    <div className="relative py-12">
      <div
        className="absolute inset-0 bg-gradient-to-b from-indigo-200 via-purple-200 to-indigo-300 opacity-75"
        style={{
          backgroundImage: 'url(https://www.transparenttextures.com/patterns/cubes.png)',
          backgroundSize: '400px 400px',
        }}
      />
      <Section className="relative max-w-4xl mx-auto px-4 z-10">
        <Heading
          as="h2"
          className="text-4xl font-extrabold text-center text-gray-900 mb-8"
        >
          Meet Our Founders
        </Heading>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={2000}
          infinite
          autoHeight
          controlsStrategy="responsive"
          disableButtonsControls={true}
        />
      </Section>
    </div>

  );
}
