import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {

  const [count, setCount] = useState(0);

  const [data]= useState(props.slides);

  return (
    <>
    <div>
      <h1 data-testid="title">{data[count].title}</h1>
      <p data-testid="text">{data[count].text}</p>
      <button data-testid="button-next" disabled={count === props.slides.length-1 ? true : false} onClick={()=>setCount(count+1)}>Next</button>
      <button data-testid="button-prev" disabled={count === 0 ? true : false} onClick={()=> setCount(count-1)}>Prev</button>
      <button data-testid="button-restart" onClick={()=> setCount(0)} disabled={count === 0 ? true : false}>Restart</button>
    </div>
    </>
  )
}


export default App;
