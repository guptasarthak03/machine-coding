import React from 'react';
import Countdown from './projects/Countdown';
import './styles.css';
import Modal from './containers/Modal';

function App() {
  return (
    <div className='container'>
      <h2 className='container--heading'>Machine Coding</h2>
      <div className='container--main'>
        <Modal>
          <Countdown />
        </Modal>
      </div>
    </div>
  );
}

export default App;
