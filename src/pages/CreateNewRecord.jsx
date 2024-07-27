// src/components/CreateNewRecord.js
import React, { useState } from 'react';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import { Checkbox } from "@nextui-org/checkbox";

const healthParams = [
    "Body Temperature",
    "Blood Sugar",
    "Heart Rate",
    "Blood Pressure",
    "Oxygen Saturation",
    "Cholesterol",
    "Blood Oxygen Level",
    "Respiratory Rate",
    "Blood pH",
    "Electrolytes",
    "Hemoglobin",
    "White Blood Cell Count",
    "Platelet Count",
    "Liver Function",
    "Kidney Function",
    "Urine Output",
    "Electrolyte Balance",
    "Vitamin D Level",
    "Calcium Level",
    "Magnesium Level",
    "Iron Level",
    "Thyroid Function",
    "Vitamin B12 Level",
    "Fasting Glucose",
    "Insulin Level",
];

const CreateNewRecord = () => {
    const [name, setName] = useState("");
    const [selectedParams, setSelectedParams] = useState([]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCheckboxChange = (param, checked) => {
        setSelectedParams(prev =>
            checked ? [...prev, param] : prev.filter(p => p !== param)
        );
    };

    const handleLabelClick = (param) => {
        const isCurrentlySelected = selectedParams.includes(param);
        handleCheckboxChange(param, !isCurrentlySelected);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Name:", name);
        console.log("Selected Health Parameters:", selectedParams);
        // Add your form submission logic here
    };

    return (
        <div className="bg-gradient-to-r from-blue-50 via-green-50 to-white min-h-screen flex flex-col">
            <MyNavbar />
            <main className="flex-grow p-6">
                <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                    <h2 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
                        Create New Record
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-8 p-8">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-xl font-medium text-gray-800 mb-2">
                                Record Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-300 ease-in-out"
                                required
                            />
                        </div>
                        <fieldset className="mb-6">
                            <legend className="block text-xl font-medium text-gray-800 mb-2">Health Parameters</legend>
                            <div className="space-y-4">
                                {healthParams.map(param => (
                                    <div key={param} className="flex items-center space-x-3 transition-transform transform hover:scale-105 duration-200 ease-in-out">
                                        <Checkbox
                                            isSelected={selectedParams.includes(param)}
                                            onChange={(e) => handleCheckboxChange(param, e.target.checked)}
                                            color="primary"
                                            size="lg"
                                            id={param}
                                        />
                                        <label
                                            htmlFor={param}
                                            className="text-base text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-300 ease-in-out"
                                            onClick={() => handleLabelClick(param)}
                                        >
                                            {param}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 ease-in-out"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CreateNewRecord;
