import React, { useContext } from 'react';
import InventoryContext from '../context/inventory/inventoryContext';

function Test(props) {
    const inventoryContext = useContext(InventoryContext);
    const { name, items } = inventoryContext;

    return (
        <div>
        <h1>
            This is a test! Hi {name}
         </h1>
         <ul>
            {items.map((item)=>(
                <li className="item">{item.amount}x {item.name}</li>
            ))}
        </ul>
        </div>    
        
    )
}
export default Test