function Services() {
  return (
    <div className="font-sans text-gray-800 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of fitness services to help you reach your goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Strength Training', desc: 'Build muscle and increase strength with our expert-led strength training programs.', icon: '💪' },
            { title: 'Cardio', desc: 'Improve your cardiovascular health with high-energy cardio workouts.', icon: '🏃' },
            { title: 'Yoga', desc: 'Find your inner peace and improve flexibility with our yoga classes.', icon: '🧘' },
            { title: 'Personal Training', desc: 'Get one-on-one guidance from our certified personal trainers.', icon: '👤' },
            { title: 'Nutrition Planning', desc: 'Custom nutrition plans to complement your fitness routine.', icon: '🥗' },
            { title: 'Group Classes', desc: 'Join our fun and motivating group fitness classes.', icon: '👥' },
            { title: 'Boxing', desc: 'Learn boxing techniques while getting an intense workout.', icon: '🥊' },
            { title: 'Spinning', desc: 'High-intensity indoor cycling classes.', icon: '🚴' },
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors group">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
