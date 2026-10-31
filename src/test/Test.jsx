import React, { useState } from "react";

const Test = () => {
  const [username, setUsername] = useState("Nirob");
  const [count, setcount] = useState(10);
  const [passType,setpassType]=useState(true)

  const handleDecrement = () => {
    setUsername("Niorb Siam");
  };

  const handleIncrement = () => {
    setcount(count + 1);
  };
//   const haldlePassShow=()=>{
//     if(passType==="password"){
//         setpassType("text")
//     }else{
//         setpassType("password")
//     }
//   }
 
  return (
    <div style={{ padding: "100px" }}>
      <div>
        <input type={`${passType ? 'password': 'text'}`} placeholder="Enter Your Password" />
        <button onClick={()=>setpassType(!passType)}>Show</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <h1 style={{ padding: "40px" }}>
        Count Value:{count}
        {username}
      </h1>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Test;
