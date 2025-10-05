function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nikola Sirakov. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Portfolio
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
