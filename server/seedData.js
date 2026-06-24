require('dotenv').config();
const mongoose = require('mongoose');
const Trainer = require('./models/Trainer');

const seedTrainers = [
  {
    name: 'John Smith',
    role: 'Head Trainer',
    specialty: 'Strength & Conditioning',
    bio: 'With 15 years of experience, John specializes in helping clients build muscle and reach their performance goals.',
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20trainer%20portrait%20john%20high%20quality&image_size=square_hd'
  },
  {
    name: 'Sarah Johnson',
    role: 'Yoga Instructor',
    specialty: 'Yoga & Pilates',
    bio: 'Sarah has been teaching yoga for 12 years and helps clients find peace and flexibility through mindful movement.',
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20trainer%20portrait%20sarah%20high%20quality&image_size=square_hd'
  },
  {
    name: 'Mike Chen',
    role: 'Personal Trainer',
    specialty: 'Weight Loss',
    bio: 'Mike is a certified trainer who has helped hundreds of clients achieve sustainable weight loss and better health.',
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20trainer%20portrait%20mike%20high%20quality&image_size=square_hd'
  },
  {
    name: 'Emily Davis',
    role: 'Cardio Coach',
    specialty: 'HIIT & Cardio',
    bio: 'Emily is passionate about high-energy workouts and helping clients improve their cardiovascular fitness.',
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20trainer%20portrait%20emily%20high%20quality&image_size=square_hd'
  },
  {
    name: 'David Wilson',
    role: 'Boxing Coach',
    specialty: 'Boxing & Kickboxing',
    bio: 'David is a former competitive boxer who teaches self-defense and boxing techniques while getting a great workout.',
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20trainer%20portrait%20david%20high%20quality&image_size=square_hd'
  },
  {
    name: 'Jessica Brown',
    role: 'Nutritionist',
    specialty: 'Nutrition Planning',
    bio: 'Jessica is a registered dietitian who creates personalized nutrition plans to complement fitness routines.',
    imageUrl: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20fitness%20trainer%20portrait%20jessica%20high%20quality&image_size=square_hd'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Trainer.deleteMany({});

    // Insert seed data
    await Trainer.insertMany(seedTrainers);
    console.log('Seed data added successfully!');

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
