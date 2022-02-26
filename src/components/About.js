import { useState } from "react";
import React from "react";

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor: 'white',
        border :'2px solid white'
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode");

    const toggleMode=()=>{
        if(myStyle.color ==='black'){
            setMyStyle({
                color : 'white',
                backgroundColor: 'black'

            })
            setbtnText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color : 'black',
                backgroundColor: 'white',
                border :'2px solid white'

            })
            setbtnText("Enable Dark Mode");

        }
    }

  return (
    <div className="container p-3" style={myStyle}>
      <h1 className="m-3">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container m-3">
        <button className="btn btn-primary" onClick={toggleMode}>{btnText}</button>
      </div>
    </div>
  );
}
