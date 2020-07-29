import React, {useState} from "react";

function CreateArea(props) {
	const [item,setItem] = useState({title: '', content: ''});

	
	// Monitors and handles fields before form being submitted
	const handleForm = (event) => {
		const {name,value} = event.target;

		setItem(previous => {
			return {...previous,[name]: value};
		})
		
	};

	const handleSubmit = (event) => {
		props.handleItem(item);
		setItem({title: '', content: ''});

		event.preventDefault();		//Stops form from actually being submitted and page reloaded
	}

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={item.title} onChange={handleForm}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={item.content} onChange={handleForm}/>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
