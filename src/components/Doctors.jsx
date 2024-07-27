// src/Instructors.js
import React from 'react';

const instructorsData = [
    {
        name: "Dr. Emily Clark",
        title: "Senior Physician",
        description: "Dr. Emily Clark specializes in internal medicine with over 15 years of experience. She is dedicated to providing comprehensive care and improving patient outcomes.",
        imageUrl: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    },
    {
        name: "Dr. Michael Brown",
        title: "Cardiologist",
        description: "Dr. Michael Brown is an expert in cardiovascular medicine. His passion lies in heart health and preventive care, aiming to advance the field through research and patient care.",
        imageUrl: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    },
    {
        name: "Dr. Sophia Johnson",
        title: "Pediatrician",
        description: "Dr. Sophia Johnson has dedicated her career to pediatric care. Her approach combines clinical expertise with a compassionate touch, focusing on the holistic well-being of children.",
        imageUrl: "https://w7.pngwing.com/pngs/488/261/png-transparent-female-doctor-3d-illustration-physician-nursing-health-care-hospital-the-doctor-miscellaneous-image-file-formats-service.png",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    },
    {
        name: "Dr. Alexander Lee",
        title: "Orthopedic Surgeon",
        description: "Dr. Alexander Lee is a leading orthopedic surgeon known for his innovative techniques in joint replacement and sports medicine. His focus is on restoring mobility and improving quality of life.",
        imageUrl: "https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-dribbble", url: "#" }
        ]
    }
];

const Doctors = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-yellow-600 text-sm font-bold uppercase mb-3">Our Great Team</h2>
                <h1 className="text-3xl font-bold mb-8">Our Best Doctors</h1>
                <div className="flex justify-end mb-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-bold">
                        View All
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {instructorsData.map((instructor, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:animate-wobble"
                        >
                            <div className="flex items-center mb-4">
                                <img className="w-16 h-16 rounded-full mr-4" src={instructor.imageUrl} alt={instructor.name} />
                                <div>
                                    <h3 className="text-xl font-bold">{instructor.name}</h3>
                                    <p className="text-yellow-500">{instructor.title}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-4">{instructor.description}</p>
                            <div className="flex space-x-3">
                                {instructor.socialLinks.map((link, index) => (
                                    <a key={index} href={link.url} className="text-gray-500 hover:text-gray-700">
                                        <i className={link.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
