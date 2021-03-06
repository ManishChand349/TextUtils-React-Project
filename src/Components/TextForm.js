import React, {useState} from "react";


export default function TextForm(props) {
     const handleUpClick = ()=> {
          // console.log('Uppercase was clicked' + text);
          let newText = text.toUpperCase();
          setText(newText)
          props.showAlert("Converted to Uppercase","success");
     }
     const handleLoClick = ()=> {
          // console.log('Uppercase was clicked' + text);
          let newText = text.toLowerCase();
          setText(newText)
          props.showAlert("Converted to Lowercase","success");
     }
     const handleClearClick = ()=> {
          // console.log('Uppercase was clicked' + text);
          let newText = '';
          setText(newText)
          props.showAlert(" Text Cleared! ","success");
     }
     const handleCopy = () => {
       let text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to clipboard!","success");
     }
     
     const handleOnChange = (event)=> {
          setText(event.target.value);
          
     }
      const [text, setText] = useState('');

      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!","success");
      }
     
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btnp btn btn-primary mx-2 " onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btnp btn btn-primary mx-2 " onClick={handleClearClick}>Clear Text</button>
      <button className="btnp btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btnp btn btn-primary mx-2 " onClick={handleCopy}>Copy Text</button>
      <button className="btnp btn btn-primary mx-2 " onClick={handleExtraSpaces}>Remove Extar Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.lenght!=0}).length} word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
