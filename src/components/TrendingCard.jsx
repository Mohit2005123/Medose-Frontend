import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TrendingCard = () => {
  const allArticles = [
    {
      id: 1,
      username: '@health_expert',
      title: '5 Tips for Maintaining a Healthy Diet During Busy Times',
      likes: '18K',
      comments: 320,
      daysAgo: '2 days ago',
      image: 'https://via.placeholder.com/300?text=Healthy+Diet',
    },
    {
      id: 2,
      username: '@wellness_guide',
      title: 'The Benefits of Regular Exercise for Mental Health',
      likes: '22K',
      comments: 415,
      daysAgo: '4 days ago',
      image: 'https://via.placeholder.com/300?text=Exercise+Benefits',
    },
    {
      id: 3,
      username: '@med_professional',
      title: 'Understanding the Importance of Preventive Health Screenings',
      likes: '25K',
      comments: 275,
      daysAgo: '1 week ago',
      image: 'https://via.placeholder.com/300?text=Preventive+Screenings',
    },
    {
      id: 4,
      username: '@nutrition_ninja',
      title: 'How to Incorporate More Vegetables into Your Daily Meals',
      likes: '30K',
      comments: 500,
      daysAgo: '10 days ago',
      image: 'https://via.placeholder.com/300?text=More+Vegetables',
    },
    {
      id: 5,
      username: '@fitness_fanatic',
      title: 'Top 10 Exercises for a Full-Body Workout at Home',
      likes: '28K',
      comments: 340,
      daysAgo: '2 weeks ago',
      image: 'https://via.placeholder.com/300?text=Home+Workout',
    },
    // Additional articles
    {
      id: 6,
      username: '@sleep_specialist',
      title: 'How to Improve Your Sleep Quality with Simple Habits',
      likes: '26K',
      comments: 295,
      daysAgo: '3 days ago',
      image: 'https://via.placeholder.com/300?text=Better+Sleep',
    },
    {
      id: 7,
      username: '@mental_health',
      title: 'Managing Stress: Techniques and Tips for a Balanced Life',
      likes: '21K',
      comments: 310,
      daysAgo: '6 days ago',
      image: 'https://via.placeholder.com/300?text=Stress+Management',
    },
    {
      id: 8,
      username: '@cardio_expert',
      title: 'The Benefits of Cardio Workouts for Heart Health',
      likes: '23K',
      comments: 289,
      daysAgo: '8 days ago',
      image: 'https://via.placeholder.com/300?text=Cardio+Benefits',
    },
    {
      id: 9,
      username: '@dietitian',
      title: 'How to Plan a Balanced Diet for Optimal Health',
      likes: '20K',
      comments: 275,
      daysAgo: '12 days ago',
      image: 'https://via.placeholder.com/300?text=Balanced+Diet',
    },
    {
      id: 10,
      username: '@healthcoach',
      title: 'The Importance of Hydration and How to Stay Hydrated',
      likes: '27K',
      comments: 310,
      daysAgo: '15 days ago',
      image: 'https://via.placeholder.com/300?text=Stay+Hydrated',
    },
    {
      id: 11,
      username: '@rehab_specialist',
      title: 'Rehabilitation Exercises for Post-Injury Recovery',
      likes: '19K',
      comments: 260,
      daysAgo: '1 month ago',
      image: 'https://via.placeholder.com/300?text=Rehabilitation',
    },
    {
      id: 12,
      username: '@physical_therapist',
      title: 'How Physical Therapy Can Improve Mobility and Reduce Pain',
      likes: '22K',
      comments: 295,
      daysAgo: '1 month ago',
      image: 'https://via.placeholder.com/300?text=Physical+Therapy',
    },
    {
      id: 13,
      username: '@health_explorer',
      title: 'Understanding Chronic Diseases and How to Manage Them',
      likes: '24K',
      comments: 310,
      daysAgo: '1 month ago',
      image: 'https://via.placeholder.com/300?text=Chronic+Diseases',
    },
    {
      id: 14,
      username: '@healthy_lifestyle',
      title: 'Incorporating Mindfulness and Meditation into Your Daily Routine',
      likes: '29K',
      comments: 330,
      daysAgo: '1 month ago',
      image: 'https://via.placeholder.com/300?text=Mindfulness',
    },
    {
      id: 15,
      username: '@health_care',
      title: 'How to Create a Personalized Health and Wellness Plan',
      likes: '26K',
      comments: 320,
      daysAgo: '1 month ago',
      image: 'https://via.placeholder.com/300?text=Personalized+Plan',
    },
  ];

  const [visibleArticles, setVisibleArticles] = useState(5);

  const handleSeeMore = () => {
    setVisibleArticles((prev) => prev + 5);
  };

  return (
    <div className="bg-white min-h-screen p-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-blue-600 text-3xl font-bold">🩺 Trending Healthcare Articles</h1>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-green-600">Nutrition</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-green-600">Exercise</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-green-600">Preventive Care</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105 hover:bg-green-600">Wellness</button>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 text-gray-800 p-2 rounded transition-all focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allArticles.slice(0, visibleArticles).map((article) => (
          <motion.div
            key={article.id}
            className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              alt="Article"
              src={article.image}
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border-2 border-blue-500 transition-transform duration-300 transform hover:scale-110"
                />
                <div>
                  <p className="text-blue-600 font-semibold">{article.username}</p>
                  <p className="text-gray-600 text-sm">{article.daysAgo}</p>
                </div>
              </div>
              <h2 className="text-gray-800 text-xl font-bold mt-2 transition-colors duration-300 hover:text-blue-600">{article.title}</h2>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <button className="flex items-center text-blue-500 space-x-1 transition-colors duration-300 hover:text-blue-700">
                    <span>❤️</span>
                    <span>{article.likes}</span>
                  </button>
                  <button className="flex items-center text-blue-500 space-x-1 transition-colors duration-300 hover:text-blue-700">
                    <span>💬</span>
                    <span>{article.comments}</span>
                  </button>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Read more</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {visibleArticles < allArticles.length && (
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={handleSeeMore}
            className="text-blue-600 hover:text-blue-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            See more
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default TrendingCard;
