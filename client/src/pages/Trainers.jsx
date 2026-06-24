import { useState, useEffect } from 'react';
import Motion from '../components/Motion';
import { getTrainers } from '../services/api';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const res = await getTrainers();
        setTrainers(res.data);
      } catch (err) {
        console.error('Failed to fetch trainers', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrainers();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Motion type="fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Trainers</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our team of certified, passionate trainers dedicated to helping you succeed.
            </p>
          </Motion>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-2xl text-orange-500">Loading...</div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {trainers.map((trainer, index) => (
                <Motion key={trainer._id} type="fadeIn" delay={index * 0.15} className="opacity-0">
                  <div className="group bg-slate-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img src={trainer.imageUrl} alt={trainer.name} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                      <p className="text-orange-500 font-semibold mb-2">{trainer.role}</p>
                      <p className="text-gray-500 mb-4">{trainer.specialty}</p>
                      <p className="text-gray-600 leading-relaxed">{trainer.bio}</p>
                    </div>
                  </div>
                </Motion>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Trainers;
