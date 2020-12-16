import React from 'react';
import './App.css';
import Test from './components/Test.jsx';
import Additems from './components/AddItem';


import InventoryState from './context/inventory/InventoryState';



function App() {
  return (
    <InventoryState>
    <div className="App">
      <Additems />
      <Test />
      
    </div>
    </InventoryState>
  );
}

export default App;
