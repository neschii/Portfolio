import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutMeCard from './components/AboutMeCard/AboutMeCard';
import './App.css';
import ButtonTabs from './components/ButtonTabs/ButtonTabs';
import CloudBg from './components/CloudBg/CloudBg';

type BioType = 'default' | 'more' | 'contact';

interface AppProps {
  showMainContent?: boolean;
}

function App({ showMainContent = true }: AppProps) {
  const [activeBio, setActiveBio] = useState<BioType>('default');
  const navigate = useNavigate();

  const handleMore = () => {
    setActiveBio((currentBio) => (currentBio === 'more' ? 'default' : 'more'));
  };
  const handleContact = () => setActiveBio('contact');
  const handleProjects = () => navigate('/projects');

  return (
    <>
      <CloudBg />
      {showMainContent ? (
        <div className="main-content-area">
          <AboutMeCard activeBio={activeBio} />
          <div className="button-tabs">
            <ButtonTabs
              onMore={handleMore}
              onContact={handleContact}
              onProjects={handleProjects}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;