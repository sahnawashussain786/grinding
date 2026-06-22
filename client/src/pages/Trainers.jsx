import Motion from '../components/Motion'

function Trainers() {
  const trainers = [
    { 
      name: 'John Smith', 
      role: 'Head Trainer', 
      specialty: 'Strength & Conditioning', 
      bio: 'With 15 years of experience, John specializes in helping clients build strength and reach their performance goals.',
      img: 'john'
    },
    { 
      name: 'Sarah Johnson', 
      role: 'Yoga Instructor', 
      specialty: 'Yoga & Pilates', 
      bio: 'Sarah has been teaching yoga for 12 years and helps clients find peace and flexibility through mindful movement.',
      img: 'sarah'
    },
    { 
      name: 'Mike Chen', 
      role: 'Personal Trainer', 
      specialty: 'Weight Loss', 
      bio: 'Mike is a certified trainer who has helped hundreds of clients achieve sustainable weight loss and better health.',
      img: 'mike'
    },
    { 
      name: 'Emily Davis', 
      role: 'Cardio Coach', 
      specialty: 'HIIT & Cardio', 
      bio: 'Emily is passionate about high-energy workouts and helping clients improve their cardiovascular fitness.',
      img: 'emily'
    },
    { 
      name: 'David Wilson', 
      role: 'Boxing Coach', 
      specialty: 'Boxing & Kickboxing', 
      bio: 'David is a former competitive boxer who teaches self-defense and boxing techniques while getting a great workout.',
      img: 'david'
    },
    { 
      name: 'Jessica Brown', 
      role: 'Nutritionist', 
      specialty: 'Nutrition Planning', 
      bio: 'Jessica is a registered dietitian who creates personalized nutrition plans to complement fitness routines.',
      img: 'jessica'
    }
  ]

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Motion type="fadeIn" className="opacity-0">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Trainers</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our team of certified, passionate trainers dedicated to helping you succeed.
            </p>
          </Motion>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {trainers.map((trainer, index) => (
              <Motion key={index} type="fadeIn" delay={index * 0.15} className="opacity-0">
                <div className="group bg-slate-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20trainer%20portrait%20${trainer.img}%20high%20quality&image_size=square_hd`} alt={trainer.name} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Motion type="fadeIn" className="opacity-0">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Train with Us?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Book a free consultation with one of our expert trainers today!
            </p>
          </Motion>
        </div>
      </section>
    </div>
  )
}

export default Trainers
