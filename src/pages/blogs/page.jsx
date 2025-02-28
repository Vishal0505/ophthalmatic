import { Card, Flex, Inset, Text } from "@radix-ui/themes";
import { ArrowUpRight } from "lucide-react";
import Breadcrumb from "../../components/ui/breadcrumb";
import Container from "../../components/ui/container";
import HaveQuestion from "../home/have-question";
import { BlogsData } from "./blogsData";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/utils";

export default function Blogs() {

  return (
    <Flex direction='column' gap='8'>
      <Breadcrumb title="Blogs / Articles" secondaryTitle="" path="blogs" label="Blogs / Articles" />
      <Flex gap="8" direction="column" width="100%">
        <Container className="w-full">
          <Flex className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {BlogsData?.map((blog, index) => (
              <Card key={index} className="w-full bg-white">
                <Flex direction="column" gap="4">
                  <Inset clip="padding-box" side="top" >
                    <img
                      src={blog.imagePath}
                      alt={blog.title}
                      style={{
                        display: "block",
                        objectFit: "cover",
                        width: "100%",
                        height: 140,
                        backgroundColor: "var(--gray-5)",
                      }}
                    />
                  </Inset>

                  <Link to={`/blogs/${blog.id}`}>
                    <Flex justify="between" className="cursor-pointer hover:text-primary" onClick={scrollToTop}>
                      <Text weight="medium" className="text-black text-2xl w-[90%] hover:text-primary">
                        {blog.title}
                      </Text>
                      <ArrowUpRight size={36} className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2" />
                    </Flex>
                  </Link>

                  <Text className="text-base font-normal text-start">{blog.cardDescription}</Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Container>
        <HaveQuestion />
      </Flex>
    </Flex>
  )
}
