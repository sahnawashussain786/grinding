import Motion from '../components/Motion'

function About() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Motion type="fadeIn" className="opacity-0">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about our journey, mission, and the team dedicated to helping you transform your life.
            </p>
          </Motion>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Motion type="slideInLeft" className="opacity-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative">
                  <img src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20gym%20interior%20with%20equipment%20and%20people%20working%20out%20high%20quality&image_size=square_hd" alt="Gym Interior" className="rounded-3xl shadow-2xl" />
                </div>
              </div>
            </Motion>
            <Motion type="slideInRight" delay={0.3} className="opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2009, GRIND Gym started with a simple mission: to create a welcoming space where everyone feels empowered to reach their fitness goals.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                What began as a small neighborhood gym has grown into a community of thousands of members who support and motivate each other every day.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our journey has been driven by passion, dedication, and a commitment to providing the best possible experience for our members.
              </p>
            </Motion>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Motion type="fadeIn" className="opacity-0">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To inspire and empower individuals to lead healthier, more active lives by providing world-class facilities, expert guidance, and a supportive community.
                </p>
              </div>
            </Motion>
            <Motion type="fadeIn" delay={0.2} className="opacity-0">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading fitness destination that transforms lives, builds strong communities, and sets new standards for health and wellness.
                </p>
              </div>
            </Motion>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion type="fadeIn" className="text-center mb-16 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at GRIND Gym.
            </p>
          </Motion>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💪', title: 'Excellence', desc: 'Striving for excellence in everything we do, from our facilities to our service.' },
              { icon: '🤝', title: 'Community', desc: 'Building a supportive, inclusive community where everyone feels welcome.' },
              { icon: '🎯', title: 'Integrity', desc: 'Operating with honesty, transparency, and respect in all our interactions.' },
              { icon: '🌟', title: 'Innovation', desc: 'Continuously improving and innovating to provide the best fitness experience.' }
            ].map((value, idx) => (
              <Motion key={idx} type="fadeIn" delay={idx * 0.15} className="opacity-0">
                <div className="group bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-3xl hover:from-orange-50 hover:to-orange-100 transition-all">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion type="fadeIn" className="text-center mb-16 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our 15-year journey to becoming the best gym in town.
            </p>
          </Motion>
          <div className="space-y-12">
            {[
              { year: '2009', title: 'Founded', desc: 'GRIND Gym opens its doors with just 5 trainers and 100 members.' },
              { year: '2014', title: 'Expansion', desc: 'Expanded to 2 locations and added group fitness classes.' },
              { year: '2019', title: 'Facility Upgrade', desc: 'Complete renovation with state-of-the-art equipment.' },
              { year: '2024', title: '5000 Members', desc: 'Celebrated 5000 active members and 15 years of service.' }
            ].map((milestone, idx) => (
              <Motion key={idx} type="fadeIn" delay={idx * 0.15} className="opacity-0">
                <div className="flex items-center gap-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{milestone.year}</span>
                  </div>
                  <div className="flex-grow bg-slate-800 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.desc}</p>
                  </div>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
