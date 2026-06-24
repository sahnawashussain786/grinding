import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Motion from '../components/Motion';
import { getAdminMemberships, updateMembership } from '../services/api';

function AdminMemberships() {
  const { user } = useContext(AuthContext);
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        const res = await getAdminMemberships();
        setMemberships(res.data);
      } catch (err) {
        setError('Failed to fetch memberships');
      } finally {
        setLoading(false);
      }
    };
    fetchMemberships();
  }, []);

  const handleUpdateStatus = async (membershipId, status) => {
    try {
      const res = await updateMembership(membershipId, { status });
      setMemberships(memberships.map(m => m._id === membershipId ? res.data : m));
    } catch (err) {
      setError('Failed to update membership');
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
            <h1 className="text-4xl font-bold text-white">Manage Memberships</h1>
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
          <div className="text-center text-2xl text-gray-300">Loading memberships...</div>
        ) : memberships.length === 0 ? (
          <div className="text-center text-2xl text-gray-400">No memberships yet.</div>
        ) : (
          <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <table className="w-full">
              <thead className="bg-slate-700">
                <tr>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">User</th>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">Plan</th>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">Status</th>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">Start Date</th>
                  <th className="text-left px-8 py-6 text-white font-bold text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {memberships.map((membership, index) => (
                  <Motion key={membership._id} type="fadeIn" delay={index * 0.05} className="opacity-0">
                    <tr key={membership._id} className="border-t border-slate-700 hover:bg-slate-700">
                      <td className="px-8 py-6 text-white">
                        {membership.user ? membership.user.name : 'Unknown User'}
                      </td>
                      <td className="px-8 py-6 text-gray-300 capitalize">{membership.plan}</td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          membership.status === 'active'
                            ? 'bg-green-500/20 text-green-300'
                            : membership.status === 'pending'
                            ? 'bg-yellow-500/20 text-yellow-300'
                            : 'bg-red-500/20 text-red-300'
                        }`}>
                          {membership.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-gray-300">
                        {new Date(membership.startDate).toLocaleDateString()}
                      </td>
                      <td className="px-8 py-6">
                        <select
                          value={membership.status}
                          onChange={(e) => handleUpdateStatus(membership._id, e.target.value)}
                          className="bg-slate-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="active">Active</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
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

export default AdminMemberships;
