function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                TRANSFORM YOUR <span className="text-orange-500">BODY</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the best gym in town and achieve your fitness goals with our expert trainers and state-of-the-art equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all">
                  Learn More
                </button>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-orange-500">5000+</h3>
                  <p className="text-gray-400">Active Members</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-orange-500">50+</h3>
                  <p className="text-gray-400">Expert Trainers</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-orange-500">15+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-1">
                <div className="bg-gray-900 rounded-3xl p-8">
                  <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20model%20working%20out%20in%20modern%20gym%20with%20weights%20and%20equipment&image_size=square_hd" alt="Fitness" className="rounded-2xl w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to helping you achieve your fitness goals with passion and dedication.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art equipment for all your fitness needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Trainers</h3>
              <p className="text-gray-600">
                Professional trainers to guide you every step of the way.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Hours</h3>
              <p className="text-gray-600">
                Open 24/7 to fit your busy schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
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
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Trainers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our team of expert trainers who are here to help you succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John Smith', role: 'Head Trainer', specialty: 'Strength & Conditioning' },
              { name: 'Sarah Johnson', role: 'Yoga Instructor', specialty: 'Yoga & Pilates' },
              { name: 'Mike Chen', role: 'Personal Trainer', specialty: 'Weight Loss' },
            ].map((trainer, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden group">
                <img src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20trainer%20portrait%20${encodeURIComponent(trainer.name)}&image_size=square_hd`} alt={trainer.name} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                  <p className="text-orange-500 font-semibold">{trainer.role}</p>
                  <p className="text-gray-400 mt-2">{trainer.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied members about their amazing fitness journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Emily Davis', text: 'This gym has completely transformed my life! The trainers are amazing and the atmosphere is so motivating.', rating: 5 },
              { name: 'David Wilson', text: 'Best gym I have ever been to! The equipment is top-notch and the staff is incredibly friendly.', rating: 5 },
              { name: 'Jessica Brown', text: 'I have achieved results I never thought possible. Highly recommend to anyone looking to get fit!', rating: 5 },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-yellow-500 mb-4">{'⭐'.repeat(testimonial.rating)}</div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your fitness journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '$29', features: ['Access to gym equipment', 'Open gym hours', 'Free parking', 'Locker access' ] },
              { name: 'Premium', price: '$49', features: ['All Basic features', 'Group classes', 'Nutrition planning', '1 personal training session/month'], popular: true },
              { name: 'Elite', price: '$99', features: ['All Premium features', 'Unlimited personal training', '24/7 access', 'Guest passes'] },
            ].map((plan, index) => (
              <div key={index} className={`p-8 rounded-2xl shadow-lg ${plan.popular ? 'border-2 border-orange-500 bg-orange-50' : 'bg-gray-50'}`}>
                {plan.popular && (
                  <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">MOST POPULAR</div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-semibold transition-all hover:scale-105 ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-400">123 Fitness Street, Gym City</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-400">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400">info@grindgym.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your email" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
