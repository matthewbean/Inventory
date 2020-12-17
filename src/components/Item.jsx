import React from 'react'

 function Item(props) {
    const { item, removeItem} = props;

    return (
        <li className="item">{item.amount}x {item.name} <button onClick = {()=>removeItem(item.id)}>X</button></li>
    )
}

export default Item