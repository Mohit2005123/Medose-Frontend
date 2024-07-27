import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';

// Updated dummy data for chats
const chats = {
    'Dr. Smith': [
        { text: 'Hello, how are you feeling today?', type: 'incoming' },
        { text: 'I have a headache and a fever.', type: 'outgoing' },
        { text: 'Have you taken any medication?', type: 'incoming' },
        { text: 'Yes, I took some painkillers.', type: 'outgoing' }
    ],
    'Dr. Johnson': [
        { text: 'Good morning! What can I help you with?', type: 'incoming' },
        { text: 'I have a question about my recent test results.', type: 'outgoing' },
        { text: 'Sure, let me take a look. What seems to be the issue?', type: 'incoming' }
    ],
    'Dr. Lee': [
        { text: 'Hi there! How are you feeling?', type: 'incoming' },
        { text: 'I have a sore throat and a cough.', type: 'outgoing' },
        { text: 'Are you experiencing any other symptoms?', type: 'incoming' }
    ],
    'Dr. Brown': [
        { text: 'Hello! What can I assist you with today?', type: 'incoming' },
        { text: 'I’m feeling very tired and have been experiencing nausea.', type: 'outgoing' },
        { text: 'I recommend you come in for an examination.', type: 'incoming' }
    ],
    'Dr. Patel': [
        { text: 'Hi, how can I help you today?', type: 'incoming' },
        { text: 'I need advice on managing my diabetes.', type: 'outgoing' }
    ],
    'Dr. Davis': [
        { text: 'Hello! What symptoms are you experiencing?', type: 'incoming' },
        { text: 'I’m having trouble sleeping and feel anxious.', type: 'outgoing' }
    ],
    'Dr. Wilson': [
        { text: 'Good afternoon! How are you?', type: 'incoming' },
        { text: 'I have a follow-up question about my treatment plan.', type: 'outgoing' },
        { text: 'I’m here to help. What do you need clarification on?', type: 'incoming' }
    ],
};
const avatarUrl='https://avatar.iran.liara.run/public';
const users = [
    { name: 'Dr. Smith', avatar: avatarUrl, status: 'online' },
    { name: 'Dr. Johnson', avatar: avatarUrl, status: 'offline' },
    { name: 'Dr. Lee', avatar: avatarUrl, status: 'online' },
    { name: 'Dr. Brown', avatar: avatarUrl, status: 'offline' },
    { name: 'Dr. Patel', avatar: avatarUrl, status: 'online' },
    { name: 'Dr. Davis', avatar: avatarUrl, status: 'offline' },
    { name: 'Dr. Wilson', avatar: avatarUrl, status: 'online' },
    { name: 'Dr. Wilson', avatar: avatarUrl, status: 'online' },
    { name: 'Dr. Wilson', avatar: avatarUrl, status: 'online' },
    { name: 'Dr. Wilson', avatar: avatarUrl, status: 'online' },
    { name: 'Dr. Wilson', avatar: avatarUrl, status: 'online' },
];

const ChatComponent = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [message, setMessage] = useState('');

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleSendMessage = () => {
        if (selectedUser && message.trim()) {
            // Add the new message to the chat history
            chats[selectedUser] = [...(chats[selectedUser] || []), { text: message, type: 'outgoing' }];
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
            <MyNavbar />
            <div className="flex flex-1 mt-16 mb-16 mx-8 sm:mx-16 lg:mx-32">
                <div className="w-full md:w-1/4 bg-white p-4 text-gray-800 shadow-lg rounded-lg border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl overflow-y-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-gray-100 text-gray-800 border border-gray-300 rounded-full px-4 py-2 w-full transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <ul>
                        {users.map((user) => (
                            <li
                                key={user.name}
                                className="flex items-center mb-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-50 p-2 rounded-lg"
                                onClick={() => handleUserClick(user.name)}
                            >
                                <img
                                    src={user.avatar}
                                    alt={`${user.name}'s avatar`}
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-blue-300 transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                                <div>
                                    <p className="font-semibold text-lg">{user.name}</p>
                                    <p className={`text-sm ${user.status === 'online' ? 'text-green-500' : 'text-red-500'}`}>
                                        {user.status}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-3/4 bg-white p-4 flex flex-col border-l border-gray-300 shadow-lg rounded-lg">
                    {selectedUser ? (
                        <>
                            <div className="flex-1 overflow-auto mb-4">
                                <h1 className="text-2xl text-gray-800 mb-4 font-semibold">Chat with {selectedUser}</h1>
                                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    {chats[selectedUser] && chats[selectedUser].map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`flex mb-2 ${msg.type === 'incoming' ? 'justify-start' : 'justify-end'}`}
                                        >
                                            <p className={`p-3 rounded-lg ${msg.type === 'incoming' ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'} transition-transform duration-300 ease-in-out hover:scale-105`}>
                                                {msg.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center mt-4 border-t border-gray-200 pt-4">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type a message..."
                                    className="bg-gray-100 text-gray-800 border border-gray-300 rounded-full px-4 py-2 w-full transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="ml-4 p-2 bg-blue-500 text-white rounded-full shadow-md transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-blue-600"
                                >
                                    <FaPaperPlane size={20} />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex-1 flex items-center justify-center text-gray-400">
                            <p>Select a doctor to start a chat</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ChatComponent;

