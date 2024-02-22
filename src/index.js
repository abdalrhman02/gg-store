import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Translation Framework
import './i18n';

// Pages Files
import Home from './Pages/Home';

// Styles Files
import './Styles/all.min.css'
import './Styles/Global-Rules/global-rules.css';
import './Styles/HomePage/home.css';

// Components Styles Files
import './Components/Components-style/Header/header.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
