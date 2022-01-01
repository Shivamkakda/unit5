import React from 'react'
import "./styles/groceryList.css"

const GroceryList = ({curdata, deleteItem}) => {

    let {title, status, id} = curdata

    

    return (
        <>
            <div className='items'>
                <div>{title}</div>
                <button className='btn' onClick={() => deleteItem(id)}>Remove</button>
            </div>
        </>
    )
}

export default GroceryList