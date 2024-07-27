import React, { useState } from 'react';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import { FaArrowUp } from 'react-icons/fa'; // Scroll-to-top icon

// Mock data for appointments with additional past appointments
const appointments = [
    { id: 1, date: '2024-08-01', time: '10:00 AM', doctor: 'Dr. Smith', type: 'upcoming' },
    { id: 2, date: '2024-08-05', time: '11:00 AM', doctor: 'Dr. Johnson', type: 'upcoming' },
    { id: 3, date: '2024-07-20', time: '09:00 AM', doctor: 'Dr. Lee', type: 'past' },
    { id: 4, date: '2024-07-15', time: '02:00 PM', doctor: 'Dr. Brown', type: 'past' },
    { id: 5, date: '2024-07-10', time: '01:00 PM', doctor: 'Dr. Davis', type: 'past' },
    { id: 6, date: '2024-07-05', time: '03:00 PM', doctor: 'Dr. Wilson', type: 'past' },
    { id: 7, date: '2024-07-01', time: '10:30 AM', doctor: 'Dr. Taylor', type: 'past' },
    { id: 8, date: '2024-06-28', time: '11:30 AM', doctor: 'Dr. Thomas', type: 'past' },
    { id: 9, date: '2024-06-25', time: '12:00 PM', doctor: 'Dr. Martinez', type: 'past' },
    { id: 10, date: '2024-06-20', time: '02:30 PM', doctor: 'Dr. Anderson', type: 'past' },
    { id: 11, date: '2024-06-15', time: '04:00 PM', doctor: 'Dr. Thompson', type: 'past' },
    { id: 12, date: '2024-06-10', time: '09:00 AM', doctor: 'Dr. Garcia', type: 'past' },
    { id: 13, date: '2024-06-05', time: '01:00 PM', doctor: 'Dr. Harris', type: 'past' },
    { id: 14, date: '2024-06-01', time: '03:00 PM', doctor: 'Dr. Clark', type: 'past' },
    { id: 15, date: '2024-05-30', time: '11:00 AM', doctor: 'Dr. Lewis', type: 'past' },
    { id: 16, date: '2024-05-25', time: '02:00 PM', doctor: 'Dr. Walker', type: 'past' },
    { id: 17, date: '2024-05-20', time: '10:00 AM', doctor: 'Dr. Young', type: 'past' },
    { id: 18, date: '2024-05-15', time: '01:00 PM', doctor: 'Dr. Hall', type: 'past' },
    { id: 19, date: '2024-05-10', time: '03:00 PM', doctor: 'Dr. Allen', type: 'past' },
    { id: 20, date: '2024-05-05', time: '11:00 AM', doctor: 'Dr. Wright', type: 'past' },
    { id: 21, date: '2024-05-01', time: '01:00 PM', doctor: 'Dr. Scott', type: 'past' },
    { id: 22, date: '2024-04-30', time: '10:00 AM', doctor: 'Dr. Adams', type: 'past' },
    { id: 23, date: '2024-04-25', time: '12:00 PM', doctor: 'Dr. Nelson', type: 'past' },
    { id: 24, date: '2024-04-20', time: '03:00 PM', doctor: 'Dr. Harris', type: 'past' },
    { id: 25, date: '2024-04-15', time: '02:00 PM', doctor: 'Dr. Baker', type: 'past' },
];

const Appointments = () => {
    const [upcomingAppointments, setUpcomingAppointments] = useState(appointments.filter(app => app.type === 'upcoming'));
    const [pastAppointments, setPastAppointments] = useState(appointments.filter(app => app.type === 'past'));

    const handleCreateAppointment = () => {
        // Logic for creating a new appointment can be added here
        alert('Create Appointment button clicked');
    };

    // Scroll-to-top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 relative">
            <MyNavbar />
            <div className="flex flex-1 flex-col mt-16 mb-16 mx-8 sm:mx-16 lg:mx-32">
                <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-900 animate-bounce">Appointments</h1>
                
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-800">Upcoming Appointments</h2>
                    <ul className="space-y-6">
                        {upcomingAppointments.map((appointment) => (
                            <li key={appointment.id} className="bg-white p-6 rounded-lg shadow-lg border border-blue-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                                <p className="text-lg text-blue-600"><strong>Date:</strong> {appointment.date}</p>
                                <p className="text-lg text-blue-600"><strong>Time:</strong> {appointment.time}</p>
                                <p className="text-lg text-blue-600"><strong>Doctor:</strong> {appointment.doctor}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6 text-blue-800">Past Appointments</h2>
                    <div className="overflow-y-auto h-80 bg-white p-4 rounded-lg shadow-md border border-blue-300">
                        <ul className="space-y-6">
                            {pastAppointments.map((appointment) => (
                                <li key={appointment.id} className="p-6 rounded-lg shadow-lg border border-blue-300 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                                    <p className="text-lg text-blue-600"><strong>Date:</strong> {appointment.date}</p>
                                    <p className="text-lg text-blue-600"><strong>Time:</strong> {appointment.time}</p>
                                    <p className="text-lg text-blue-600"><strong>Doctor:</strong> {appointment.doctor}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center mb-12">
                    <button
                        onClick={handleCreateAppointment}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-bold shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
                    >
                        Create New Appointment
                    </button>
                </div>

                <div className="absolute bottom-16 right-8">
                    <button
                        onClick={scrollToTop}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
                    >
                        <FaArrowUp size={20} />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Appointments;
