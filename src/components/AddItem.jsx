import React, { useState, useContext } from 'react';
import InventoryContext from '../context/inventory/inventoryContext';
import { v4 as uuidv4 } from 'uuid';


function Additem(props) {
   
    const inventoryContext = useContext(InventoryContext);
    const { name, addItem } = inventoryContext;
    const firstID = uuidv4();
    const [state, setState] = useState({
        name: "",
        amount: 0,
        location: "",
        id: firstID
    })

    const onChange = e=> setState({ ...state, [e.target.name]: e.target.value });
    const onSubmit = e=> {
        e.preventDefault();
        let newItem = {...state};
        if (newItem.location.length === 0) {
            newItem.location = "N/A";
        }
        addItem(newItem);
        setState({...state, name: "", amount: 0, location: "", id: uuidv4()})
        
    }

    return (
        <div>
            <form onSubmit = {onSubmit} className = "col-sm">
            <input 
            className = ""
            type = "number" 
            placeholder = "amount" 
            name = "amount"
            value = {state.amount}
            onChange = {onChange} />
                  <input 
            className = ""
            type = "text" 
            placeholder = "New Item" 
            name = "name"
            value = {state.name}
            onChange = {onChange} />
            <input 
            className = ""
            type = "text" 
            placeholder = "Location" 
            name = "location"
            value = {state.location}
            onChange = {onChange} />
          
            <input type = "submit"
            value = {"Add Item"}
            className = "btn btn-primary m-auto"
            />
            </form>
           
        </div>
    )
}

export default Additem
