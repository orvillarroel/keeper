import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notesDB2 from './notes';			// local DB of notes
import CreateArea from './CreateArea';


/*

	Name: Keeper
	Date: 07/22/20
	Desc: 
		Google Notes Clone. Complete Dev Bootcamp
	
	DONE: Added to Github

	TODO:
		*Pin to the top
		*Sort Feauture
		*Labels / Categories
		** Fitlter by Labels
		** Hide certain notes from main list
		* Ability to add notes dynamically
		* Share notes to Social media or Email
		* Display / Rearrange 


*/


const App = () => {
	const [notes,setNotes] = useState([...notesDB2]);

	const addNote = newNote=>{
		setNotes(previous=>{
			return [newNote,...previous]
		});
	};

	const deleteNote = id => {
		setNotes(previous=>{
			return previous.filter((item,index)=> index!==id);
		});
	}

	// old static notes
	const noteList = notes.map( (n,index)=> <Note key={index} id={index} title={n.title} content={n.content} deleteButton={deleteNote}/> );

	return (
			

			<React.Fragment>
				<Header />
					<CreateArea handleItem={addNote}/>
					{noteList}
				<Footer />
			</React.Fragment>

		);
	
}


export default App


