import Navbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import HealthInputModal from "../components/HealthInputModal";

const rows = Array.from({ length: 15 }, (_, index) => ({
    key: (index + 1).toString(),
    projectName: `Record ${index + 1}.0`,
    action: "Export as PDF",
    statusUpdate: "/statsresult",
}));

const columns = [
    {
        key: "projectName",
        label: "Project Name",
    },
    {
        key: "action",
        label: "Action",
    },
    {
        key: "statusUpdate",
        label: "Status Update",
    },
    {
        key: "addEntry",
        label: "Add Entry",
    },
];

function HealthStatsProject() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto py-8 px-4">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4 transition-transform transform hover:scale-105">
                        Health Record Stats
                    </h1>
                    <div className="text-gray-600 font-mono mb-6">
                        <Typewriter
                            words={["Manage and visualize your healthcare projects with ease."]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-semibold text-blue-800">Reports Data</h2>
                        <Link to='/createnewrecord'>
                        <button
                            
                            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 animate-pulse"
                        >
                            Create New Project
                        </button>
                        </Link>
                        
                    </div>
                    <p className="text-lg text-gray-700 mb-4">View and interact with the latest reports.</p>
                    <Table aria-label="Example table with dynamic content">
                        <TableHeader columns={columns}>
                            {(column) => (
                                <TableColumn key={column.key} className="bg-blue-100 text-blue-700 font-semibold">
                                    {column.label}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={rows}>
                            {(item) => (
                                <TableRow key={item.key} className="hover:bg-blue-50 transition-colors duration-300">
                                    {(columnKey) => (
                                        <TableCell className="p-4">
                                            {columnKey === "action" ? (
                                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105">
                                                    {getKeyValue(item, columnKey)}
                                                </button>
                                            ) : columnKey === "statusUpdate" ? (
                                                <Link
                                                    to={getKeyValue(item, columnKey)}
                                                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 inline-block"
                                                >
                                                    Visualize Data
                                                </Link>
                                            ) : columnKey === "addEntry" ? (
                                                <button
                                                    onClick={handleOpenModal}
                                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105"
                                                >
                                                    Add Entry
                                                    {getKeyValue(item, columnKey)}
                                                </button>
                                            ) : (
                                                getKeyValue(item, columnKey)
                                            )}
                                        </TableCell>
                                    )}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div> 
            </div>
            <Footer />
            <HealthInputModal open={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default HealthStatsProject;
