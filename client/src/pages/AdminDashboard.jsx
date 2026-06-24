import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Motion from '../components/Motion';

function AdminDashboard() {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== 'admin') {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Access Denied</h2>
          <p className="text-gray-300 mb-8">You must be an admin to access this page.</p>
          <Link to="/" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion type="fadeIn" className="opacity-0">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center">Admin Dashboard</h1>
        </Motion>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Manage Users', icon: '👥', link: '/admin/users', color: 'from-blue-500 to-blue-600' },
            { title: 'Manage Trainers', icon: '🏋️', link: '/admin/trainers', color: 'from-orange-500 to-red-600' },
            { title: 'Contact Messages', icon: '📧', link: '/admin/contacts', color: 'from-green-500 to-green-600' },
            { title: 'Manage Memberships', icon: '💳', link: '/admin/memberships', color: 'from-purple-500 to-purple-600' }
          ].map((item, index) => (
            <Motion key={index} type="fadeIn" delay={index * 0.15} className="opacity-0">
              <Link
                to={item.link}
                className="group block bg-slate-800 p-10 rounded-3xl hover:bg-slate-700 transition-all hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </Link>
            </Motion>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
