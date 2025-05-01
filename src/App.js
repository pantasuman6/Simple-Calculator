
import React, { useState } from 'react';

import './App.css';

function App() {

  
    const [input, setInput] = useState("")
//onclick on number 1, it should be shown in the input field
//split method
//Number function
function handlebuttonclick(value){
console.log("x", value) 
setInput(input + value)


}
function calculate() {
    console.log("calculate", input)
    if (input =="") {
    return;   //tells the function to stop.

    }

   
    
    //console.log("result", result)
    

   // let sum = 0
    if (input.includes("+")){
      let result = input.split("+")
      if(result.length==1){
        return
      }

      var sum =0;
      for (let i=0; i<result.length; i++) {
        sum=sum+Number(result[i])
      }
       //var sum = Number(result[0])+ Number(result[1])
    }
   
    if (input.includes("-")){
      let result= input.split("-")
      if(result.length==1){
        return
      }
      var sum = Number(result[0]);

      for (let i=1; i<result.length; i++) {
        sum=sum-Number(result[i])

      }
      //var sum = Number(result[0])- Number(result[1])
       }

      if (input.includes("*")){

        let result= input.split("*")
        if(result.length==1){
          return
        }

        var sum=Number(result[0]);
      for (let i=1;i<result.length; i++){

        sum= sum*Number(result[i])
      }
        //var sum = Number(result[0])* Number(result[1])
         }
  
        if (input.includes("/")){
          let result= input.split("/")
          if(result.length==1){
            return
          }

          var sum =Number(result[0]);
          for(let i=1; i<result.length; i++){
            sum=sum/Number(result[i])
          }
         // var sum = Number(result[0])/ Number(result[1]) 
        }
    

      setInput(sum)
      
}

function clear() {

  setInput("");
}

  return (
    <div className="app">

<h1>Calculator</h1>
      <div id="cal">
        <input type="text" value={input} placeholder='Please Enter Value'/>
        <div>
            <button onClick={()=>handlebuttonclick("1")}>1</button>
            <button onClick={()=>handlebuttonclick("2")}>2</button>
            <button onClick={()=>handlebuttonclick("3")}>3</button>
            
        </div>
        <div>
            <button onClick={()=>handlebuttonclick("4")}>4</button>
            <button onClick={()=>handlebuttonclick("5")}>5</button>
            <button onClick={()=>handlebuttonclick("6")}>6</button>
            
        </div>
        <div>
            <button onClick={()=>handlebuttonclick("7")}>7</button>
            <button onClick={()=>handlebuttonclick("8")}>8</button>
            <button onClick={()=>handlebuttonclick("9")}>9</button>
            
        </div>
        <div>
            <button onClick={()=>handlebuttonclick("0")}>0</button>
            <button onClick={()=>handlebuttonclick("+")}>+</button>
            <button onClick={()=>handlebuttonclick("-")}>-</button>
            
            
        </div>

        <div>
            <button onClick={()=>handlebuttonclick("*")}>*</button>
            <button onClick={()=>handlebuttonclick("/")}>/</button>
            <button onClick={()=>calculate("=")}>=</button>
            <button onClick={clear}>c</button>
            
        </div>

      </div>
    </div>
  );
}

export default App;
