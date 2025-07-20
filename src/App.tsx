// src/App.tsx
import React from 'react';
import AboutMeCard from './components/AboutMeCard/AboutMeCard';

import './App.css';
import ButtonTabs from './components/ButtonTabs/ButtonTabs';
import CloudBg from './components/CloudBg/CloudBg';



function App() {
  return (
  <>  
    <CloudBg/>
      <div className="main-content-area"> 
        <AboutMeCard />
        <div className="button-tabs">
          <ButtonTabs />
      </div>
  </div>
  </>
  );
}

export default App;