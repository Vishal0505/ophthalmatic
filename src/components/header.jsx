import { Box, DropdownMenu, Flex } from '@radix-ui/themes';
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
    { name: 'Company', isDropdown: true }, // No path, it's just for dropdown
    { path: '/product', name: 'Products' },
    { path: '/about-us', name: 'About Us' },
    { path: '/contact', name: 'Contact Us' },
    { path: '/dealership', name: 'Become our dealer ' },
  ];


  const companyDropdownLinks = [
    { path: '/about-us', name: 'About' },
    { path: '/ware-house', name: 'Workshop' },
    { path: '/csr-activity', name: 'CSR' },
  ];

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
          <Container>
            <Flex align="center" justify="between" className='py-7'>
              <Box className="text-2xl font-bold">
                <NavLink to="/" activeClassName="text-gray-500">
                  <img src={logo} alt="Logo" />
                </NavLink>
              </Box>
              <nav className="hidden md:flex space-x-6">
                <Flex gap='6'>
                  {navLinks.map((link) => (
                    <div key={link.path}>
                      {link.isDropdown ? (
                        <DropdownMenu.Root>
                          <DropdownMenu.Trigger asChild>
                            <NavLink
                              to={link.path}
                              className={({ isActive }) => `flex ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                            >
                              <Flex gap='1' align='center'>
                                Company
                                <DropdownMenu.TriggerIcon />
                              </Flex>
                            </NavLink>
                          </DropdownMenu.Trigger>
                          <DropdownMenu.Content className="bg-white shadow-lg rounded-lg w-48 mt-2">
                            {companyDropdownLinks.map((dropdownLink) => (
                              <NavLink key={dropdownLink.path} to={dropdownLink.path} onClick={handleLinkClick}>
                                <DropdownMenu.Item className="p-2 hover:bg-primary hover:text-white">
                                  {dropdownLink.name}
                                </DropdownMenu.Item>
                              </NavLink>
                            ))}
                          </DropdownMenu.Content>
                        </DropdownMenu.Root>
                      ) : (
                        <NavLink
                          to={link.path}
                          className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}
                        >
                          {link.name}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </Flex>
              </nav>
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
                  {isOpen ? <SquareMenu /> : <Menu />}
                </button>
              </div>
            </Flex>
            {isOpen && (
              <Box className="md:hidden bg-white shadow-lg">
                <Flex direction='column' justify='center' align='center'>
                  {navLinks.map((link, index) => (
                    <div key={link.path} className={`border-b w-full text-center ${index < navLinks.length - 1 ? 'border-gray-300' : ''} ${index === 0 ? 'border-t border-gray-300' : ''}`}>
                      <NavLink
                        to={link.path}
                        className="hover:text-primary py-2 block w-full"
                        onClick={handleLinkClick}
                      >
                        {link.name}
                      </NavLink>
                      {link.isDropdown && isOpen && (
                        <>
                          <Box className="bg-white shadow-lg mt-2 w-full">
                            {companyDropdownLinks.map((dropdownLink) => (
                              <NavLink
                                key={dropdownLink.path}
                                to={dropdownLink.path}
                                className="hover:text-primary py-2 block text-center"
                                onClick={handleLinkClick}
                              >
                                {dropdownLink.name}
                              </NavLink>
                            ))}
                          </Box>
                          <DropdownMenu.Root >
                            <DropdownMenu.Trigger asChild>
                              <NavLink
                                to={link.path}
                                className={({ isActive }) => `flex ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                              >
                                <Flex gap='1' align='center'>
                                  Company
                                  <DropdownMenu.TriggerIcon />
                                </Flex>
                              </NavLink>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content className="bg-white shadow-lg rounded-lg w-full">
                              {companyDropdownLinks.map((dropdownLink) => (
                                <NavLink
                                  key={dropdownLink.path}
                                  to={dropdownLink.path}
                                  className="hover:text-primary py-2 block w-full"
                                  onClick={handleLinkClick}
                                >
                                  {dropdownLink.name}
                                </NavLink>
                              ))}
                            </DropdownMenu.Content>
                          </DropdownMenu.Root>
                        </>
                      )}
                    </div>
                  ))}
                </Flex>
              </Box>
            )}
          </Container>
        </header>
      </Box >
    </>
  );
}
