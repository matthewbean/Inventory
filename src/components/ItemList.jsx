import React, { useContext } from 'react';
import InventoryContext from '../context/inventory/inventoryContext';
import Item from './Item';

function Test(props) {
    const inventoryContext = useContext(InventoryContext);
    
    const { name, items, removeItem } = inventoryContext;

    const categories = items.filter((item, pos, ary)=>{
        return !pos || item.location != ary[pos -1].location;
    }).map((item)=>item.location);



    return (
        <div>
        <h1>
            This is a test! Hi {name}
         </h1>
         {categories.map((item)=>(
             <div>
             <h1>{item}</h1>
             <ul>
             {items.filter((object)=>object.location === item).map((item)=>(
                <Item item = {item} removeItem = {removeItem}></Item>
            ))}
             </ul>
             </div>
         ))}
         <ul>
             

            
        </ul>
        </div>    
        
    )
}
export default Test