import React, { useReducer } from 'react';
import inventoryReducer from './inventoryReducer';
import InventoryContext from './inventoryContext';




const InventoryState = props => { 

    const initialState = 
    {   
        name: "Matthew"
    };

    const [state, dispatch] = useReducer(inventoryReducer, initialState);

    return (
        <InventoryContext.Provider
        value = {{
            name: state.name
        }}>
            { props.children}
       
        </InventoryContext.Provider>
    )
}

export default InventoryState