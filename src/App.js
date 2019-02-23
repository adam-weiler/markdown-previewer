import React, { Component } from 'react';
import marked from 'marked'; //marked.js converts GitHub flavoured markedown into HTML.
import EditorBox from './EditorBox.js';
import { textBlurb } from './textBlurb'; //Gets the initial value for when the page loads.
import './App.css';

marked.setOptions({ //Options for marked.js.
	sanitize: true, //Sanitizes incoming text.
	//gfm: true, //Required for breaks.
	breaks: true, //User using carriage return is interpretted as a new line.
	//renderer: renderer //Clicking link opens a new tab.
})

//This section is used for clicking a link opens a new tab.
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

class App extends Component {
	constructor(props) {
			super(props);
			this.state = {
				inputText: initialValue,
			};
			this.handleChange = this.handleChange.bind(this);
		}

	componentDidMount() { //Needed to run freeCodeCamp tests.
		const fCCscript = document.createElement("script");
		fCCscript.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
		fCCscript.async = true;
		document.body.appendChild(fCCscript)

		// const markedScript = document.createElement("script");
		// markedScript.src = "https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.6/marked.js";
		// markedScript.async = true;
		// document.body.appendChild(markedScript)
	}

	handleChange(event) { //Changes the state whenever the user types anything into the inputbox.
		this.setState({
      		inputText: event.target.value
    	});
	}

  render() {
    return (
      <div className="App">
      	<h1>Markdown Previewer in React:</h1>
      	<h3>Input your text here:</h3>
	   	<EditorBox inputText = {this.state.inputText}
	   		onChange ={this.handleChange} />
	    <h3>This is the HTML result:</h3>
	    <PreviewComponent inputText = {this.state.inputText} />
      </div>
    );
  }
}

/*Creates a markdown previewer component.
Automatically loads the value from EditorBox (which is the initial value from textBlurb.js).
Any onChange events in EditorBox affect state, and will be reflected here.
*/
const PreviewComponent = (props) => { //The markdown previewer component.
	return (
	    <div id="preview" 
	    dangerouslySetInnerHTML={{__html: marked(props.inputText, {renderer: renderer})}}
	    className = "blueBox" >
	    </div>
		)
}

let initialValue = textBlurb; //This is the initial value when the page loads. It is stored in textBlurb.js.

export default App;