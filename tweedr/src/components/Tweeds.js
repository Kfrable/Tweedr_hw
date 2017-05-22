import React from 'react';

function Tweed(props){

	const renderTodos = function(){
		console.log(props);
   // this return is to return the elements
    return (
        props.tweed.map((e,i) => {
          // this return is for map
          return (
            <div key={i}>
                <li> {e.tweed}</li>
            </div>

         )
        })
    )
  }

	return(
		<div id='body'>
			<ul id='read'>
				<p> {renderTodos()} </p>
				
			</ul>
		</div>
	);
}
export default Tweed