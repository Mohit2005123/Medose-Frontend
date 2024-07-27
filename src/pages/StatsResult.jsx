import React, { useState, useEffect } from "react";
import HealthStatsChart from '../components/HealthStatsChart';
import Navbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
import { Puff } from 'react-loader-spinner';

const healthData = [
  [
    { time: "2023-01-01 08:00", value: 98.6, label: "Body Temperature" },
    { time: "2023-01-02 08:00", value: 98.7, label: "Body Temperature" },
    { time: "2023-01-03 08:00", value: 98.4, label: "Body Temperature" },
    { time: "2023-01-04 08:00", value: 98.5, label: "Body Temperature" },
    { time: "2023-01-05 08:00", value: 98.6, label: "Body Temperature" },
    { time: "2023-01-06 08:00", value: 98.8, label: "Body Temperature" },
    { time: "2023-01-07 08:00", value: 98.7, label: "Body Temperature" },
  ],
  [
    { time: "2023-01-01 09:00", value: 120, label: "Blood Pressure" },
    { time: "2023-01-02 09:00", value: 118, label: "Blood Pressure" },
    { time: "2023-01-03 09:00", value: 115, label: "Blood Pressure" },
    { time: "2023-01-04 09:00", value: 116, label: "Blood Pressure" },
    { time: "2023-01-05 09:00", value: 119, label: "Blood Pressure" },
    { time: "2023-01-06 09:00", value: 117, label: "Blood Pressure" },
    { time: "2023-01-07 09:00", value: 120, label: "Blood Pressure" },
  ],
  [
    { time: "2023-01-01 10:00", value: 90, label: "Blood Sugar" },
    { time: "2023-01-02 10:00", value: 92, label: "Blood Sugar" },
    { time: "2023-01-03 10:00", value: 89, label: "Blood Sugar" },
    { time: "2023-01-04 10:00", value: 91, label: "Blood Sugar" },
    { time: "2023-01-05 10:00", value: 93, label: "Blood Sugar" },
    { time: "2023-01-06 10:00", value: 94, label: "Blood Sugar" },
    { time: "2023-01-07 10:00", value: 90, label: "Blood Sugar" },
  ],
];

function StatsResult() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or chart rendering delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust timeout as needed
  }, []);

  const exportPDF = () => {
    const input = document.getElementById('charts-container');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('charts.pdf');
    });
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-12">
        <Fade direction="up">
          <h1 className="text-5xl font-bold text-center text-blue-900 mb-4 animate-pulse">
            Health Record Stats
          </h1>
          <div className="text-center text-gray-700 mb-8">
            <Typewriter
              words={[
                "Track your health metrics effortlessly.",
                "Get insights into your wellness trends.",
                "Optimize your health with our tools.",
                "Empower your well-being with data."
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </div>
        </Fade>
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <Puff
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} // Adjust timeout as needed
              />
            </div>
          ) : (
            <>
              <Fade direction="up">
                <h2 className="text-4xl font-semibold text-blue-800 mb-6">Reports Data</h2>
                <button
                  onClick={exportPDF}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg mb-6 shadow-lg transition duration-300 transform hover:-translate-y-1"
                >
                  Export to PDF
                </button>
                <div id="charts-container" className="min-h-96">
                  <HealthStatsChart data={healthData} />
                </div>
              </Fade>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StatsResult;

