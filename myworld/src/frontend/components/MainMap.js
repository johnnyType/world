import React from 'react';
import styled from 'styled-components';

import Map from '../common/Map';
import Header from '../common/Header';
import Footer from '../common/Footer';
import RightPanel from '../common/RightPanel';

import { MainPage_Header, Footer_text } from '../constants/ui'; 

const Section = styled.div`
      box-sizing: border-box;
      width: 100%;
      margin-left: 0;
      display: flex;
      // justify-content: space-between;
  `;

function App() {
  return (
    <>
      <Header text={MainPage_Header}/>
      <Section>
        <Map/>
        <RightPanel/>
      </Section>
      <Footer text={Footer_text}/>
    </>
  );
}

export default App;
