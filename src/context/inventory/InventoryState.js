import React, { useReducer } from 'react';
import inventoryReducer from './inventoryReducer';
import InventoryContext from './inventoryContext';

import { ADD_ITEM,
REMOVE_ITEM } from '../types';




const InventoryState = props => { 

    const initialState = 
    {   
        name: "Matthew",
        items: [{
            name: "resistor",
            amount: 4,
            location: "bLiving room",
            id: "123"
        },
        {
            name: "capacitors",
            amount: 2,
            location: "aLiving room",
            id: "1234"
        },
        {
            name: "batteries",
            amount: 1,
            location: "cLiving room",
            id: "13"
        }]
    };

    const [state, dispatch] = useReducer(inventoryReducer, initialState);

    //Add item
    const addItem = (newItem)=>{
        dispatch({
            type: ADD_ITEM,
            payload:  newItem
        })
    }
    //remove item
    const removeItem = (id)=>{
        dispatch({
            type: REMOVE_ITEM,
            payload: id
        })
    }
    return (
        <InventoryContext.Provider
        value = {{
            name: state.name,
            items: state.items,
            addItem,
            removeItem
        }}>
            { props.children}
       
        </InventoryContext.Provider>
    )
}

export default InventoryState