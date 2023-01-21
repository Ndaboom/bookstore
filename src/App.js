import React, { memo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import HomePage from './components/homePage';
import CategoriesPage from './components/categoriesPage';

const App = memo(() => (
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
));
App.displayName = 'Books Store';
export default App;
