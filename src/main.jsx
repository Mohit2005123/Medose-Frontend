// // src/main.jsx or src/index.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import App from './App';
// import './index.css'; // Import Tailwind CSS
// // src/index.js
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import {NextUIProvider} from '@nextui-org/react'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   <NextUIProvider>
//   <App />
//   </NextUIProvider>
   
//   </BrowserRouter>
// );
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
