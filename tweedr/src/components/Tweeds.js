import React from 'react';

function Tweed(props){

	const renderTweeds = function(){
		console.log(props);
   // this return is to return the elements
    return (
        props.tweed.map((e,i) => {
          // this return is for map
          return (
                <li id={e.id} key={e.id}> {e.tweed}<hr /></li>
                
         )
        })
    )
  }

	return(
		<div id='body'>
			<ul id='read'>
				 {renderTweeds()} 
				
			</ul>
		</div>
	);
}
export default Tweed