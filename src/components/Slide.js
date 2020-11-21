import React, {Component, useState, useEffect} from "react";
import '../styles/App.css';

const Slide = (props) => {
  return (
    <div>
      <h1 data-testid="title">{props.title}</h1>
      <p data-testid="text">{props.text}</p>
    </div>
  )
}


export default Slide;
