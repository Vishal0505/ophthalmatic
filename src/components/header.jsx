import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Box, Flex } from '@radix-ui/themes';
import { Menu, SquareMenu } from 'lucide-react';
import { useEffect, useState } from 'react';
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
    { path: '/dealership', name: 'Become our dealer ' },
  ];
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Adds smooth scrolling effect
  });
}, []);

  return (
    <>
      <Box className='bg-primary'>
        <Container>
          <Flex justify='end' gap='8' className=' text-textWhite py-2 container text-base font-medium !hidden md:!flex'>
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
          <Container >
            <Flex align="center" justify="between" className='py-7'>
              <Box className="text-2xl font-bold">
                <NavLink to="/" activeClassName="text-gray-500">
                  <img src={logo} alt="Logo" className="" />
                </NavLink>
              </Box>
              <nav className="hidden md:flex space-x-6">
                <NavigationMenu.Root>
                  <NavigationMenu.List>
                    <Flex gap='6'>
                      {navLinks.map((link) => (
                        <NavigationMenu.Item key={link.path}>
                          <NavLink to={link.path} className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>
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
                  <NavigationMenu.List>
                    <Flex direction='column' justify='center' align='center'>
                      {navLinks.map((link, index) => (
                        <NavigationMenu.Item
                          key={link.path}
                          className={`border-b w-full text-center ${index < navLinks.length - 1 ? 'border-gray-300' : ''} ${index === 0 ? 'border-t border-gray-300' : ''}`}
                        >
                          <NavLink
                            to={link.path}
                            className="hover:text-primary py-2 block w-full"
                            onClick={handleLinkClick}
                          >
                            {link.name}
                          </NavLink>
                        </NavigationMenu.Item>
                      ))}
                    </Flex>
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
