import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes';


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



const noteList = notes.map( n=> <Note key={n.key} title={n.title} content={n.content} /> );

class App extends React.Component {

	render (){
		return (
			

			<React.Fragment>
				<Header />

					{noteList}
				<Footer />
			</React.Fragment>

		);
	}
}


export default App


