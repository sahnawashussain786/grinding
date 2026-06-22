import { Link } from 'react-router-dom'
import Motion from '../components/Motion'

function Services() {
  const services = [
    { 
      title: 'Strength Training', 
      desc: 'Build muscle, increase strength, and improve your overall physical performance with our expert-led strength training programs tailored to your goals.', 
      icon: '💪', 
      color: 'from-blue-500 to-blue-600',
      features: ['Personalized Programs', 'Free Weights', 'Machines', 'Strength Classes']
    },
    { 
      title: 'Cardio', 
      desc: 'Improve your cardiovascular health, burn calories, and boost your endurance with high-energy cardio workouts including HIIT, cycling, and more.', 
      icon: '🏃', 
      color: 'from-green-500 to-green-600',
      features: ['HIIT Classes', 'Treadmills', 'Ellipticals', 'Spin Classes']
    },
    { 
      title: 'Yoga', 
      desc: 'Find your inner peace, improve flexibility, and strengthen your mind and body with our variety of yoga classes for all skill levels.', 
      icon: '🧘', 
      color: 'from-purple-500 to-purple-600',
      features: ['Vinyasa', 'Hatha', 'Hot Yoga', 'Meditation']
    },
    { 
      title: 'Personal Training', 
      desc: 'Get one-on-one guidance from our certified personal trainers who will create a customized plan just for you and keep you motivated.', 
      icon: '👤', 
      color: 'from-orange-500 to-red-600',
      features: ['Custom Plans', 'Nutrition Advice', 'Progress Tracking', 'Accountability']
    },
    { 
      title: 'Nutrition Planning', 
      desc: 'Complement your fitness routine with personalized nutrition plans designed to help you reach your goals faster.', 
      icon: '🥗', 
      color: 'from-teal-500 to-teal-600',
      features: ['Meal Plans', 'Macros Calculation', 'Supplements Advice', 'Healthy Recipes']
    },
    { 
      title: 'Group Classes', 
      desc: 'Join our fun and motivating group fitness classes, from high-intensity workouts to dance cardio and everything in between.', 
      icon: '👥', 
      color: 'from-pink-500 to-pink-600',
      features: ['Zumba', 'Aerobics', 'Dance Fitness', 'Bootcamp']
    },
    { 
      title: 'Boxing', 
      desc: 'Learn boxing techniques, get an incredible workout, and improve your coordination with our boxing and kickboxing classes.', 
      icon: '🥊', 
      color: 'from-red-500 to-red-600',
      features: ['Boxing Basics', 'Advanced Techniques', 'Kickboxing', 'Self Defense']
    },
    { 
      title: 'Spinning', 
      desc: 'High-intensity indoor cycling classes that will push your limits and help you burn calories while having fun.', 
      icon: '🚴', 
      color: 'from-indigo-500 to-indigo-600',
      features: ['Ride Classes', 'Interval Training', 'Performance Metrics', 'Instructor Led']
    }
  ]

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Motion type="fadeIn" className="opacity-0">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive range of fitness services to help you reach your fitness goals.
            </p>
          </Motion>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Motion key={index} type="fadeIn" delay={index * 0.1} className="opacity-0">
                <div className="group bg-gradient-to-br from-slate-50 to-slate-100 p-10 rounded-3xl hover:from-orange-50 hover:to-orange-100 transition-all hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">What you'll get:</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/pricing" className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
                    Learn More
                    <span className="ml-2">→</span>
                  </Link>
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join today and get access to all our amazing services!
            </p>
            <Link to="/pricing" className="inline-flex items-center bg-white text-orange-600 hover:bg-slate-100 px-12 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl">
              View Pricing Plans
              <span className="ml-3">→</span>
            </Link>
          </Motion>
        </div>
      </section>
    </div>
  )
}

export default Services
