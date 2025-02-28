import { Box, Flex, Text } from "@radix-ui/themes";
import Breadcrumb from "../../components/ui/breadcrumb";
import Container from "../../components/ui/container";
import HaveQuestion from "../home/have-question";
import OurProducts from "../home/our-products";
import { applications, benefits, partners } from "./constant";

export default function DealerShip() {
    return (
        <Flex direction='column' gap='8'>
            <Breadcrumb title="Dealership" secondaryTitle="" path="dealership" label="Dealership" />
            <Flex gap='8' direction='column' width='100%'>
                <Container className="w-full">
                    {/* Grow with Us  */}
                    <Flex direction='column' justify='center' align='center' gap='8'>
                        <Flex direction='column' justify='center' align='center' gap='2'>
                            <Text className="text-primary text-base font-medium">
                                Grow with Us
                            </Text>
                            <Text className="text-black text-[40px] font-semibold">
                                Why Partner With Ophthalmatic
                            </Text>
                        </Flex>
                        <Flex className="w-full !justify-evenly flex-col sm:flex-row">
                            {partners.map((partners, index) => (
                                <Flex key={index} justify='center'>
                                    <Flex gap='5' direction='column' className="b" justify='between' maxWidth='320px'>
                                        <img src={partners.imgSrc} alt="Logo" className="object-none h-[60px]" />
                                        <Flex direction='column' gap='2'>
                                            <Text className="text-xl font-medium text-center">{partners.title}</Text>
                                            <Text className="text-base font-normal text-center">{partners.description}</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Container>
                <Flex className="bg-skyblue py-12">
                    <Container className="w-full">
                        <Flex direction='column' gap='8'>
                            <Flex direction='column' justify='center' align='center' gap='2'>
                                <Text className="text-primary text-base font-medium">
                                    Maximize your potential
                                </Text>
                                <Text className="text-black text-[40px] font-semibold">
                                    Benefits of Partnering with Us
                                </Text>
                            </Flex>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                                {benefits.map((benefit, index) => (
                                    <>
                                        <Flex key={index} justify='center'>
                                            <Flex gap='3' className="flex-col justify-between items-start max-w-[325px] px-2 ">
                                                <img src={benefit.imgSrc} alt="Logo" className="object-none h-[60px]" />
                                                <Flex className="flex-col" gap='3'>
                                                    <Text className="text-xl font-medium">{benefit.title}</Text>
                                                    <Text className="text-base font-normal">{benefit.description}</Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </>
                                ))}
                            </div>
                        </Flex>
                    </Container>
                </Flex>
                <Container className="w-full">
                    <Flex direction='column' gap='8'>
                        <OurProducts title={"Our Products"} subTitles={"Explore Our Premium Products"} />
                    </Flex>
                </Container>
                <Flex className="bg-skyblue py-12">
                    <Container className="w-full">
                        <Flex direction='column' gap='8'>
                            <Flex direction='column' justify='center' align='center' gap='2'>
                                <Text className="text-primary text-base font-medium">
                                    Steps to Apply
                                </Text>
                                <Text className="text-black text-[40px] font-semibold">
                                    Application Process
                                </Text>
                            </Flex>
                            <Flex className="b w-full !justify-between flex-col sm:flex-row">
                                {applications.map((applications, index) => (
                                    <>
                                        <Flex key={index} >
                                            <Flex gap='3' className="flex-col justify-between items-start max-w-[380px]">
                                                <Text className="text-[54px] font-medium text-primary">{applications.sr_no}.</Text>
                                                <Flex className="flex-col" gap='3'>
                                                    <Text className="text-xl font-medium">{applications.title}</Text>
                                                    <Text className="text-base font-normal">{applications.description}</Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </>
                                ))}
                            </Flex>
                        </Flex>
                    </Container>
                </Flex>
                <Box className="w-full mb-12">
                    <HaveQuestion />
                </Box>
            </Flex>
        </Flex>
    )
}
