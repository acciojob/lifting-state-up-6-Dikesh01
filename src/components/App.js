
import React, { useState } from "react";
import './../styles/App.css';

let arr = ["Learn React", "Build a React app", "Deploy the React app"];

const App = () => {
  const [array, setArray] = useState(arr)

  // const handle = (e) =>{
  //   let demo = document.getElementsByClassName(e.target.className)[0].style.display = "none";
  //   console.log(demo[0])
  //   // demo[0].style.display = "none";
  // }
  function handleBtn(index){
    document.getElementById(index).style.display = "none";
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <div >
          <h2 style={{padding:"0 30px"}}>Child Component</h2>
            <ul>
                { array.map((data,index) =>{
                return(
                  <div style={{display:"flex"}} key={index}>
                    <li>{data}</li>
                    {/* <button onClick={handle} className={`element${index}`}>Complete</button>                   */}
                    <button onClick={()=>handleBtn(index)} id={`${index}`}>Complete</button>                  
                  </div>
                )
               }
                  
              )}
            </ul>
        </div>
    </div>
  )
}

export default App
