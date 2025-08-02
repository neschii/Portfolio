import React, { useState } from 'react';
import AboutMeCard from './components/AboutMeCard/AboutMeCard';
import './App.css';
import ButtonTabs from './components/ButtonTabs/ButtonTabs';
import CloudBg from './components/CloudBg/CloudBg';

type BioType = 'default' | 'more' | 'contact';

function App() {
  const [activeBio, setActiveBio] = useState<BioType>('default');

  const handleMore = () => setActiveBio('more');
  const handleContact = () => setActiveBio('contact');
  const handleDefault = () => setActiveBio('default');

  return (
    <>
      <CloudBg />
      <div className="main-content-area">
        <AboutMeCard activeBio={activeBio} />
        <div className="button-tabs">
          <ButtonTabs
            onMore={handleMore}
            onContact={handleContact}
            onDefault={handleDefault}
          />
        </div>
      </div>
    </>
  );
}

export default App;