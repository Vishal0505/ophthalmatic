import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Container from "../../components/ui/container";

const items = [
  {
    id: 1,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Mark Alexander",
  },
  {
    id: 2,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Mark Alexander",
  },
  {
    id: 3,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Mark Alexander",
  },
  {
    id: 4,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Mark Alexander",
  },
  {
    id: 5,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Mark Alexander",
  },
  {
    id: 6,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Mark Alexander",
  },
  {
    id: 7,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Mark Alexander",
  },
  {
    id: 8,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Mark Alexander",
  },
];
export default function OurHorizon({ itemsPerSlide = 4 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const currentItems = items.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <Box>
      <Container>
        <Flex gap="4" direction="column">
          <Flex direction="column" justify="center" align="center">
            <Text size="2" className="text-primary" align="right">
              TestiMonial
            </Text>
            <Text size="4" weight="medium">
              What Our Clients Are Saying
            </Text>
          </Flex>
        <div className="w-full overflow-hidden px-4">

          <Flex>
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full sm:w-2/5 md:w-1/3 lg:w-1/4 p-2 "
              >
                <Card className="bg-skyblue">
                  <Flex direction="column" gap="6" p={"1"}>
                    <Text size="3">
                     {item.comment}
                    </Text>
                    <Flex gap="4" align="center">
                      <Avatar
                        src={item.profile}
                        fallback="A"
                      />
                      <Text weight="medium">{item.name}</Text>
                    </Flex>
                  </Flex>
                </Card>
              </div>
            ))}
          </Flex>
          <Flex gap="2" justify="center">
            <ChevronLeft
              onClick={handlePrev}
              className=" border border-blue-950 rounded-full size-8 p-2"
            />
            <ChevronRight
              onClick={handleNext}
              className=" border border-blue-950 rounded-full size-8 p-2"
            />
          </Flex>
          </div>
        </Flex>
      </Container>
    </Box>
  );
}
