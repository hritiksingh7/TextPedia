import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success")
    }

    const handleClearText = () => {
        setText('');
        props.showAlert("Text area cleared", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
  
  return (
    <>
        <div className="mb-3 container">
            <h1 className={`text-${props.mode === 'dark'?'light':'dark'}`}>{props.heading}</h1>
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}} value = {text} id="exampleFormControlTextarea1" rows="10" onChange = {handleOnChange}></textarea>
            <button disabled={text.length === 0} className='my-3 btn btn-primary mx-1 my-1' onClick={handleUpClick}> Convert to Uppercase</button>
            <button disabled={text.length === 0} className='my-3 btn btn-primary mx-1 my-1' onClick={handleLowClick}> Convert to Lowercase</button>
            <button disabled={text.length === 0} className='my-3 btn btn-primary mx-1 my-1' onClick={handleClearText}> Clear Text</button>
            <button disabled={text.length === 0} className='my-3 btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}> Remove Extra Spaces</button>
        </div>
        <div className="container">
            <h1 className={`text-${props.mode === 'dark'?'light':'dark'}`}>Your text summary</h1>
            <p className={`text-${props.mode === 'dark'?'light':'dark'}`}>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p className={`text-${props.mode === 'dark'?'light':'dark'}`}>Minutes to read = {0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length}</p>

            <h2 className={`text-${props.mode === 'dark'?'light':'dark'}`}>Preview</h2>
            <p className={`text-${props.mode === 'dark'?'light':'dark'}`}>{text.length>0?text:"Enter your text to preview here."}</p>
        </div>
    </>
        
  )
}
