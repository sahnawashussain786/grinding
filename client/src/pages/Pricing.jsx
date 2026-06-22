import { Link } from 'react-router-dom'
import Motion from '../components/Motion'

function Pricing() {
  const plans = [
    { 
      name: 'Basic', 
      price: '$29', 
      period: '/month',
      features: [
        'Access to gym equipment',
        'Open gym hours (6AM-10PM)',
        'Free parking',
        'Locker access',
        '2 free group classes/month'
      ],
      popular: false,
      color: 'from-gray-600 to-gray-700'
    },
    { 
      name: 'Premium', 
      price: '$49', 
      period: '/month',
      features: [
        'All Basic features',
        'Unlimited group classes',
        'Nutrition planning',
        '1 personal training session/month',
        'Priority support',
        'Guest passes (2/month)'
      ],
      popular: true,
      color: 'from-orange-500 to-red-600'
    },
    { 
      name: 'Elite', 
      price: '$99', 
      period: '/month',
      features: [
        'All Premium features',
        'Unlimited personal training',
        '24/7 access',
        'Premium locker',
        'Guest passes (5/month)',
        'Free supplements',
        'Priority booking'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Motion type="fadeIn" className="opacity-0">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Pricing Plans</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your fitness journey. No hidden fees, cancel anytime.
            </p>
          </Motion>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <Motion key={index} type="fadeIn" delay={index * 0.2} className="opacity-0">
                <div className={`relative bg-slate-50 p-10 rounded-3xl transition-all hover:-translate-y-2 shadow-xl hover:shadow-2xl ${plan.popular ? 'border-2 border-orange-500 bg-orange-50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-8`}>
                    <span className="text-3xl">{plan.popular ? '🏆' : '⭐'}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 text-xl">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`block w-full text-center py-4 rounded-full font-bold text-lg transition-all hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg shadow-orange-500/30' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                    Get Started
                  </Link>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion type="fadeIn" className="text-center mb-16 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We've got answers!
            </p>
          </Motion>
          <div className="space-y-6">
            {[
              { question: 'Can I cancel my membership anytime?', answer: 'Yes! You can cancel your membership at any time with no hidden fees.' },
              { question: 'Do you offer a free trial?', answer: 'Absolutely! We offer a 7-day free trial so you can experience everything we have to offer.' },
              { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers.' },
              { question: 'Can I upgrade or downgrade my plan?', answer: 'Yes! You can change your plan at any time, and the new rate will be applied to your next billing cycle.' }
            ].map((faq, idx) => (
              <Motion key={idx} type="fadeIn" delay={idx * 0.1} className="opacity-0">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{faq.question}</h4>
                  <p className="text-gray-600 text-lg">{faq.answer}</p>
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Start?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join today and get 20% off your first 3 months!
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-orange-600 hover:bg-slate-100 px-12 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-2xl">
              Sign Up Now
              <span className="ml-3">→</span>
            </Link>
          </Motion>
        </div>
      </section>
    </div>
  )
}

export default Pricing
