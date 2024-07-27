import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';
import NavigationDots from './NavigationDots'; // Make sure to adjust the path as needed

const imgUrl = 'https://www.cflowapps.com/wp-content/uploads/2023/02/bpm_helthcre.jpg';

const cardData = [
    {
        user: "@health_guru",
        sem: "Sem 8, Medical",
        date: "31st June 2024",
        title: "Understanding the importance of regular health check-ups.",
        description: "Regular health check-ups are essential for maintaining good health and early detection of potential health issues. They help monitor your overall health status and identify any changes or abnormalities that might require medical attention. Key health parameters to monitor during these check-ups include blood pressure, cholesterol levels, blood sugar, and body mass index (BMI). Additionally, regular screenings for cancers, heart disease, and other conditions are crucial for early intervention and better health outcomes.",
        tags: ["Health", "Check-ups"],
        likes: 14000,
        comments: 239,
        image: imgUrl
    },
    {
        user: "@nutrition_expert",
        sem: "Sem 6, Nutrition",
        date: "20th July 2024",
        title: "The benefits of a balanced diet for a healthy lifestyle.",
        description: "A balanced diet provides your body with the essential nutrients it needs to function correctly. It includes a variety of foods from all the food groups: fruits, vegetables, lean proteins, whole grains, and dairy. A balanced diet supports immune function, reduces the risk of chronic diseases, promotes healthy weight management, and provides the energy needed for daily activities. By making informed food choices, you can improve your overall health and well-being.",
        tags: ["Nutrition", "Diet"],
        likes: 12500,
        comments: 198,
        image: imgUrl
    },
    {
        user: "@mental_health_advocate",
        sem: "Sem 5, Psychology",
        date: "15th May 2024",
        title: "The importance of mental health and well-being.",
        description: "Mental health is a crucial aspect of overall health that affects how we think, feel, and act. Good mental health helps us manage stress, relate to others, and make healthy choices. It's important to take care of your mental health by staying connected with loved ones, practicing mindfulness, and seeking professional help when needed. Resources such as therapy, support groups, and self-help strategies can significantly improve mental health and quality of life.",
        tags: ["Mental Health", "Well-being"],
        likes: 11000,
        comments: 150,
        image: imgUrl
    },
    {
        user: "@fitness_fanatic",
        sem: "Sem 7, Fitness",
        date: "5th June 2024",
        title: "Best practices for maintaining physical fitness.",
        description: "Maintaining physical fitness is key to a healthy lifestyle. Effective exercise routines include a mix of cardiovascular activities, strength training, and flexibility exercises. Regular physical activity helps control weight, reduces the risk of chronic diseases, strengthens bones and muscles, and improves mental health. Setting realistic fitness goals, staying consistent, and varying your workouts can keep you motivated and enhance your overall fitness.",
        tags: ["Fitness", "Exercise"],
        likes: 9000,
        comments: 120,
        image: imgUrl
    },
    {
        user: "@med_tech_innovator",
        sem: "Sem 8, Medical Technology",
        date: "25th April 2024",
        title: "How technology is revolutionizing healthcare.",
        description: "Advancements in medical technology are transforming the healthcare industry, improving patient outcomes and streamlining processes. Innovations such as telemedicine, electronic health records, wearable health devices, and AI-driven diagnostics are enhancing the quality of care and accessibility. These technologies enable remote monitoring, personalized treatment plans, and more accurate diagnoses, ultimately leading to better health management and patient satisfaction.",
        tags: ["Technology", "Healthcare"],
        likes: 13500,
        comments: 210,
        image: imgUrl
    },
    {
        user: "@cardio_specialist",
        sem: "Sem 6, Cardiology",
        date: "10th March 2024",
        title: "Heart health: Tips for a healthy heart.",
        description: "Maintaining heart health is vital for overall well-being. Key tips for a healthy heart include eating a heart-healthy diet, engaging in regular physical activity, avoiding smoking, managing stress, and getting regular health screenings. Foods rich in omega-3 fatty acids, fiber, and antioxidants support heart health, while regular exercise strengthens the heart muscle. Monitoring blood pressure and cholesterol levels can help prevent cardiovascular diseases.",
        tags: ["Heart Health", "Cardiology"],
        likes: 10500,
        comments: 175,
        image: imgUrl
    },
    {
        user: "@data_scientist_health",
        sem: "Sem 7, Data Science in Healthcare",
        date: "1st February 2024",
        title: "The role of data science in healthcare.",
        description: "Data science is revolutionizing healthcare by providing insights that improve patient care and operational efficiency. Analyzing large datasets helps identify patterns and trends, leading to better diagnosis, treatment plans, and disease prevention strategies. Key trends in data science in healthcare include predictive analytics, personalized medicine, and population health management. These advancements enable more accurate predictions and customized treatments, enhancing patient outcomes.",
        tags: ["Data Science", "Healthcare"],
        likes: 11500,
        comments: 200,
        image: imgUrl
    }
];

const CardComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = cardData[currentIndex];

  return (
    <div className="flex flex-col bg-white text-gray-800 rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex-1 flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="https://avatar.iran.liara.run/public"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">{currentCard.user}</p>
              <p className="text-xs text-gray-500">{currentCard.sem}</p>
              <p className="text-xs text-gray-500">{currentCard.date}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">
            {currentCard.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {currentCard.description}
          </p>
          <div className="flex items-center space-x-4 mb-6">
            {currentCard.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-red-600">
              <FaHeart />
              <span>{currentCard.likes.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <FaComment />
              <span>{currentCard.comments}</span>
            </div>
            <button className="ml-auto bg-blue-500 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h3M12 5v14m0 0l6-6m-6 6L6 13" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={currentCard.image}
            alt="Post"
            className="w-64 h-64 object-cover rounded-lg border border-gray-200"
          />
        </div>
      </div>
      <NavigationDots
        total={cardData.length}
        currentIndex={currentIndex}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

export default CardComponent;
