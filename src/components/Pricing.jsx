// src/Pricing.js
import React from 'react';
import TextGenerateEffect from './ui/TextGenerateEffect.jsx';

const Pricing = () => {
    const pricingData = [
        {
            discount: "20% off",
            price: "₹199",
            title: "Basic Health Checkup",
            features: [
                "Comprehensive physical examination",
                "Basic lab tests",
                "Blood pressure monitoring",
                "Health consultation",
                "Follow-up support"
            ]
        },
        {
            discount: "25% off",
            price: "₹299",
            title: "Advanced Health Screening",
            features: [
                "Complete health screening",
                "Advanced diagnostic tests",
                "Nutritional consultation",
                "Personalized health plan",
                "24/7 support"
            ]
        },
        {
            discount: "30% off",
            price: "₹399",
            title: "Wellness Package",
            features: [
                "Full medical evaluation",
                "Specialist consultations",
                "Customized wellness program",
                "Stress management session",
                "Ongoing health monitoring"
            ]
        }
    ];

    return (
        <div className="bg-gray-100 text-gray-900 py-12">
            <div className="container mx-auto text-center">
                <TextGenerateEffect words='Your Health, Our Commitment – Affordable Care Plans' />
                <h1 className="text-3xl font-bold mb-8">Our Pricing</h1>
                <div className="flex justify-center space-x-4">
                    {pricingData.map((plan, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-sm border border-gray-300">
                            <div className="mb-4">
                                <span className="text-green-500 font-bold">{plan.discount}</span>
                                <h3 className="text-4xl font-bold">{plan.price}</h3>
                                <p className="text-lg font-semibold">{plan.title}</p>
                            </div>
                            <ul className="mb-6 space-y-2 text-left">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="text-gray-700">{feature}</li>
                                ))}
                            </ul>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-bold">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
