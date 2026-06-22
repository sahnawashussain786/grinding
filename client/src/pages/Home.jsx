import { Link } from 'react-router-dom'
import Motion from '../components/Motion'

function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Motion type="slideInLeft" className="opacity-0">
              <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                TRANSFORM YOUR
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"> BODY</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join the best gym in town and achieve your fitness goals with our expert trainers and state-of-the-art equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/pricing" className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-orange-500/30">
                  Get Started
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link to="/about" className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all">
                  Learn More
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { number: '5K+', label: 'Active Members' },
                  { number: '50+', label: 'Expert Trainers' },
                  { number: '15+', label: 'Years Experience' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">{stat.number}</h3>
                    <p className="text-gray-400 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Motion>
            <Motion type="slideInRight" delay={0.3} className="opacity-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur-2xl opacity-50 animate-pulse-subtle"></div>
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-1">
                  <div className="bg-slate-900 rounded-[22px] p-6">
                    <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20model%20working%20out%20in%20modern%20gym%20with%20weights%20and%20equipment%20high%20quality%208k%20photo&image_size=square_hd" alt="Fitness" className="rounded-2xl w-full h-auto" />
                  </div>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion type="fadeIn" className="text-center mb-16 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to helping you achieve your fitness goals with passion and dedication.
            </p>
          </Motion>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: '⚡', 
                title: 'Modern Equipment', 
                desc: 'State-of-the-art equipment for all your fitness needs, from free weights to cardio machines.' 
              },
              { 
                icon: '👥', 
                title: 'Expert Trainers', 
                desc: 'Professional certified trainers to guide you every step of the way with personalized programs.' 
              },
              { 
                icon: '⏰', 
                title: 'Flexible Hours', 
                desc: 'Open 24/7 to fit your busy schedule, so you can work out whenever is best for you.' 
              }
            ].map((feature, idx) => (
              <Motion key={idx} type="fadeIn" delay={idx * 0.2} className="opacity-0">
                <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion type="fadeIn" className="text-center mb-16 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of fitness services to help you reach your goals.
            </p>
          </Motion>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Strength Training', desc: 'Build muscle and increase strength', icon: '💪', color: 'from-blue-500 to-blue-600' },
              { title: 'Cardio', desc: 'Improve your cardiovascular health', icon: '🏃', color: 'from-green-500 to-green-600' },
              { title: 'Yoga', desc: 'Find your inner peace and flexibility', icon: '🧘', color: 'from-purple-500 to-purple-600' },
              { title: 'Personal Training', desc: 'One-on-one guidance from pros', icon: '👤', color: 'from-orange-500 to-red-600' }
            ].map((service, index) => (
              <Motion key={index} type="fadeIn" delay={index * 0.15} className="opacity-0">
                <div className="group bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-3xl hover:from-orange-50 hover:to-orange-100 transition-all hover:-translate-y-1 cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </Motion>
            ))}
          </div>
          <Motion type="fadeIn" delay={0.6} className="text-center mt-12 opacity-0">
            <Link to="/services" className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-orange-500/30">
              View All Services
              <span className="ml-2">→</span>
            </Link>
          </Motion>
        </div>
      </section>

      {/* Trainers Preview */}
      <section id="trainers" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion type="fadeIn" className="text-center mb-16 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Trainers</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our team of expert trainers who are here to help you succeed.
            </p>
          </Motion>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John Smith', role: 'Head Trainer', specialty: 'Strength & Conditioning', img: 'john' },
              { name: 'Sarah Johnson', role: 'Yoga Instructor', specialty: 'Yoga & Pilates', img: 'sarah' },
              { name: 'Mike Chen', role: 'Personal Trainer', specialty: 'Weight Loss', img: 'mike' }
            ].map((trainer, index) => (
              <Motion key={index} type="fadeIn" delay={index * 0.2} className="opacity-0">
                <div className="group bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all">
                  <div className="relative overflow-hidden">
                    <img src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20trainer%20portrait%20${trainer.img}%20high%20quality&image_size=square_hd`} alt={trainer.name} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                    <p className="text-orange-400 font-semibold mb-2">{trainer.role}</p>
                    <p className="text-gray-400">{trainer.specialty}</p>
                  </div>
                </div>
              </Motion>
            ))}
          </div>
          <Motion type="fadeIn" delay={0.6} className="text-center mt-12 opacity-0">
            <Link to="/trainers" className="inline-flex items-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all">
              See All Trainers
              <span className="ml-2">→</span>
            </Link>
          </Motion>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion type="fadeIn" className="text-center mb-16 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it — hear from our amazing members!
            </p>
          </Motion>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Emily Davis', text: 'This gym has completely transformed my life! The trainers are amazing and the atmosphere is so motivating.', rating: 5, avatar: 'E' },
              { name: 'David Wilson', text: 'Best gym I have ever been to! The equipment is top-notch and the staff is incredibly friendly.', rating: 5, avatar: 'D' },
              { name: 'Jessica Brown', text: 'I have achieved results I never thought possible. Highly recommend to anyone looking to get fit!', rating: 5, avatar: 'J' }
            ].map((testimonial, index) => (
              <Motion key={index} type="fadeIn" delay={index * 0.2} className="opacity-0">
                <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="flex text-yellow-500 text-2xl mb-6">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 text-lg mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500">Happy Member</p>
                    </div>
                  </div>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Motion type="fadeIn" className="opacity-0">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join today and get 20% off your first 3 months! Don't wait — your transformation starts now.
            </p>
            <Link to="/pricing" className="inline-flex items-center bg-white text-orange-600 hover:bg-slate-100 px-12 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl">
              Get Started Now
              <span className="ml-3">→</span>
            </Link>
          </Motion>
        </div>
      </section>
    </div>
  )
}

export default Home
