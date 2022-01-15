import { useState } from "react"

import {TimerWatch} from "./TimerFunction"
export const Timer =() =>{
 
    const [start,setStart] = useState(false);
    const [data, setData] = useState({
        startTime: "",
        endTime: ""
    });

    const handleChange  = (e) =>{
        let {name,value} = e.target;
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setStart(true);
    }

    return (
        <>
        <h1>Stop Watch</h1>
        <h3 className="fs-5 mb-5">Set Time</h3>

        <div>
            <form onSubmit={handleSubmit} className="input-group">
                <input onChange={handleChange} className="form-control" name ="startTime" type="number" placeholder="Start Time"/>
                
                <input onChange={handleChange} className="form-control" name ="endTime" type="number" placeholder="End Time"/>

                <input type="submit" className="btn btn-success" value={"Start"}/>


            </form>
        </div>

        <div className="main">
            {start ? <TimerWatch start ={data.startTime} end = {data.endTime}/> : null}
        </div>
        </>
    )
}