import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Date from './pages/Date/Date';
import Math from './pages/Math/Math';
import Year from './pages/Year/Year';
import Footer from './components/Footer/Footer';

import './styles/global.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <Home />
          <Date />
          <Math />
          <Year />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
