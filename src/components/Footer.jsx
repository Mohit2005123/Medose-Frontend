import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h2 className="font-bold mb-2">About Us</h2>
          <ul>
            <li className="mb-2"><a href="#mission" className="hover:underline">Our Mission</a></li>
            <li className="mb-2"><a href="#team" className="hover:underline">Meet the Team</a></li>
            <li className="mb-2"><a href="#careers" className="hover:underline">Careers</a></li>
            <li className="mb-2"><a href="#press" className="hover:underline">Press & Media</a></li>
            <li className="mb-2"><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="#faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h2 className="font-bold mb-2">Services</h2>
          <ul>
            <li className="mb-2"><a href="#consultation" className="hover:underline">Consultation</a></li>
            <li className="mb-2"><a href="#emergency" className="hover:underline">Emergency Services</a></li>
            <li className="mb-2"><a href="#specialty" className="hover:underline">Specialty Care</a></li>
            <li className="mb-2"><a href="#telehealth" className="hover:underline">Telehealth</a></li>
            <li className="mb-2"><a href="#pharmacy" className="hover:underline">Pharmacy Services</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h2 className="font-bold mb-2">Useful Links</h2>
          <ul>
            <li className="mb-2"><a href="#home" className="hover:underline">Home</a></li>
            <li className="mb-2"><a href="#patient-portal" className="hover:underline">Patient Portal</a></li>
            <li className="mb-2"><a href="#insurance" className="hover:underline">Insurance Information</a></li>
            <li className="mb-2"><a href="#billing" className="hover:underline">Billing & Payments</a></li>
            <li className="mb-2"><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h2 className="font-bold mb-2">Contact Us</h2>
          <p>Address: 123 Health Avenue, Wellness City, HC 12345, USA</p>
          <p>Phone: +1 (234) 567-8901</p>
          <p>Email: support@healthcareapp.com</p>
          <p>Fax: +1 (234) 567-8902</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2024 All rights reserved by Med Dose</p>
      </div>
    </footer>
  );
};

export default Footer;
