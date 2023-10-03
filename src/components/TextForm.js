import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        if(text.length>0){
            let newText = text.toUpperCase()
            setText(newText)
            props.showAlert("Converted to UpperCase!","success");
        }
        else{
            props.showAlert("Text panel is empty","warning");
        } 
    }

    const handleLoClick = ()=>{
        if(text.length>0){
            let newText = text.toLowerCase()
            setText(newText)
            props.showAlert("Converted to LowerCase!","success");
        }
        else{
            props.showAlert("Text panel is empty","warning");
        } 
    }

    const handleClClick = ()=>{
        if(text.length>0){
            let newText = "";
            setText(newText);
            props.showAlert("Cleared !","success");
        }
        else{
            props.showAlert("Text panel is already cleared!","warning");
        }
    }

    const handleReClick = ()=>{
        if(text.length>0){
            let newText = text.repeat(nValue)
            setText(newText)
            props.showAlert("Repeated n times","success");
        }
        else{
            props.showAlert("Text panel is empty !","warning");
        }
        
    }

    const handleCopy = ()=>{
        if(text.length>0){
            let newText = document.getElementById('myBox')
            newText.select()
            navigator.clipboard.writeText(newText.value)
            props.showAlert("Copied to Clipboard! ","success");
        }
        else{
            props.showAlert("Text panel is empty !","warning");
        }
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const preText = "Type something to preview";

    const [text, setText] = useState("");
    const [nValue, setNValue] = useState(5);

  return (
    <>
    <div className='container'>
        <div className="mb-3">
        <label htmlFor="myBox" style={{color: props.mode==='light'?'black':'white' }} className="form-label"><h1>{props.heading}</h1></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#4a4a4a':'white',color: props.mode==='light'?'black':'white' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPER CASE</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>lower case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReClick}>Repeat times</button>

        <select value={nValue} onChange={e=>setNValue(e.target.value)}>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:preText}</p>
    </div>
    </>
  )
}
