import React from 'react';
import './App.css';
import Hello from './Hello'

function App({name,age}) {
  return <div> 
          Hy Dear {name}age={age - 1}
          <br/>
          <Hello firstname={name}></Hello>
          </div>
}

export default App;
