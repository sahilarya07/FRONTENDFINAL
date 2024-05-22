
import React from 'react';
import Footer from './components/Footer.jsx';
import Section1 from './components/Section1.jsx';
import Header from './components/Header.jsx';
import Nowplaying from './components/Nowplaying.jsx';
import Box from './components/Box.jsx';
import BottomSection from './components/BottomSection.jsx';
import Advertisement from './components/Advertisment.jsx';
import Bottomright from './components/Bottomright.jsx';
import FacebookBottom from './components/FacebookBottom.jsx';
import Twitter from './components/Twitter.jsx';
import Performer from './components/Performer.jsx';
import Ringtone from './components/Ringtone.jsx';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      <Section1 />
      <Box/>
      <Nowplaying/>
      <BottomSection/>
      <Advertisement/>
      <Bottomright/>
      <FacebookBottom/>
      <Twitter/>
      <Performer/>
      <Ringtone/>
      <Footer/>
  
      

    </div>
  );
}

export default App;
