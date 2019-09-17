import React from 'react';
// import ReactCountryFlag from "react-country-flag";

import Map from '../common/Map';
import Header from '../common/Header';
import Footer from '../common/Footer';

import { MainPage_Header, Footer_text } from '../constants/ui'; 

function App() {
  return (
    <>
      <Header text={MainPage_Header}/>
      <Map/>
      <Footer text={Footer_text}/>
    </>
  );
}

export default App;
