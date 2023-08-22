import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText('')
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('Enter text here');
    // text="new text"; // Wroung way to change the state
    // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container">
          <h1>{props.mainheading}</h1>
          <label htmlFor="">{props.subheading}</label>
          <textarea name="" id="myBox"  className='w-100' value={text} onChange={handleOnChange} rows="10"></textarea>
          <button type='button' className="btn btn-primary mx-2" onClick={handleUpClick}>Uppercase</button>
          <button type='button' className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
          <button type='button' className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
          <button type='button' className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button type='button' className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Extra Space</button>

          <h1 className="mt-3">Yout Text Summary</h1>
          <p>{text.split(" ").length} words and {text.length} charactors</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>

          <h2>Preview</h2>
          <p>{text}</p>          
      </div>
    </>
  )
}
