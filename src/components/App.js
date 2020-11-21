import React, {Component, useState, useEffect} from "react";
import '../styles/App.css';
import Slide from './Slide';

const App = (props) => {
  const [slide, setSlide] = useState(0);
  const [disable, setDisable] = useState(false);


  const decr = () =>{
    setSlide(slide - 1);
  }
  const incr = () =>{
    setSlide(slide + 1);
  }
  return (
    <div>
      {slide !== 0 ? 
      <button id="Restart" data-testid="button-restart" onClick={() => setSlide(0)}>Restart</button>
      :null}

      {slide !== 0 ? 
      <button id="Prev" data-testid="button-prev" onClick={decr}>Prev</button>
      :null}

      {slide < props.slides.length-1 ? 
      <button id="Next" data-testid="button-next" onClick={incr}>Next</button>
      :null}

      <h1 data-testid="title">{props.slides[slide].title}</h1>
      <p data-testid="text">{props.slides[slide].text}</p>
      {/* <Slide title={props.slides[slide].title} text={props.slides[slide].text}></Slide> */}

    </div>
  )
}


export default App;
