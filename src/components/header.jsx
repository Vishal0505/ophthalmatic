import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Box, Button, Flex } from '@radix-ui/themes';
import { Menu, MoveUpRight, SquareMenu } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo/logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/company-overview', name: 'Company' },
    { path: '/ware-house', name: 'Workshop' },
    { path: '/about-us', name: 'Why Us' },
    { path: '/certificate', name: 'Our Customers' },
    { path: '/csr-activity', name: 'CSR' },
  ];

  return (
    <Box className='sticky top-0 z-50'>
      <header className="w-full bg-white/30 backdrop-blur-md shadow-md">
        <Flex align="center" className="container mx-auto p-4 justify-between">
          {/* Logo */}
          <Box className="text-2xl font-bold">
            <NavLink to="/" activeClassName="text-gray-500">
              <img src={logo} alt="Logo" className="h-auto w-52" />
            </NavLink>
          </Box>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex justify-center flex-1">
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex space-x-8">
                {navLinks?.map((link) => (
                  <NavigationMenu.Item key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive && location.pathname === link.path
                          ? 'text-lg font-medium border-2 border-gray-500 rounded-full px-3'
                          : 'text-lg font-medium hover:text-gray-500'
                      }
                    >
                      {link.name}
                    </NavLink>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </nav>

          {/* Get In Touch Button for Desktop */}
          <div className="hidden md:flex">
            <Button radius="full" variant="soft">
              Get In Touch <MoveUpRight size="17" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
              {isOpen ? <SquareMenu /> : <Menu />}
            </button>
          </div>
        </Flex>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <Box className="md:hidden bg-white shadow-lg">
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex flex-col space-y-4 p-4">
                {navLinks.map((link) => (
                  <NavigationMenu.Item key={link.path}>
                    <NavLink
                      to={link.path}
                      className="text-lg font-medium hover:text-gray-500"
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </NavLink>
                  </NavigationMenu.Item>
                ))}
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </Box>
        )}
      </header>
    </Box>
  );
}
