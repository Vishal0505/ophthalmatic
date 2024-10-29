import { Flex, Text } from "@radix-ui/themes";
import Container from "../../components/ui/container";
import Slider from "./components/carousel";
const items = [
    {
      id: 1,
      title: 'Beautiful Mountain',
      description: 'A scenic view of a beautiful mountain range.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Mountain',
    },
    {
      id: 2,
      title: 'Sunny Beach',
      description: 'Relaxing waves and golden sand.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Beach',
    },
    {
      id: 3,
      title: 'City Skyline',
      description: 'The city lights up beautifully at night.',
      imageUrl: 'https://via.placeholder.com/300x200?text=City',
    },
    {
      id: 4,
      title: 'Lush Forest',
      description: 'A peaceful forest with lush green trees.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Forest',
    },
    {
      id: 5,
      title: 'Desert Dunes',
      description: 'Golden dunes in a vast desert.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Desert',
    },
    {
      id: 6,
      title: 'Snowy Peaks',
      description: 'Snow-covered peaks under a clear blue sky.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Snow',
    },
  ];
export default function OurProducts() {
  return (
    <>
      <Container>
        <Flex direction="column" align="start">
          <Text size="2"  className="text-primary" align="right">
            Our Products
          </Text>
          <Text size="4" weight="medium">Explore Our Premium Products</Text>
          <Slider  items={items} itemsPerSlide={4}/>
        </Flex>
      </Container>
    </>
  );
}
