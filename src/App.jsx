import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import HealthStatsProject from './pages/HealthStatsProject';
import StatsResult from './pages/StatsResult';
import CreateNewRecord from './pages/CreateNewRecord';
import ChatComponent from './pages/ChatComponent';
import Appointments from './pages/Appointments';
import Blog from './pages/Blog';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/healthrecords" element={<HealthStatsProject />} />
        <Route path="/statsresult" element={<StatsResult />} />
        <Route path='/createnewrecord' element={<CreateNewRecord></CreateNewRecord>} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/chats" element={<ChatComponent />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;

