import React, { useState} from 'react';
import Gallery from './scenes/Gallery';
import Modal from './components/Modal'
import './App.css';

function App() {
  const [ modalDisplay, setModalDisplay ] = useState();
  return (
    <div className="App">
      <Gallery setModalDisplay={setModalDisplay} />
      <Modal 
        modalDisplay={modalDisplay}
        setModalDisplay={setModalDisplay}
      />
    </div>
  );
}

export default App;
