// src/pages/Doctors.js
import React, {useState} from 'react';
import Navbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import DoctorCard from '../components/DoctorCard';

const doctorsData = [
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
    },
    // New entries
    {
        name: "Dr. Olivia Martinez",
        title: "Neurologist",
        description: "Dr. Olivia Martinez specializes in neurological disorders and is committed to advancing treatments for conditions such as epilepsy and multiple sclerosis.",
        imageUrl: "https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    },
    {
        name: "Dr. John Doe",
        title: "Gastroenterologist",
        description: "Dr. John Doe focuses on digestive system disorders and provides expertise in managing conditions such as IBS and Crohn's disease.",
        imageUrl: "https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    },
    {
        name: "Dr. Alice Smith",
        title: "Oncologist",
        description: "Dr. Alice Smith is dedicated to treating cancer patients with the latest therapies and providing compassionate care throughout their journey.",
        imageUrl: "https://images.unsplash.com/photo-1592620125836-6c13c9f81d6b",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    },
    {
        name: "Dr. William Johnson",
        title: "Endocrinologist",
        description: "Dr. William Johnson specializes in hormonal disorders and metabolic diseases, offering personalized treatment plans for diabetes and thyroid issues.",
        imageUrl: "https://images.unsplash.com/photo-1506765515382-41d07d8b5c48",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    },
    {
        name: "Dr. Emily White",
        title: "Rheumatologist",
        description: "Dr. Emily White provides expert care for autoimmune diseases and musculoskeletal disorders, focusing on improving patient quality of life.",
        imageUrl: "https://images.unsplash.com/photo-1576765662475-5a6d0d0c0b46",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    },
    {
        name: "Dr. James Williams",
        title: "Pulmonologist",
        description: "Dr. James Williams specializes in respiratory conditions and is dedicated to treating diseases like asthma and COPD with advanced techniques.",
        imageUrl: "https://images.unsplash.com/photo-1546447310-d7cf4f9a9a1f",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    },
    {
        name: "Dr. Ava Brown",
        title: "Nephrologist",
        description: "Dr. Ava Brown focuses on kidney health and offers comprehensive care for conditions such as chronic kidney disease and hypertension.",
        imageUrl: "https://images.unsplash.com/photo-1544005313-0d4d0f7d8dc0",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    },
    {
        name: "Dr. Mia Johnson",
        title: "Gynecologist",
        description: "Dr. Mia Johnson provides expert care in women's health, specializing in gynecological conditions and preventive care.",
        imageUrl: "https://images.unsplash.com/photo-1590715060401-c7e6c5b8e946",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    },
    {
        name: "Dr. Lucas Miller",
        title: "Hematologist",
        description: "Dr. Lucas Miller specializes in blood disorders and provides comprehensive care for conditions such as anemia and leukemia.",
        imageUrl: "https://images.unsplash.com/photo-1544741850-fbf5e29e8f6f",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    },
    {
        name: "Dr. Isabella Garcia",
        title: "Allergist",
        description: "Dr. Isabella Garcia is dedicated to diagnosing and treating allergies and asthma, using the latest treatments to improve patient health.",
        imageUrl: "https://images.unsplash.com/photo-1584964354186-8c0a66be90f5",
        socialLinks: [
            { icon: "fab fa-facebook-f", url: "#" },
            { icon: "fab fa-instagram", url: "#" },
            { icon: "fab fa-twitter", url: "#" },
            { icon: "fab fa-linkedin-in", url: "#" }
        ]
    }
];
const ITEMS_PER_PAGE = 10; // Number of doctors per page
const Doctors = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index of the first and last items to display
    const indexOfLastDoctor = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstDoctor = indexOfLastDoctor - ITEMS_PER_PAGE;
    const currentDoctors = doctorsData.slice(indexOfFirstDoctor, indexOfLastDoctor);

    // Calculate total number of pages
    const totalPages = Math.ceil(doctorsData.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-8">Meet Our Doctors</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {currentDoctors.map((doctor, index) => (
                            <DoctorCard key={index} doctor={doctor} />
                        ))}
                    </div>
                    {/* Pagination Controls */}
                    <div className="mt-8">
                        <nav aria-label="Page navigation">
                            <ul className="flex justify-center space-x-2">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => handlePageChange(index + 1)}
                                            className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Doctors;

