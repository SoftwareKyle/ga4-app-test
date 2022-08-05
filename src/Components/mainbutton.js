import React from 'react'

export const Mainbutton = (props) => {
  //let url = props.url; 
  //const [url, seturl] = setState(props.url); 
    const onclicker = (url) => {
        //go to page
        alert(url, "button two clicked")
        //window.open(url, '_blank', 'noopener,roreferrer')
    };
  return (
    <button onclick={() => onclicker(props.url)}>
        
    </button>
  )
}
