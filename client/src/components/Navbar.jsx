import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, handleLogout } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogout = () => {
    handleLogout()
    navigate('/')
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">GRIND</Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-orange-500 transition-colors">About</Link>
            <Link to="/services" className="text-white hover:text-orange-500 transition-colors">Services</Link>
            <Link to="/trainers" className="text-white hover:text-orange-500 transition-colors">Trainers</Link>
            <Link to="/pricing" className="text-white hover:text-orange-500 transition-colors">Pricing</Link>
            <Link to="/contact" className="text-white hover:text-orange-500 transition-colors">Contact</Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">Admin</Link>
            )}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-300">Hi, {user.name}</span>
                <button onClick={onLogout} className="text-white hover:text-orange-500 transition-colors">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-orange-500 transition-colors">Login</Link>
                <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all hover:scale-105">
                  Sign Up
                </Link>
              </>
            )}
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
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Home</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">About</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Services</Link>
              <Link to="/trainers" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Trainers</Link>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Pricing</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Contact</Link>
              {user?.role === 'admin' && (
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-orange-400 font-semibold">Admin Dashboard</Link>
              )}
              <div className="border-t border-gray-700 pt-2 mt-2">
                {user ? (
                  <>
                    <div className="px-3 py-2 text-gray-300">Hi, {user.name}</div>
                    <button onClick={onLogout} className="mx-3 my-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full w-full transition-all">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-white">Login</Link>
                    <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="mx-3 my-2 bg-orange-500 text-white px-6 py-2 rounded-full w-full">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
