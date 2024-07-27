// src/components/HealthInputModal.js
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Input, TimeInput } from "@nextui-org/react";
import { DateInput } from "@nextui-org/date-input";
import { FaTemperatureHigh, FaHeartbeat, FaTint, FaClock, FaProcedures, FaCalendarAlt } from 'react-icons/fa';
import { CalendarDate, parseDate } from "@internationalized/date";
const HealthInputModal = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        bodyTemperature: "",
        bloodSugar: "",
        measurementTime: "",
        heartRate: "",
        bloodPressure: "",
        oxygenSaturation: "",
        oxygenSaturationTime: "",
        measurementDate: new Date().toISOString().split('T')[0], // Initialize with a date string in YYYY-MM-DD format
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (value) => {
        setFormData({ ...formData, measurementDate: value.toISOString().split('T')[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        onClose(); // Close the modal after submission
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center py-4 rounded-t-lg">
                Enter Health Parameters
            </DialogTitle>
            <DialogContent className="bg-gray-100 p-6 rounded-b-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center mb-4">
                        <FaTemperatureHigh className="text-green-500 mr-2" />
                        <Input
                            fullWidth
                            clearable
                            label="Body Temperature (°C)"
                            name="bodyTemperature"
                            value={formData.bodyTemperature}
                            onChange={handleChange}
                            type="number"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <FaTint className="text-blue-500 mr-2" />
                        <Input
                            fullWidth
                            clearable
                            label="Blood Sugar (mg/dL)"
                            name="bloodSugar"
                            value={formData.bloodSugar}
                            onChange={handleChange}
                            type="number"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <FaClock className="text-purple-500 mr-2" />
                        <TimeInput
                            fullWidth
                            clearable
                            label="Measurement Time"
                            name="measurementTime"
                            value={formData.measurementTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <FaHeartbeat className="text-red-500 mr-2" />
                        <Input
                            fullWidth
                            clearable
                            label="Heart Rate (bpm)"
                            name="heartRate"
                            value={formData.heartRate}
                            onChange={handleChange}
                            type="number"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <FaProcedures className="text-yellow-500 mr-2" />
                        <Input
                            fullWidth
                            clearable
                            label="Blood Pressure (mmHg)"
                            name="bloodPressure"
                            value={formData.bloodPressure}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <FaTint className="text-teal-500 mr-2" />
                        <Input
                            fullWidth
                            clearable
                            label="Oxygen Saturation (%)"
                            name="oxygenSaturation"
                            value={formData.oxygenSaturation}
                            onChange={handleChange}
                            type="number"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <FaClock className="text-teal-500 mr-2" />
                        <TimeInput
                            fullWidth
                            clearable
                            label="Measuring Time"
                            name="oxygenSaturationTime"
                            value={formData.oxygenSaturationTime}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <FaCalendarAlt className="text-orange-500 mr-2" />
                        <DateInput
                            label={"Measure Date"}
                            isRequired
                            defaultValue={parseDate("2024-04-04")}
                            placeholderValue={new CalendarDate(1995, 11, 6)}
                        />
                    </div>
                    {/* Add more input fields as needed */}
                </form>
            </DialogContent>
            <DialogActions className="bg-gray-200 p-4 rounded-b-lg">
                <Button onClick={onClose} color="secondary" className="text-gray-700 bg-gray-300 hover:bg-gray-400">
                    Cancel
                </Button>
                <Button type="submit" color="primary" onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white">
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default HealthInputModal;
