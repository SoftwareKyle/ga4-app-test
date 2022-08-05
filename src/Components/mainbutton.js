import React from 'react'
import { Pagetwo } from './pages/Pagetwo';

export const Mainbutton = (props) => {
  //let url = props.url; 
  //const [url, seturl] = setState(props.url); 
    const onclicker = (url) => {
        //go to page
        alert(url, "button two clicked, testing main");
        //console.log("!!! testing clicker")
        //window.open(url, '_blank', 'noopener,roreferrer')
        if(url === "pageTwo"){
          return <Pagetwo/>
        }
    };
  return (
    <a href={props.url} target="_self">
      <button onClick={() => onclicker(props.url)}>
        {props.name}
      </button>
    </a>
   
  )
}
