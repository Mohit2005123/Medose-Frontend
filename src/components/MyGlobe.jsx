import React, { useState, useEffect } from 'react';
import { World } from './ui/Globe';
import '@fontsource/raleway'; // Importing a custom Google font

const colors = [
  '#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#FFD700', '#FF69B4',
  '#00FFFF', '#00FA9A', '#FF4500', '#9400D3', '#8A2BE2', '#00BFFF'
];

const MyGlobe = () => {
  const [globeConfig, setGlobeConfig] = useState({
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
  });

  const [data, setData] = useState([
    // Initial data can be defined here
  ]);

  useEffect(() => {
    fetch('/data/globe.json')
      .then(response => response.json())
      .then(data => {
        // Ensure each data point has a valid color
        const updatedData = data.map(point => ({
          ...point,
          color: colors[Math.floor(Math.random() * colors.length)]
        }));
        setData(updatedData);
      })
      .catch(error => {
        console.error('Error fetching globe data:', error);
      });
  }, []);

  return (
    <div className="relative text-center p-6 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800 animate-wobble font-raleway tracking-wide">
        Providing Healthcare Solutions Around the World
      </h2>
      <div className="flex justify-between items-start">
        <div className="text-left p-6 w-1/4">
          <p className="text-xl font-semibold text-gray-700 mb-4">Global Reach</p>
          <p className="text-l text-gray-600 mb-4">
            Expanding our services to every corner of the globe, ensuring quality healthcare is accessible to everyone.
          </p>
          <p className="text-l text-gray-500 mb-4">
            Our network of healthcare providers spans continents, delivering essential medical services to underserved regions.
          </p>
          <p className="text-l text-gray-500 mb-4">
            We collaborate with local health authorities and international organizations to enhance healthcare infrastructure and train healthcare professionals.
          </p>
          <p className="text-l text-gray-500 mb-4">
            Our outreach programs focus on preventive care, offering vaccinations and health screenings to vulnerable populations.
          </p>
          <p className="text-l text-gray-500 mb-4">
            By integrating advanced technology and telemedicine, we bridge the gap between remote communities and specialized medical expertise.
          </p>
          
        </div>
        <div className="relative" style={{ height: '80vh', width: '50%' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <World globeConfig={globeConfig} data={data} />
          </div>
        </div>
        <div className="text-right p-6 w-1/4">
          <p className="text-xl font-semibold text-gray-700 mb-4">Innovative Solutions</p>
          <p className="text-l text-gray-600 mb-4">
            Leveraging cutting-edge technology to deliver effective and efficient healthcare solutions globally.
          </p>
          <p className="text-l text-gray-500 mb-4">
            Our advanced tools and platforms drive medical research, improve patient outcomes, and streamline healthcare delivery.
          </p>
          <p className="text-l text-gray-500 mb-4">
            We utilize AI-driven diagnostics and predictive analytics to offer personalized treatment plans and optimize resource allocation.
          </p>
          <p className="text-l text-gray-500 mb-4">
            Our telehealth solutions enable remote consultations, making healthcare accessible to patients in remote and underserved areas.
          </p>
          <p className="text-l text-gray-500 mb-4">
            We are pioneering innovations in medical devices and digital health technologies to enhance patient monitoring and care management.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default MyGlobe;
