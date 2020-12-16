import React, { useState, useContext } from 'react';
import InventoryContext from '../context/inventory/inventoryContext';

function Additem(props) {
    const inventoryContext = useContext(InventoryContext);
    const { name, addItem } = inventoryContext;
    const [state, setState] = useState({
        name: "",
        amount: 0,
        location: ""
    })
    const onChange = e=> setState({ ...state, [e.target.name]: e.target.value });
    const onSubmit = e=> {
        e.preventDefault();
        addItem(state);
        setState({...state, name: "", amount: 0, location: ""})
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
            value = {"Add Food"}
            className = "btn btn-primary m-auto"
            />
            </form>
           
        </div>
    )
}

export default Additem
