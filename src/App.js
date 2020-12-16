import React from 'react';
import './App.css';
import Test from './Test.jsx';

import InventoryState from './context/inventory/InventoryState';


function App() {
  return (
    <InventoryState>
    <div className="App">

      <Test />
      
    </div>
    </InventoryState>
  );
}

export default App;
