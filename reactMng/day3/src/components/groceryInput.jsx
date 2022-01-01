import React, {useState} from 'react'

import "./styles/groceryInput.css"

const GroceryInput = ({getInput}) => {

    const [inputText, setInputText] = useState("")
    const [inputNum, setInputNum] = useState(0)


    const handleInput = () => {
        if(!inputText || !inputNum) {
            alert("Please Fill Required Item")
            return
        }
            getInput(inputText,inputNum)
            setInputText("")
            setInputNum(0)
    }

    return (
        <>
        <div className='main'>
        <div className='input-box'>
            <h2>Item Name</h2>
            <input className='input' type="text" placeholder='Enter Grocery Items' value={inputText} onChange={(e) =>setInputText(e.target.value)}/>
            <h2>Quantity</h2>
            <input className='text2' type="number" placeholder='Quantity' value={inputNum} onChange={(e) =>setInputNum(e.target.value)}/>
            <button className='save' onClick={handleInput}>Save</button>
        </div>
        </div>
            
        </>
    )
}

export default GroceryInput