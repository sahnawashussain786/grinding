import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Trainers from './pages/Trainers'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import AdminUsers from './pages/AdminUsers'
import AdminTrainers from './pages/AdminTrainers'
import AdminContacts from './pages/AdminContacts'
import AdminMemberships from './pages/AdminMemberships'

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/trainers" element={<AdminTrainers />} />
          <Route path="/admin/contacts" element={<AdminContacts />} />
          <Route path="/admin/memberships" element={<AdminMemberships />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
