import React from 'react';


const Note = ({title,content,id,deleteButton}) => {
	return (
		<div className="note">
			<h1>{title}</h1>
			<p>{content}</p>
			<button onClick={()=>deleteButton(id)}> Delete </button>
		</div> 
	
	);

};

export default Note;