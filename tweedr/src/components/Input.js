import React from 'react'

function Input(props){
	return(
		<div>
		<form id='test' onSubmit={props.onSubmit}>
		<input id='newVal'></input>
		</form>

		</div>
	);
}

export default Input