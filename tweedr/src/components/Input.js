import React from 'react'

function Input(props){
	return(
		<div>
		<form onSubmit={props.onSubmit}>
		<input></input>
		</form>

		</div>
	);
}

export default Input