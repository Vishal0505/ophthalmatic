import { Flex, Text } from "@radix-ui/themes";
import Container from "../../components/ui/container";
import Slider from "./components/carousel";
import Prod1 from "../../assets/products/prem-1.png";
import Prod2 from "../../assets/products/prem-2.png";
import Prod3 from "../../assets/products/prem-3.png";
import Prod4 from "../../assets/products/prem-4.png";
const items = [
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
  },{
    id: 8,
    name: "Ophthalmic Refraction Unit ",
    category: "(OU-03) ",
    imageUrl: Prod2,
  },
];
export default function OurProducts() {
  return (
    <>
      <Container>
        {/* <Flex direction="column" align="start">
          <Text size="2"  className="text-primary" align="right">
            Our Products
          </Text>
          <Text size="4" weight="medium">Explore Our Premium Products</Text> */}
        <Slider items={items} itemsPerSlide={4} />
        {/* </Flex> */}
      </Container>
    </>
  );
}
