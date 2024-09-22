import { Box, Flex, Text } from '@radix-ui/themes';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo/logo.png"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <Box className="container mx-auto px-4">
        <Flex direction="column" align="center">
          <Flex mb='8' wrap className="w-full flex-col md:flex-row gap-4 md:gap-9">
            <Box mb={{ base: '0', md: '4' }} className="w-full md:w-2/4 text-justify">
              <Flex gap='3'>
                <img src={logo} alt="Logo" className="h-auto w-20" />
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Ophthalmatic</h2>
              </Flex>
              <Text className="text-justify text-gray-400 text-sm md:text-base">
                Ophthalmatic is a leading medical equipment manufacturing company known for its quality,
                reliability, and technological innovations. Our mission is to set the global standard in eye care
                technology through top-tier products and services. We design and manufacture cutting-edge solutions
                that empower medical professionals to deliver exceptional care.

                At Ophthalmatic, we are dedicated to continuous innovation, ensuring that our products meet
                and exceed the highest global standards, while prioritizing patient safety, comfort, and clinical outcomes.
              </Text>
            </Box>
            <Flex justify='between' className='w-full md:w-2/4 flex-wrap'>
              <Box className="w-full md:w-1/4 mb-4">
                <h4 className="text-lg md:text-xl font-semibold mb-2">About Us</h4>
                <Flex direction='column' gap='2'>
                  <NavLink to="/our-team" className='text-gray-400 hover:underline'>
                    Our Team
                  </NavLink>
                  <NavLink to="/company-overview" className='text-gray-400 hover:underline'>
                    Company Overview
                  </NavLink>
                  <NavLink to="/corporate-house" className='text-gray-400 hover:underline'>
                    Our Corporate House
                  </NavLink>
                  <NavLink to="/warehouse" className='text-gray-400 hover:underline'>
                    Our Warehouse
                  </NavLink>
                </Flex>
              </Box>
              <Box className="w-full text-nowrap md:w-1/4  mb-4">
                <h4 className="text-lg md:text-xl font-semibold mb-2">Our Activities</h4>
                <Flex direction='column' gap='2'>
                  <NavLink to="/csr" className='text-gray-400 hover:underline'>
                    CSR
                  </NavLink>
                  <NavLink to="/export-activity" className='text-gray-400 hover:underline'>
                    Export Activity
                  </NavLink>
                  <NavLink to="/international-conference" className='text-gray-400 hover:underline'>
                    International Conference
                  </NavLink>
                  <NavLink to="/certificate" className='text-gray-400 hover:underline'>
                    Certificate
                  </NavLink>
                </Flex>
              </Box>
              <Flex mb={{ base: '0', md: '4' }} >
                <Box className="mb-4">
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Products</h4>
                  <Flex direction='column' gap='2'>
                    <NavLink to="/product1" className='text-gray-400 hover:underline'>
                      Product 1
                    </NavLink>
                    <NavLink to="/product2" className='text-gray-400 hover:underline'>
                      Product 2cec
                    </NavLink>
                    <NavLink to="/product3" className='text-gray-400 hover:underline'>
                      Product 3cecccececec
                    </NavLink>
                    <NavLink to="/product4" className='text-gray-400 hover:underline'>
                      Product 4
                    </NavLink>
                  </Flex>
                </Box>
              </Flex>
              <Box className="w-full md:w-1/4 mb-0 md:mb-4">
                <Flex direction={{ base: 'row', md: 'column' }} gap='3' align={{ base: 'center' }}>
                  <h4 className="text-lg md:text-xl font-semibold mb-0 md:mb-2 text-center text-nowrap">Follow Us</h4>
                  <Flex
                    direction={{ base: 'row', md: 'column' }}
                    align='center'
                    className='w-full gap-4 md:gap-2'
                  >
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-slate-400">
                      <Facebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-slate-400">
                      <Twitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-slate-400">
                      <Instagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-slate-400">
                      <Linkedin />
                    </a>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="center" className="pt-4 border-t border-gray-700">
          <p className="text-center text-sm text-gray-400">
            © 2024 Ophthalmatic, Gadhiya Group. All rights reserved.
          </p>
        </Flex>
      </Box>
    </footer>
  );
}
