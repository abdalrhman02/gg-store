import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Translation framework
import './i18n';

// Pages
import Home from './Pages/Home';
import Store from './Pages/Store';
import Questions from './Pages/Q&A';
import Buyers from './Pages/Buyers';
import GameBoySup from './Pages/ProductsPages/GameBoySup';
import GameStickLite from './Pages/ProductsPages/GameStickLite';

  
// Pages Style Files
import './Styles/homePage/home.css';
import './Styles/StorePage/storePage.css';
import './Styles/Q&A/q&a.css';
import './Styles/buyersPage/buyers.css';

// Components Style Files
import './Components_Style/Header/header.css';
import './Components_Style/Footer/footer.css';
import './Components_Style/LanguageSelector/languageSelector.css';
import './Components_Style/productCard/productCard.css';
import './Components_Style/ProductPage/productPage.css';

// Other Main Style Files
import './Styles/GlobalRules/globalRules.css';
import './Styles/all.min.css';


// Fonts
import './Fonts/Retro Gaming.ttf';
import './Fonts/ArabicPixel.ttf';

// For Routering
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <Home />,},
  {path: "/gg-store", element: <Home />,},
  {path: "Store", element: <Store />, },
  {path: "Q&A", element: <Questions />, },
  {path: "Buyers", element: <Buyers />, },
  {path: "GameBoySup", element: <GameBoySup />, },
  {path: "GameStickLite", element: <GameStickLite />, },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
