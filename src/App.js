import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MyLogoWhatever from './images/pic1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={MyLogoWhatever} />
      <Footer />
    </div>
  );
}

export default App;