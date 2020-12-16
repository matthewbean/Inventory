import React, { useContext } from 'react';
import InventoryContext from './context/inventory/inventoryContext';

function Test(props) {
    const inventoryContext = useContext(InventoryContext);
    const { name } = inventoryContext;

    return (
        <h1>
            This is a test! Hi {name}
            
        </h1>
    )
}
export default Test