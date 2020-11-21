import React, {Component, useState, useEffect} from "react";
import '../styles/App.css';
// import Slide from './Slide';

const App = (prop) => {
  const [slide, setSlide] = useState(0);
  // const [disable, setDisable] = useState(false);

  const decr = () =>{
    setSlide(slide - 1);
  }
  const incr = () =>{
    setSlide(slide + 1);
  }
  return (
    <div>
      {slide !== 0 ? 
      <button data-testid="button-restart" onClick={() => setSlide(0)}>Restart</button>
      :null}

      {slide !== 0 ? 
      <button data-testid="button-prev" onClick={decr}>Prev</button>
      :null}

      {slide < prop.slides.length-1 ? 
      <button data-testid="button-next" onClick={incr}>Next</button>
      :null}

      <h1 data-testid="title">{prop.slides[slide].title}</h1>
      <p data-testid="text">{prop.slides[slide].text}</p>
      {/* <Slide title={props.slides[slide].title} text={props.slides[slide].text}></Slide> */}

    </div>
  )
}


export default App;
