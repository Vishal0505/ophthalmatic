import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Box, Flex } from '@radix-ui/themes';
import { Menu, SquareMenu } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo/logo.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box className='sticky top-0 z-50'>
        <header className="w-full bg-white shadow-md ">
          <Flex align="center" justify="between" className="container mx-auto p-4">
            <Box className="text-2xl font-bold">
              <NavLink to="/home" activeClassName="text-gray-500">
                <img src={logo} alt="Logo" className="h-auto w-20" />
              </NavLink>
            </Box>
            <nav className="hidden md:flex space-x-6">
              <NavigationMenu.Root>
                <NavigationMenu.List className="flex space-x-4">
                  <NavigationMenu.Item>
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        isActive
                          ? 'text-lg font-medium text-gray-500 underline'
                          : 'text-lg font-medium hover:text-gray-500'
                      }

                    >
                      Home
                    </NavLink>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavLink
                      to="/product"
                      className={({ isActive }) =>
                        isActive
                          ? 'text-lg font-medium text-gray-500 underline'
                          : 'text-lg font-medium hover:text-gray-500'
                      }

                    >
                      About
                    </NavLink>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavLink to="/product"
                      className={({ isActive }) => isActive
                        ? 'text-lg font-medium text-gray-500 underline'
                        : 'text-lg font-medium hover:text-gray-500'
                      }

                    >
                      Products
                    </NavLink>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? 'text-lg font-medium text-gray-500 underline'
                          : 'text-lg font-medium hover:text-gray-500'
                      }

                    >
                      Contact
                    </NavLink>
                  </NavigationMenu.Item>
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
                  <NavigationMenu.Item>
                    <NavLink
                      to="/home"
                      className="text-lg font-medium hover:text-gray-500"
                      onClick={handleLinkClick}
                    >
                      Home
                    </NavLink>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavLink
                      to="/product"
                      className="text-lg font-medium hover:text-gray-500"
                      onClick={handleLinkClick}
                    >
                      About
                    </NavLink>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavLink
                      to="/product"
                      className="text-lg font-medium hover:text-gray-500"
                      onClick={handleLinkClick}
                    >
                      Products
                    </NavLink>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavLink
                      to="/contact"
                      className="text-lg font-medium hover:text-gray-500"
                      onClick={handleLinkClick}
                    >
                      Contact
                    </NavLink>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>
            </Box>
          )}
        </header>
      </Box>
    </>
  );
}
