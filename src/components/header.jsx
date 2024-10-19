import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Box, Flex } from '@radix-ui/themes';
import { Menu, SquareMenu } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo/logo.png";
import Email from './icons/email';
import Phone from './icons/phone';
import Container from './ui/container';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/ware-house', name: 'Company' },
    { path: '/product', name: 'Products' },
    { path: '/about-us', name: 'About Us' },
    { path: '/contact', name: 'Contact Us' },
  ];

  return (
    <>
      <Box className='bg-primary'>
        <Container>
          <Flex justify='end' gap='8' className=' text-textWhite px-6 py-2 container text-base font-medium'>
            <a href='mailto:export@gadhiyagroup.com'>
              <Flex align="center" gap="2">
                <Email />
                <span>export@gadhiyagroup.com</span>
              </Flex>
            </a>
            <a href='tel:+918140259610'>
              <Flex align='center' gap='2'>
                <Phone />
                +91 8140259610
              </Flex>
            </a>
          </Flex>
        </Container>
      </Box>
      <Box className='sticky top-0 z-50 text-textBlack text-base font-medium'>
        <header className="w-full bg-white shadow-md">
          <Container>
            <Flex align="center" justify="between" className="container mx-auto p-4 py-8">
              <Box className="text-2xl font-bold">
                <NavLink to="/" activeClassName="text-gray-500">
                  <img src={logo} alt="Logo" className="" />
                </NavLink>
              </Box>
              <nav className="hidden md:flex space-x-6">
                <NavigationMenu.Root>
                  <NavigationMenu.List>
                    <Flex gap='6' className='text-textBlack '>
                      {navLinks.map((link) => (
                        <NavigationMenu.Item key={link.path}>
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              isActive
                                ? 'font-medium text-primary'
                                : 'font-medium hover:text-primary'
                            }
                          >
                            {link.name}
                          </NavLink>
                        </NavigationMenu.Item>
                      ))}
                    </Flex>
                  </NavigationMenu.List>
                </NavigationMenu.Root>
              </nav>
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
                  {isOpen ? <SquareMenu /> : <Menu />}
                </button>
              </div>
            </Flex>

            {isOpen && (
              <Box className="md:hidden bg-white shadow-lg">
                <NavigationMenu.Root>
                  <NavigationMenu.List className="flex flex-col space-y-4 p-4">
                    {navLinks.map((link) => (
                      <NavigationMenu.Item key={link.path}>
                        <NavLink to={link.path} className=" font-medium hover:text-gray-500" onClick={handleLinkClick}>
                          {link.name}
                        </NavLink>
                      </NavigationMenu.Item>
                    ))}
                  </NavigationMenu.List>
                </NavigationMenu.Root>
              </Box>
            )}
          </Container>
        </header>
      </Box>
    </>
  );
}
