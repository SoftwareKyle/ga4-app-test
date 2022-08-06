import React from 'react'
//import { Pagetwo } from './pages/Pagetwo';

export const Mainbutton = (props) => {
  let purl = props.url; 
  let pname = props.name;
  //let ptarget = props.target; 
  //const [url, seturl] = setState(props.url); 
    const onclicker = () => {
        //go to page
        alert(purl, "button two clicked, testing main");
        //console.log("!!! testing clicker")
        //window.open(url, '_blank', 'noopener,roreferrer')
        if(purl === "pageTwo"){
          //return <Pagetwo/>
          alert("Testing page two url function");
        }
    };
  return (
    <a href={purl} target="_self">
      <button onClick={() => onclicker(purl)}>
        {pname}
      </button>
    </a>
   
  )
}
