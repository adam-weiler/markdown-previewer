import React from 'react';

/*Creates a textarea component for the user to type in.
Automatically loads the initial value from textBlurb.js.
Any onChange events affect state, and will be reflected in the PreviewBox.
*/
const EditorBox = (props) => { //The textarea component for input.
	return (
		<textarea id="editor"
			value={props.inputText}
			onChange={props.onChange}
			type="text"
			className = "blueBox" >
	    </textarea>
		)
}

export default EditorBox;