import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gray-900 shadow-lg fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/nik-websites_logo.png" 
              alt="Nikol Websites Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 font-['Inter',sans-serif]">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 font-['Inter',sans-serif]">
              About
            </a>
            <a href="#clients" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 font-['Inter',sans-serif]">
              Clients
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 font-['Inter',sans-serif]">
              Portfolio
            </a>
            <a href="#process" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 font-['Inter',sans-serif]">
              Process
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 font-['Inter',sans-serif]">
              Pricing
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 font-['Inter',sans-serif]">
              FAQ
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 font-['Inter',sans-serif]">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
              <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-semibold tracking-wide transition-all duration-300 font-['Inter',sans-serif]">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-semibold tracking-wide transition-all duration-300 font-['Inter',sans-serif]">
                About
              </a>
              <a href="#clients" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-semibold tracking-wide transition-all duration-300 font-['Inter',sans-serif]">
                Clients
              </a>
              <a href="#portfolio" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-semibold tracking-wide transition-all duration-300 font-['Inter',sans-serif]">
                Portfolio
              </a>
              <a href="#process" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-semibold tracking-wide transition-all duration-300 font-['Inter',sans-serif]">
                Process
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-semibold tracking-wide transition-all duration-300 font-['Inter',sans-serif]">
                Pricing
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-semibold tracking-wide transition-all duration-300 font-['Inter',sans-serif]">
                FAQ
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-semibold tracking-wide transition-all duration-300 font-['Inter',sans-serif]">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
