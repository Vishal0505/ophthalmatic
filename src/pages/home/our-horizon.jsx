import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Container from "../../components/ui/container";

// const items = [
//   {
//     id: 1,
//     comment:
//       "EyeCare Specialists, Sydney, Australia: Outstanding diagnostic accuracy, seamless integration, and innovative features.",
//     profile:
//       "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//     name: "Dr. Michael Roberts",
//   },
//   {
//     id: 2,
//     comment:
//       " Vision Health Centre, London, UK We’ve been using Gadhiya Group’s ophthalmic instruments for over a year, and I can confidently say they’ve elevated our patient care. The precision and reliability of their devices are unparalleled. Additionally, their after-sales service has been impeccable, ensuring that we are always supported",
//     profile:
//       "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//     name: "Dr. Emma Thompson",
//   },
//   {
//     id: 3,
//     comment:
//       "OptiCare Solutions, Toronto, CanadaThe ophthalmic equipment provided by Gadhiya Group has exceeded our expectations. From the user-friendly design to the advanced diagnostic capabilities, everything about their products speaks of quality and innovation. Our team is incredibly satisfied with the performance and durability of these devices",
//     profile:
//       "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//     name: "Dr. James Carter,",
//   },
//   {
//     id: 4,
//     comment:
//       "Augenklinik Müller Berlin, GermanyGadhiya Group’s ophthalmic equipment has transformed our practice. The precision technology has improved the accuracy of our diagnostics, and our patients appreciate the swift and comfortable experience. I highly recommend their products to any clinic looking for reliability and innovation.",
//     profile:
//       "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//     name: "Dr. Sarah Müller,",
//   },
//   // {
//   //   id: 5,
//   //   comment:
//   //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
//   //   profile:
//   //     "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//   //   name: "Mark Alexander",
//   // },
//   // {
//   //   id: 6,
//   //   comment:
//   //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
//   //   profile:
//   //     "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//   //   name: "Mark Alexander",
//   // },
//   // {
//   //   id: 7,
//   //   comment:
//   //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
//   //   profile:
//   //     "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//   //   name: "Mark Alexander",
//   // },
//   // {
//   //   id: 8,
//   //   comment:
//   //     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less",
//   //   profile:
//   //     "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//   //   name: "Mark Alexander",
//   // },
// ];

// const items = [
//   {
//     id: 1,
//     comment: "EyeCare Specialists, Sydney, Australia,The diagnostic accuracy and efficiency of the ophthalmic equipment from Gadhiya Group are outstanding. Their devices have seamlessly integrated into our practice, enhancing both our workflow and patient outcomes. The robust build and innovative features make them a must-have for any ophthalmic practice.",
//     profile:
//       "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//     name: "Dr. Michael Roberts",
//   },
//   {
//     id: 2,
//     comment:
//       "Vision Health Centre, London, UK, We’ve been using Gadhiya Group’s ophthalmic instruments for over a year, and I can confidently say they’ve elevated our patient care. The precision and reliability of their devices are unparalleled. Additionally, their after-sales service has been impeccable, ensuring that we are always supported.",
//     profile:
//       "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//     name: "Dr. Emma Thompson ",
//   },
//   {
//     id: 3,
//     comment:
//       "OptiCare Solutions, Toronto, Canada, The ophthalmic equipment provided by Gadhiya Group has exceeded our expectations. From the user-friendly design to the advanced diagnostic capabilities, everything about their products speaks of quality and innovation. Our team is incredibly satisfied with the performance and durability of these devices.",
//     profile:
//       "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//     name: "Dr. James Carter",
//   },
//   {
//     id: 4,
//     comment:
//       "Augenklinik Müller, Berlin, Germany, Gadhiya Group’s ophthalmic equipment has transformed our practice. The precision technology has improved the accuracy of our diagnostics, and our patients appreciate the swift and comfortable experience. I highly recommend their products to any clinic looking for reliability and innovation.",
//     profile:
//       "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
//     name: "Dr. Sarah Müller",
//   },
// ];


const items = [
  {
    id: 1,
    comment: "EyeCare Specialists, Sydney, Australia. Gadhiya Group’s ophthalmic equipment has significantly improved our workflow. The diagnostic accuracy and efficiency of their devices are unmatched, making them an essential part of our practice. Their devices have enhanced both our workflow and patient outcomes, and we highly recommend them for their innovative features and robust build.",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Dr. Michael Roberts",
  },
  {
    id: 2,
    comment:
      "Vision Health Centre, London, UK. After using Gadhiya Group’s ophthalmic instruments for over a year, I can confidently say that they’ve enhanced our patient care. The precision and reliability of their devices are outstanding. Additionally, their excellent after-sales service ensures that we are always fully supported. These devices are a must-have for any clinic.",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Dr. Emma Thompson",
  },
  {
    id: 3,
    comment:
      "OptiCare Solutions, Toronto, Canada. The ophthalmic equipment from Gadhiya Group has exceeded our expectations. Their products feature user-friendly designs and advanced diagnostic capabilities, offering both quality and innovation. Our team is extremely satisfied with their performance and durability, which have significantly improved our practice.",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Dr. James Carter",
  },
  {
    id: 4,
    comment:
      "Augenklinik Müller, Berlin, Germany. Gadhiya Group’s ophthalmic equipment has transformed our practice. The precision technology has improved diagnostic accuracy and made the experience more comfortable for patients. Their products are reliable, and I would highly recommend them to any clinic looking to enhance their diagnostic capabilities and patient care.",
    profile:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    name: "Dr. Sarah Müller",
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
        <Flex gap="4" direction="column" overflow="auto">
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
                  <Card className="bg-skyblue min-h-80 ">
                    <Flex direction="column" className="justify-between text-left" gap="6" p={"1"}>
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
