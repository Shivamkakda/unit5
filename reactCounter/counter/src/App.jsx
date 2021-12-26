import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


//ye function return krega jo bhi hum isme krenge
function App() {
  const [ count , setCount] = useState(0) // ye array ki form me variable isliye rakhte h taki function keep eye on it that and return the updated value to the function
  //isme first variable second is function to keep update userstate is initial value of variable
  const changeValue = (value) =>{
      setCount(count+ value);
  }
  const changeValueby = (num) =>{
   
      setCount(count* num);
    
  }
  return (
    <div className="App"> 
     <h3 className='text1'> Counter: {count}</h3>
      
     <button className="btn" onClick ={() => changeValue(1)}>Add</button>
     <button className="btn" onClick ={() => changeValue(-1)}>Sub</button>
     <button className="btn" onClick ={ () =>changeValueby(2)}>Mul</button>
     <div>
     <button className="btn" onClick ={ () =>changeValueby(0)}>Reset</button>
     </div>
    </div>
  );
}

export default App;
