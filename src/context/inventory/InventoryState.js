import React, { useReducer } from 'react';
import inventoryReducer from './inventoryReducer';
import InventoryContext from './inventoryContext';

import { ADD_ITEM } from '../types';




const InventoryState = props => { 

    const initialState = 
    {   
        name: "Matthew",
        items: [{
            name: "resistor",
            amount: 4,
            location: "Living room"
        },
        {
            name: "capacitors",
            amount: 2,
            location: "Living room"
        },
        {
            name: "batteries",
            amount: 1,
            location: "Living room"
        }]
    };

    const [state, dispatch] = useReducer(inventoryReducer, initialState);

    //Add item
    const addItem = (newItem)=>{
        dispatch({
            type: ADD_ITEM,
            payload: newItem
        })
    }
    return (
        <InventoryContext.Provider
        value = {{
            name: state.name,
            items: state.items,
            addItem
        }}>
            { props.children}
       
        </InventoryContext.Provider>
    )
}

export default InventoryState