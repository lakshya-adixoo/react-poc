// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// function App() {


//   //Code of counter 

//   // const [count , setCount] = useState(0);

//   //  function increase(){
//   //     setCount(count+1);
//   //  }

//   //  function decrease(){
//   //   if(count >0){
//   //     setCount(count-1);
//   //   }
//   //   else{
//   //     alert("Counter cannot less than 0")
//   //   }
//   //    }
  
//   // return (
//   //   <>
//   //   <div>
//   //     counter : {count}
//   //     <button onClick={increase}>Increase count</button>
//   //     <button onClick={decrease}>Decrease count</button>
//   //   </div>
//   //   </>
//   // )


//   //code for data fetching from an api

//   // const [data , setData] = useState([]);

//   // useEffect(()=>{

//   //    axios.get('https://jsonplaceholder.typicode.com/posts')
//   //   .then(response => setData(response.data))
     
//   // },[])


//   // return (
//   //   <>
//   //   <h1>Data from API</h1>
//   //   <ul>
//   //       {data.map((item) => (
//   //         <li key={item.id}>{item.title}</li> 
//   //       ))}
//   //     </ul>
//   //   </>
//   // )

// //   function getData(val){
// //       console.log(val.target.value)
// //   }
  
// //  return (
// //   <>
// //   <input onChange={getData}></input>
// //   </>
// //  )


// function clickButton(){
//   alert("hello world")
// }

// return (
//   <>
//   <button onButtonClick={clickButton}>Click here</button>

//   <button onClick={onbu}>Click me as well</button>
//   </>
// )

// }

// export default App



// code for the Passing event handlers as props
// import React from "react";
// import Child from "./child";

// function App() {
//   function clickButton() {
//     alert("Hello, world!");
//   }

//   return (
//     <>
//       <Child onButtonClick={clickButton} />
//     </>
//   );
// }

// export default App;


