import trumpet from './images/trumpet.svg';
import bass_drum from './images/bass_drum.svg';
import guitar from './images/guitar.svg';
import saxophone from './images/saxophone.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import useScript from './hooks/useScript';


function App() {
  useScript('./components/slide.js');
  return (
    <div className="App"> 
      <header className="App-header" >
        <div id="Fader">
          <img src={trumpet} className="App-logo" alt="logo" />
          <img src={bass_drum} className="App-logo" alt="logo" />
          <img src={guitar} className="App-logo" alt="logo" />
          <img src={saxophone} className="App-logo" alt="logo" />
        </div>
        <div>
          <p> 
            Bander
          </p>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
  // return transitions.map(({ item, props, key }) => (
    
  //   <animated.div
  //   key={key}
  //   class="App-logo"
  //   style={{ ...props, backgroundImage: `url(${item.url})` }}
  // />
    
  // ));
}

export default App;
