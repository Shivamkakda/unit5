import React,{useState} from 'react'
import GroceryInput from './groceryInput'
import GroceryList from './groceryList'
import { nanoid } from 'nanoid'
import "./styles/grocery.css"



const getLocal = () => {
        let Data = localStorage.getItem("Grocery")

        if(Data) {
            return JSON.parse(Data)
        }else {
            return []
        }
}

const Grocery = () => {


    const [list, setList] = useState(getLocal())

    const handleInput = (data) => {

        const payload = {
            title : data,
            status : false,
            id : nanoid(0)
        }


        setList([...list, payload])
        localStorage.setItem("Grocery", JSON.stringify([...list, payload]))
    }

   const handledelete = (id) => {
        const updatedList = list.filter((currentEle) => {
            return currentEle.id !== id
        })

        setList(updatedList)
        localStorage.setItem("Grocery", JSON.stringify(updatedList))

   }


    
    return (
        <>
        <h1 className='text1'>Grocery Items List</h1>

        <GroceryInput getInput={handleInput}/>

        <div className='Maindata'>

        {
            list.map((currentEle) => (

                <GroceryList key={currentEle.id} curdata={currentEle} deleteItem={handledelete}/>
            ))
        }

        </div>
        </>
    )
}

export default Grocery