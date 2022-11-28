import './App.css';
import {  useReducer } from 'react';

  const reducer=({ state })=>{
    switch (state) {
      case 'PRESSED_ONCE':
        return {
          state: 'PRESSED_TWO'
        }
      case 'PRESSED_TWO':
        return {
          state: 'PRESSED_THREE'
        }
  
      case 'PRESSED_THREE':
        return {
          state: 'PRESSED_ONCE'
        }
    }
  }
  const Button =(props)=>{
    const [state,dispatch]=useReducer(reducer,{state:'PRESSED_ONCE'})
    console.log(state)
  return (
  <>
  <div className="m1" style={{color:props.color,textDecoration:props.underline?'underline':undefined}}>
    <button className="m1" onClick={()=>dispatch()}>I am Button</button>
    <p>{state.state}</p>
  </div>
  </>)
}
function App() {

  return (
    <>
<div className='col full flexAIC p4'>
<Button color="blue"/>
<Button color="green"/>
<Button color="red"/>
</div>
    </>
  );
}

export default App;
