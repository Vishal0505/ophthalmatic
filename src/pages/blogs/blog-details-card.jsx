import { Box, Flex, Text } from "@radix-ui/themes";
import Breadcrumb from "../../components/ui/breadcrumb";
import Container from "../../components/ui/container";
import { BlogsData } from "./blogsData";
import { useParams } from "react-router-dom";
import HaveQuestion from "../home/have-question";

export default function BlogDetailsCard() {
    const { id } = useParams();
    const detailedData = BlogsData.find((item) => item?.id.toString() === id);

    if (!detailedData) {
        return (
            <Flex direction="column" gap="8" align="center" justify="center" className="h-[50vh]">
                <Text weight="medium" className="text-red-500 text-lg">Blog not found</Text>
            </Flex>
        );
    }

    return (
        <Flex direction='column' gap='8'>
            <Breadcrumb title={detailedData?.title} secondaryTitle="" path="blogs" label="Blogs / Articles" />
            <Flex gap="8" direction="column" width="100%">
                <Container className="w-full">
                    <Flex justify='center'>
                        <Flex direction='column' gap='4' className="w-[75%]">
                            <img
                                src={detailedData.detailsImagePath}
                                alt="Blog Image"
                                className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                            />
                            <Text className="text-base font-normal text-start">{detailedData.detailsDescription1}</Text>
                            <Text weight="medium" className="text-black text-2xl w-[90%]">{detailedData.detailsDescriptionTitle1}</Text>
                            <Text className="text-base font-normal text-start">{detailedData.detailsDescription2}</Text>
                            <Text className="text-base font-normal text-start">{detailedData.detailsDescription3}</Text>
                            <Text weight="medium" className="text-black text-2xl w-[90%]">{detailedData.detailsDescriptionTitle2}</Text>
                            <Text className="text-base font-normal text-start">{detailedData.detailsDescription4}</Text>
                        </Flex>
                    </Flex>
                </Container>
                <Box className="bg-skyblue" py='8'>
                    <HaveQuestion />
                </Box>
            </Flex>
        </Flex>
    );
}
