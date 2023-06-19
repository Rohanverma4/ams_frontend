import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='loginPage'>
        <div className='mainWrapper'>
          <div  className='container'> <FontAwesomeIcon icon={faCoffee} /></div>
        </div>
      </div>
      </div>
  );
}

export default App;
