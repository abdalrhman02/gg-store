import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Translation Framework
import './i18n';

// Pages Files
import Home from './Pages/Home';
import Store from './Pages/Store';
import ProductPage from './Pages/ProductPage';

// Styles Files
import './Styles/all.min.css'
import './Styles/Global-Rules/global-rules.css';
import './Styles/HomePage/home.css';
import './Styles/Store/store.css';
import './Styles/ProductPage/productPage.css'

// Components Styles Files
import './Components/Components-style/Header/header.css';
import './Components/Components-style/Footer/footer.css';
import './Components/Components-style/Product-Card/productCard.css';
import './Components/Components-style/MainTitle/mainTitle.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "Store", element: <Store />, },
  { path: "product/:id", element: <ProductPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
