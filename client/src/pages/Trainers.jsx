function Trainers() {
  return (
    <div className="font-sans text-gray-800 pt-32 pb-20 bg-gray-900">
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
    </div>
  )
}

export default Trainers
