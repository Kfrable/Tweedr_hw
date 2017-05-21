import React from 'react'

function Write(props){
	return(
		<div>
		<input onClick={props.onClick}></input>
		<button onClick={props.onClick}>submit</button>
		<button id='butt' onClick={props.onClick}>GetTweeds</button>

		</div>
	);
}

export default Write