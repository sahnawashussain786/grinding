import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Motion from '../components/Motion';
import { getTrainers, createTrainer, updateTrainer, deleteTrainer } from '../services/api';

function AdminTrainers() {
  const { user } = useContext(AuthContext);
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingTrainer, setEditingTrainer] = useState(null);
  const [formData, setFormData] = useState({ name: '', role: '', specialty: '', bio: '', imageUrl: '' });

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const res = await getTrainers();
        setTrainers(res.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to fetch trainers');
      } finally {
        setLoading(false);
      }
    };
    fetchTrainers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTrainer) {
        const res = await updateTrainer(editingTrainer._id, formData);
        setTrainers(trainers.map(t => t._id === editingTrainer._id ? res.data : t));
      } else {
        const res = await createTrainer(formData);
        setTrainers([...trainers, res.data]);
      }
      resetForm();
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Failed to save trainer');
    }
  };

  const handleEdit = (trainer) => {
    setEditingTrainer(trainer);
    setFormData(trainer);
    setShowForm(true);
  };

  const handleDelete = async (trainerId) => {
    if (window.confirm('Are you sure you want to delete this trainer?')) {
      try {
        await deleteTrainer(trainerId);
        setTrainers(trainers.filter(t => t._id !== trainerId));
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Failed to delete trainer');
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: '', role: '', specialty: '', bio: '', imageUrl: '' });
    setEditingTrainer(null);
    setShowForm(false);
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
            <h1 className="text-4xl font-bold text-white">Manage Trainers</h1>
            <div className="flex gap-4">
              <Link to="/admin" className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full font-semibold transition-all">
                ← Back to Dashboard
              </Link>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                {showForm ? 'Cancel' : '+ Add Trainer'}
              </button>
            </div>
          </div>
        </Motion>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-300 px-6 py-4 rounded-2xl mb-8">
            {error}
          </div>
        )}

        {showForm && (
          <Motion type="fadeIn" className="opacity-0">
            <div className="bg-slate-800 p-8 rounded-3xl shadow-xl mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">{editingTrainer ? 'Edit Trainer' : 'Add New Trainer'}</h2>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Role</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Specialty</label>
                  <input
                    type="text"
                    required
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-semibold mb-2">Image URL</label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-300 font-semibold mb-2">Bio</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div className="md:col-span-2 flex gap-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105"
                  >
                    {editingTrainer ? 'Update Trainer' : 'Add Trainer'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-bold transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Motion>
        )}

        {loading ? (
          <div className="text-center text-2xl text-gray-300">Loading trainers...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Motion key={trainer._id} type="fadeIn" delay={index * 0.1} className="opacity-0">
                <div className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  {trainer.imageUrl && (
                    <img src={trainer.imageUrl} alt={trainer.name} className="w-full h-64 object-cover" />
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                    <p className="text-orange-400 font-semibold mb-2">{trainer.role}</p>
                    <p className="text-gray-300 mb-4">{trainer.specialty}</p>
                    <p className="text-gray-400 mb-6 line-clamp-3">{trainer.bio}</p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleEdit(trainer)}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(trainer._id)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Motion>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminTrainers;
