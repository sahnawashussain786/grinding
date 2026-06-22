import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">GRIND</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-orange-500 transition-colors">About</Link>
            <Link to="/services" className="text-white hover:text-orange-500 transition-colors">Services</Link>
            <Link to="/trainers" className="text-white hover:text-orange-500 transition-colors">Trainers</Link>
            <Link to="/pricing" className="text-white hover:text-orange-500 transition-colors">Pricing</Link>
            <Link to="/contact" className="text-white hover:text-orange-500 transition-colors">Contact</Link>
          </div>
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all hover:scale-105">
              Join Now
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-white">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-white">About</Link>
              <Link to="/services" className="block px-3 py-2 text-white">Services</Link>
              <Link to="/trainers" className="block px-3 py-2 text-white">Trainers</Link>
              <Link to="/pricing" className="block px-3 py-2 text-white">Pricing</Link>
              <Link to="/contact" className="block px-3 py-2 text-white">Contact</Link>
              <button className="mx-3 my-2 bg-orange-500 text-white px-6 py-2 rounded-full w-full">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
