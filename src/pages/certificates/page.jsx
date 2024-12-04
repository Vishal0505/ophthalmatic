
import { Box } from "@radix-ui/themes";
import bgimg from "../../assets/bg/bgimg.jpg";
import certi_1 from "../../assets/certificates/certi_1.png";
import certi_2 from "../../assets/certificates/certi_2.png";
import certi_3 from "../../assets/certificates/certi_3.png";
import certi_4 from "../../assets/certificates/certi_4.png";
import BackgroundImage from "../../components/ui/background-image";

export default function Certificates() {
  return (
    <Box className="inset-0 p-6 sm:p-4">
      <BackgroundImage imageUrl={bgimg} opacity={0.7} />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 items-center gap-6 sm:gap-4">
          <img
            src={certi_1}
            alt="certi_1"
            className=" w-auto sm:w-5/6 h-full object-cover rounded-lg shadow-lg transition duration-300 "
          />{" "}
          <img
            src={certi_2}
            alt="certi_1"
            className="w-auto sm:w-5/6 h-full object-cover rounded-lg shadow-lg transition duration-300 "
          />{" "}
          <img
            src={certi_3}
            alt="certi_1"
            className="w-auto sm:w-5/6 h-full object-cover rounded-lg shadow-lg transition duration-300 "
          />{" "}
          <img
            src={certi_4}
            alt="certi_1"
            className="w-auto sm:w-5/6 h-full object-cover rounded-lg shadow-lg transition duration-300 "
          />
        </div>
      </div>
    </Box>
  );
}
