import { Box, Flex, Text } from "@radix-ui/themes";
import BackgroundImage from "../../components/ui/background-image";
import bgimg from "../../assets/bg/bgimg.jpg";

import Prod1 from "../../assets/products/prem-1.png";
import Prod2 from "../../assets/products/prem-2.png";
import Prod3 from "../../assets/products/prem-3.png";
import Prod4 from "../../assets/products/prem-4.png";
import Container from "../../components/ui/container";
const products = [
  {
    id: 1,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod1,
  },
  {
    id: 2,
    name: " Ophthalmic Operation Table ",
    category: "(OT - 02)",
    imageUrl: Prod2,
  },
  {
    id: 3,
    name: "Ophthalmic Operation Table ",
    category: "(OT - 01) ",
    imageUrl: Prod3,
  },
  {
    id: 4,
    name: "Surgeon’s Chair ",
    category: "(SC-01)",
    imageUrl: Prod4,
  },
  {
    id: 5,
    name: "Ophthalmic Operation Table ",
    category: "(OT - 01) ",
    imageUrl: Prod1,
  },
  {
    id: 6,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod2,
  },
  {
    id: 7,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod2,
  },
  {
    id: 8,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod2,
  },
];
export default function ProductPage() {
  return (
    <Box>
      <Box className="bg-custom-gradient">
        <Flex className="  justify-center items-center gap-2 flex-col py-10">
          <Flex className="flex-row gap-2">
            <Text className="text-2xl font-medium text-primary">Our</Text>
            <Text className="text-2xl font-medium">Products</Text>
          </Flex>
          <Text>
            Home / <Text className="text-primary"> Our Products </Text>
          </Text>
        </Flex>
      </Box>
    <Container>

      <Box>
        <div className="grid grid-cols-4 gap-4 py-6">
          {products.map((item) => (
            <div key={item.id} className="px-4 ">
              <div className="p-4 bg-white rounded-md border border-gray-300">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                <Flex justify="center" direction="column">
                  <Text
                    align="center"
                    className="text-base font-medium text-center "
                  >
                    {item.name}
                  </Text>
                  <Text
                    align="center"
                    className="text-base font-medium text-center "
                  >
                    {item.category}
                  </Text>
                </Flex>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </Container>
</Box>
  );
}
