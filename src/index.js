import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import ReviewMain from './components/ReviewScreen/ReviewMain'
import reportWebVitals from './reportWebVitals'
import HomeMain from './components/HomeScreen'
import LoginScreen from './components/LoginScreen/LoginScreen'
import RegisterScreen from './components/LoginScreen/RegisterScreen'
import Welcome from './pages/Welcome'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomeMain />} />
    <Route path="/product" element={<App />} />
    <Route path="/add-review/:id" element={<ReviewMain />} />
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/register" element={<RegisterScreen />} />
    <Route path="/welcome" element={<Welcome />} />
    <Route path='*' element={<h1>404</h1>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
