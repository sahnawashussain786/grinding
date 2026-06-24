import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Motion from '../components/Motion';
import { getContacts, deleteContact } from '../services/api';

function AdminContacts() {
  const { user } = useContext(AuthContext);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await getContacts();
        setContacts(res.data);
      } catch (err) {
        setError('Failed to fetch contact messages');
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleDelete = async (contactId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteContact(contactId);
        setContacts(contacts.filter(c => c._id !== contactId));
      } catch (err) {
        setError('Failed to delete message');
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
            <h1 className="text-4xl font-bold text-white">Contact Messages</h1>
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
          <div className="text-center text-2xl text-gray-300">Loading messages...</div>
        ) : contacts.length === 0 ? (
          <div className="text-center text-2xl text-gray-400">No contact messages yet.</div>
        ) : (
          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <Motion key={contact._id} type="fadeIn" delay={index * 0.05} className="opacity-0">
                <div className="bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{contact.name}</h3>
                      <p className="text-orange-400">{contact.email}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-gray-400 text-sm">
                        {new Date(contact.createdAt).toLocaleDateString()} {new Date(contact.createdAt).toLocaleTimeString()}
                      </p>
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{contact.message}</p>
                </div>
              </Motion>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminContacts;
