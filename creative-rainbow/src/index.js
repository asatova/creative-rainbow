import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import Navbar from './components/navbar/navbar';
import HeroSection from './components/hero-section/hero-section';
import SecondSection from './components/second-section/second-section';
import ToggleButton from './components/navbar/toggle-button/toggle-button';
import reportWebVitals from './reportWebVitals';
import ThirdSection from "./components/third-section/third-section";
import FooterSection from "./components/footer-section/footer-section";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <ToggleButton />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FooterSection />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
