import { Flex, Separator, Text } from '@radix-ui/themes';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo/logo.png";

export default function Footer() {
  return (
    <>
      <Flex direction='column' className='bg-sky-50 text-black'>
        <footer className="w-full  py-12">
          <Flex gap='3' className="container mx-auto px-4" direction="column" width="100%">
            <Flex className="flex-col md:flex-row items-start gap-8 xl:gap-9">
              {/* Logo and Address */}
              <Flex direction='column' gap='3' className="text-lg w-full md:w-5/12">
                <Flex>
                  <NavLink to="/" activeClassName="text-black">
                    <img src={logo} alt="Gadhiya Group Logo" className="h-auto w-52" />
                  </NavLink>
                </Flex>
                <Flex direction='column' gap='6'>
                  <Flex gap='3' align='center' className="items-start">
                    <MapPin size='60' />
                    <Text className="text-justify text-black text-sm md:text-base pe-5">
                      Corporate Office No 328, 29, 30, 3rd Floor, Dariyalal Square, Above HDFC Bank, Morbi-Rajkot Highway, At- Sanala, Morbi - Pin: 363641 Gujarat, INDIA.
                    </Text>
                  </Flex>
                  <Flex className='text-black flex-col xl:flex-row gap-4 xl:gap-9'>
                    <Flex gap='3' align='center'>
                      <Phone size='25' />
                      <Flex direction='column' className='leading-1'>
                        <Text className="text-sm">For More Inquiry</Text>
                        <Text className="text-sm">+91 931-608-1913</Text>
                      </Flex>
                    </Flex>
                    <Flex gap='3' align='center'>
                      <Mail size='25' />
                      <Flex direction='column' className='leading-1'>
                        <Text className="text-sm">To Send Mail</Text>
                        <Text className="text-sm">export@gadhiyagroup.com</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              {/* Quick Links */}
              <Flex className="w-full md:w-4/12 flex-col">
                <Text as="h4" className="text-lg font-bold mb-4">Quick Links</Text>
                <Flex gap='9'>
                  <Flex direction='column' className='text-nowrap' gap='4'>
                    <NavLink to="/about-us" className='text-black hover:underline'>About Us</NavLink>
                    <NavLink to="/about-us" className='text-black hover:underline'>Why Us</NavLink>
                    <NavLink to="/ware-house" className='text-black hover:underline'>Workshop</NavLink>
                    <NavLink to="/contact" className='text-black hover:underline'>Contact Us</NavLink>
                  </Flex>
                  <Flex direction='column' className='text-nowrap' gap='4'>
                    <NavLink to="/csr-activity" className='text-black hover:underline'>CSR</NavLink>
                    <NavLink to="/export-activity" className='text-black hover:underline'>Export Activity</NavLink>
                    <NavLink to="/international-conference" className='text-black hover:underline'>International Conference</NavLink>
                    <NavLink to="/certificate" className='text-black hover:underline'>Certificate</NavLink>
                  </Flex>
                </Flex>
              </Flex>
              {/* Our Products */}
              <Flex direction='column' className="w-full md:w-3/12">
                <Text as="h4" className="text-lg font-bold mb-4">Our Products</Text>
                <Flex direction='column' gap='4'>
                  <NavLink to="/csr-activity" className='text-black hover:underline'>Ceramics & Bathware</NavLink>
                  <NavLink to="/export-activity" className='text-black hover:underline'>Wall Clocks & Gift Items</NavLink>
                  <NavLink to="/international-conference" className='text-black hover:underline'>Rubber Mats & Other Products</NavLink>
                  <Flex direction='column'>
                    <Text as="h4" className="text-lg font-bold mb-4">Follow Us On</Text>
                    <Flex gap='4'>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="text-black hover:text-slate-800">
                        <Facebook />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="text-black hover:text-slate-800">
                        <Twitter />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-black hover:text-slate-800">
                        <Instagram />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="text-black hover:text-slate-800">
                        <Linkedin />
                      </a>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </footer>
        <Flex className='w-full'>
          <Separator orientation="horizontal" className="w-full bg-black h-[1px]" />
        </Flex>
        <Flex justify='center' className="text-black text-sm py-6">
          © 2023, All Rights Reserved
        </Flex>
      </Flex>
    </>

  );
}
