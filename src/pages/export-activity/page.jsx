import { Box, Grid, Heading, Section } from "@radix-ui/themes";
import export1 from "../../assets/export/export1.jpg";
import export2 from "../../assets/export/export2.jpg";
import export3 from "../../assets/export/export3.jpg";
import export4 from "../../assets/export/export4.jpg";


export default function ExportActivity() {
  return (
    <Box className=" inset-0">
      <Section className="max-w-7xl mx-auto px-4 z-10">
        <Heading
          as="h2"
          className="text-center text-6xl font-extrabold mb-6 text-transparent bg-clip-text"
        >
          Export Activity
        </Heading>

        <Grid columns="4" gap="4">
          <Box className="col-span-2">
            <img
              src={export1}
              alt="Building 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
            />
          </Box>
          <Box className="col-span-2">
            <img
              src={export2}
              alt="Building 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
            />
          </Box>
          <Box className="col-span-2">
            <img
              src={export3}
              alt="Building 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
            />
          </Box>
          <Box className="col-span-2">
            <img
              src={export4}
              alt="Building 1"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300 hover:brightness-110"
            />
          </Box>
        </Grid>
      </Section>
    </Box>
  );
}
