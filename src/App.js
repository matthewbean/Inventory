import React from 'react';
import './App.css';
import ItemList from './components/ItemList.jsx';
import Additems from './components/AddItem';


import InventoryState from './context/inventory/InventoryState';



function App() {
  return (
    <InventoryState>
    <div className="App">
      <Additems />
      <ItemList />
    </div>
    </InventoryState>
  );
}

export default App;
