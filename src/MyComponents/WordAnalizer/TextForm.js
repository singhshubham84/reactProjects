import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClear = () => {
        setText("")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    const handleCapitalize = () => {
        let sentences = text.split(/[ ]+/)
         let newText=""
        for (let i = 0; i < sentences.length - 1; i++) {
            let firstChar = sentences[i][0].toUpperCase();
            let restOfSentence = sentences[i].slice(1);
            newText += firstChar + restOfSentence + " ";
        }
        setText(newText)
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
    }
    const handleAlternate=()=>{
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (i%2===0) {
            result += text[i].toLowerCase();
          } else {
            result += text[i].toUpperCase();
          }
        }
        setText(result)
    }



    const [text, setText] = useState("");

    //text="NEWTEXT"; //wrong way to changethe state
    //textState="NEWTEXT"; //correct way to changethe state
    return (
        <>
            <div className="container my-2">
                <h1>  </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}> UPPER CASE </button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}> lower case </button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalize}> Capitalize Case </button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text </button>
                <button className="btn btn-primary mx-1" onClick={handleAlternate}> aLtErNaTe cAsE </button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}> Remove Space </button>
                <button className="btn btn-danger mx-1" onClick={handleClear}> ClearAll </button>
            </div>

            <div className="container my-3">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    );
}
