// DoctorCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faDribbble, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const iconMapping = {
  'fab fa-facebook-f': faFacebookF,
  'fab fa-instagram': faInstagram,
  'fab fa-twitter': faTwitter,
  'fab fa-dribbble': faDribbble,
  'fab fa-linkedin-in': faLinkedinIn,
};

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img className="h-40 w-40 rounded-full mx-auto mb-4" src={doctor.imageUrl} alt={doctor.name} />
      <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
      <h3 className="text-gray-600 mb-4">{doctor.title}</h3>
      <p className="text-gray-700 mb-4">{doctor.description}</p>
      <div className="flex justify-center space-x-4 mb-4">
        {doctor.socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={iconMapping[link.icon]} size="lg" />
          </a>
        ))}
      </div>
      <div className="text-center">
        <a href='#' className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
          Connect
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;
