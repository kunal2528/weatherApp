import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Footer from './components/Footer';
import Api from './components/Api';

function App() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await Api('Mumbai');
    setCity(res);
  }

  return (
    <div className="App">
      <Header city = {city} />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
