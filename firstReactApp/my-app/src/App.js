import logo from './logo.svg';
import './App.css';
import {useState} from'react'


function handleEvent(){
  alert("You Clicked Me !!!");
}
function Button(){
  return <button className="button" onClick={handleEvent}>Haven't Studied Props Yet </button>
}


const user={
  name:"Younas Faisal",
  age:20,
  occupation:"Web Dev Intern"
}

let list=[
  {
title:"Apple",
fruit:true,
  },{
    title:"Car",
    fruit:false,
  },
  {
    title:"Laptop",
fruit:!true,
  }
]


function App() {
  let [press,setPress]=useState(0);
  return (
    <div className="App">
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Practicing React
         <br/><br/> 
         Name :- {user.name}
         <br/>
         Age :- {user.age}
         <br/>
         Occupation :- {user.occupation}
         <br/>
         <br/>
          <Button/> 
<br/><br/>
          <button className='button' onClick={()=>{
            setPress(press+1);
          }}> Click To Add !</button>
          <p>
          {press}
        </p>
        <button className='button' onClick={()=>{
            setPress(press-1);
          }}> Click To Subtract !</button>
        
        </p>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>{list.map((product)=>{
            return(
              <li style={{color: product.fruit? 'red' : 'black',
                margin:'10px'
              }}>
                {product.title}
              </li>
            )
          })}</ul>
      </header>
    </div>
  );
}

export default App;
