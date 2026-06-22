function Pricing() {
  return (
    <div className="font-sans text-gray-800 pt-32 pb-20 bg-white">
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
    </div>
  )
}

export default Pricing
