import React, { useState } from "react";

export default function TextForm(props) {
  const onhandleupClick=()=>{
    console.log("button clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }
    const onhandlelowClick=()=>{
      console.log("button clicked"+text);
      let newText=text.toLowerCase();
      setText(newText);
   }

   const onhandleCamelClick=()=>{
    const finalResult = text
    .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
    .replace(/\s/g, ' ')
    .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
     console.log(finalResult);
     setText(finalResult);
   }

    

   const onChangehandle=(event)=>{
    console.log("button not clicked");
     setText(event.target.value)
   }
   const [text, setText] = useState("Enter your name");
  return (
    <>
    <div>
            <h1>{props.heading}</h1>
          <textarea className="form-control" id="exampleFormControlTextarea1" onChange={onChangehandle} value={text} rows="8"></textarea>
           <button className="btn btn-primary my-2" onClick={onhandleupClick}>Uppercase</button>
           <button className="btn btn-primary mx-2 my-2" onClick={onhandlelowClick}>Lowercase</button>
           <button className="btn btn-primary mx-2 my-2" onClick={onhandleCamelClick}>Camelcase</button>
           
        </div>
        <div className="container">
          <h2>your text summary</h2>
          <p>words are{text.split(" ").length} and text are{text.length}</p>
          <p>{0.008 * text.split(" ").length}minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
        </>
  )
}
