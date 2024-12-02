import { useState } from 'react';

import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

 const addValue = () => {
  // counter = counter+1;
  console.log(counter);
  // if(counter >= 20) {
  //   return 0;
  // }
  // setCounter((counter)=>counter+1);
  // setCounter((counter)=>counter+1);
  // setCounter((counter)=>counter+1);

  setCounter(counter+1)
  // setCounter(counter+1)

 
 }

 const removeValue = () => {
  // counter = counter+1;
  console.log(counter);
  if(counter <= 0) {
    return 0;
  }
  setCounter(counter-1)

 }


  return (
    <>
    <h1>BASIC HOOKS USED</h1>
    <h2>Counter value = {counter}</h2>
    <button onClick={addValue}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value</button>

    </>
  )
}

export default App
