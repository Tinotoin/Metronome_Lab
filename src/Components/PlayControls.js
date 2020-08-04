import React from 'react';

const PlayControls = (props) => {
  return(
    <div>
  <button onClick={props.toggle} >Click to loop the beep</button>
  </div>
)
}



export default PlayControls;
