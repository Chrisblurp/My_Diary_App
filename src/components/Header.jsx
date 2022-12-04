import React, {useState} from "react";


export default function Header() {
const [time, setTime] = useState("");

setInterval(timer, 1000);

function timer (){
  
 const currentTime = new Date().toLocaleTimeString();
setTime(currentTime)
}


  return (
    <header>
      <h1>My Diary App</h1>
      <h2>{time}</h2>
    </header>
  );
}
