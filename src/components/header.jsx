import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Menu, SquareMenu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto p-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/">Logo</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex space-x-4">
                <NavigationMenu.Item>
                  <a href="/" className="text-lg font-medium hover:text-gray-500">
                    Home
                  </a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <a href="/about" className="text-lg font-medium hover:text-gray-500">
                    About
                  </a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <a href="/products" className="text-lg font-medium hover:text-gray-500">
                    Products
                  </a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <a href="/contact" className="text-lg font-medium hover:text-gray-500">
                    Contact
                  </a>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
              {isOpen ? <SquareMenu /> : <Menu />} {/* Toggle between menu and close icons */}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden bg-white shadow-lg">
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex flex-col space-y-4 p-4">
                <NavigationMenu.Item>
                  <a href="/" className="text-lg font-medium hover:text-gray-500">
                    Home
                  </a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <a href="/about" className="text-lg font-medium hover:text-gray-500">
                    About
                  </a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <a href="/products" className="text-lg font-medium hover:text-gray-500">
                    Products
                  </a>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <a href="/contact" className="text-lg font-medium hover:text-gray-500">
                    Contact
                  </a>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </nav>
        )}
      </header>
    </>
  )
}
