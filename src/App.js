import './App.css';
import { Landing, FixedNav, StickyNav, Projects, Footer, Loading } from './components/';
import { currentPortfolio, currentSocials, aboutMe, name } from './info';
import { stairways, waterfall, flowers } from './assets';
import { useState } from 'react';

function App() {

  const [loaded, setLoaded] = useState(true);
  const IMAGES = [stairways, waterfall];

  return (
    <>
      {loaded ? <>
        <FixedNav hide />
        <Landing name={name} imgs={IMAGES} />
        <StickyNav socials={currentSocials} />
        <Projects portfolio={currentPortfolio} />
        <Footer img={flowers} text={aboutMe} name={name} />
      </> : <>  
        <Loading setLoaded={setLoaded} />
      </>}
    </>
  );
}

export default App;
