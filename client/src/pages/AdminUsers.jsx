import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Motion from '../components/Motion';
import { getUsers, updateUserRole, deleteUser } from '../services/api';

function AdminUsers() {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res.data);
      } catch (err) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleUpdateRole = async (userId, newRole) => {
    try {
      await updateUserRole(userId, newRole);
      setUsers(users.map(u => u._id === userId ? { ...u, role: newRole } : u));
    } catch (err) {
      setError('Failed to update role');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        setUsers(users.filter(u => u._id !== userId));
      } catch (err) {
        setError('Failed to delete user');
      }
    }
  };

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
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold text-white">Manage Users</h1>
            <Link to="/admin" className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
              ← Back to Dashboard
            </Link>
          </div>
        </Motion>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-300 px-6 py-4 rounded-2xl mb-8">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center text-2xl text-gray-300">Loading users...</div>
        ) : (
          <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">Name</th>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">Email</th>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">Phone</th>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">Role</th>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((userItem, index) => (
                  <Motion key={userItem._id} type="fadeIn" delay={index * 0.05} className="opacity-0">
                    <tr key={userItem._id} className="border-t border-slate-700 hover:bg-slate-700">
                      <td className="px-8 py-6 text-white">{userItem.name}</td>
                      <td className="px-8 py-6 text-gray-300">{userItem.email}</td>
                      <td className="px-8 py-6 text-gray-300">{userItem.phone || '-'}</td>
                      <td className="px-8 py-6">
                        <select
                          value={userItem.role}
                          onChange={(e) => handleUpdateRole(userItem._id, e.target.value)}
                          className="bg-slate-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                      <td className="px-8 py-6">
                        <button
                          onClick={() => handleDeleteUser(userItem._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </Motion>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminUsers;
