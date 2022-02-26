import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("clicked handleUpClick" + text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","danger")
  };
  const handleDownClick=()=>{
      const newlText = text.toLowerCase(); 
      setText(newlText);
  }
  const handleClearClick=()=>{
      const newlText = '';
      setText(newlText);
  }
  const handleCopy=()=>{
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copied to clipboard","success")

  }

  const handleSPerLineClick =() =>{
    let newText = text.replaceAll('.',"\n");
    setText(newText);
}
  const intoTitleCase = () => {
    let newText = text.split(" ").map((currentValue) => {
        let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
        return newText;
    });
    setText(newText.join(" "));
}
//remove all the symbols
const handletextExtract =()=>{
    const regex = /[0-9/A-Z/a-z/ /]/g;

    const letters = text.match(regex);
    const res1 = letters.join('');
    setText(res1)
    };


//to extract only the numbers in the text:
const handleNumExtract =()=>{
    const regex = /[0-9/ /]/g;

    const digits = text.match(regex);
    const newText = digits.join('');
   setText(newText)
    };
    const handleExtraSpaces = ()=>{
        const newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        }
const handleReverse = () => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
  };
const handleStringCount = () => {
    const countString =(text, letter)=> {
        let count = 0;
    
        // looping through the items
        for (let i = 0; i < text.length; i++) {
    
            // check if the character is at that position
            if (text.charAt(i) === letter) {
                count += 1;
            }
        }
        return count;
    }
    const newText = countString();
    setText(newText);
  };
  const handlefontClick=()=>{
    let font=()=>{
      let val=document.getElementById('myBox');
      val.style.fontStyle="italic";
    }
    font(); 
  }
    //   Importantttttt **********

    const handleOnChange = (event) => {
      console.log("clicked OnChange");
      setText(event.target.value);
      // Importanttttttttt syntax
    };

  const [text, setText] = useState("Enter the text");
  // text is input variable and setText is the function with which the value can be updated(UPDATION FUNCTION)
  return (
    <>
      <div style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            value={text}
            style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear text Area
        </button>
        <button className="btn btn-primary mx-3" onClick={handleSPerLineClick}>
        handleSPerLineClick
        </button>
        <button className="btn btn-primary mx-3" onClick={intoTitleCase}>
        intoTitleCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleReverse}>
        handleReverse
        </button>
        <button className="btn btn-primary mx-3"  onClick={handlefontClick}>
        handlefontClick
        </button>
        <button className="btn btn-primary m-3"  onClick={handleStringCount}>
        handleStringCount
        </button>
        <button className="btn btn-primary m-3"  onClick={handletextExtract}>
        handletextExtract
        </button>
        <button className="btn btn-primary m-3"  onClick={handleNumExtract}>
        handleNumExtract
        </button>
        <button className="btn btn-primary m-3"  onClick={handleCopy}>
        handleCopy
        </button>
        <button className="btn btn-primary m-3"  onClick={handleExtraSpaces}>
        handleExtraSpaces
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>
        {text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} munites to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>
        <p>no of a = {text.split('a').length - 1}</p>
        <p>{(text.match(/,/g) || []).length}</p>
        <h3>Characters per word</h3>
        <p>{text.replace(/ /g,"").length/text.split(" ").length}</p>
      </div>
    </>
  );
}
