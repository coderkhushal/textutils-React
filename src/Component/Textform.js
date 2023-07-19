
import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState("");

    // const showalert = () => {
    //     // setalertdisplay({display:"block"})
    //     setTimeout(() => {
    //         setalertdisplay({display:"none"})
    //     }, 2000);
    // }
    const Uppercase = () => {
        // console.log("upppercase clicked")
        setText(text.toUpperCase())
        props.showalert("Converted to UPPERCASE Successfully","success")
    }
    const clear=()=>{
        setText("")
    }

    //to type we have to listen onchange event like this
    const handleonchange = (event) => {
        // console.log("changing")
        setText(event.target.value)

        //here the everytime value becomes the former value + new letter typed by us
    }
    const Lowercase = () => {
        setText(text.toLowerCase())
        props.showalert("Converted to lowercase Successfully","success")
    }
    const Titlecase = () => {
        let arr = text.split(" ")

        let newarr = arr.map(element => {
            element = element.charAt(0).toUpperCase() + element.substr(1).toLowerCase()
            return element
        })
        console.log(newarr)
        setText(newarr.join(" "))
        props.showalert("Converted to TitleCase Successfully","success")

    }


    return (
        <>
            <div className='container'>

                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label my-3">Enter Your Text</label>
                    <textarea   className={`form-control bg-${props.Mode==="light"?"light":"dark"} text-${props.Mode === "light" ? "dark" : "light"}`} id="mybox" rows="10" value={text} onChange={handleonchange} ></textarea>
                </div>
                <div className="container" style={{height:"50px"}}>
                    <button type="button" className={`btn ${props.btnclass} mx-2 my-2`} onClick={Uppercase} disabled={text.trim().length==0}>UpperCase</button>
                    <button type="button" className={`btn ${props.btnclass} mx-2 my-2`} onClick={Lowercase} disabled={text.trim().length==0}>LowerCase </button>
                    <button type="button" className={`btn ${props.btnclass} mx-2 my-2`} onClick={Titlecase} disabled={text.trim().length==0}>TitleCase</button>
                    <button type="button" className={`btn ${props.btnclass} mx-2 my-2`} onClick={clear} disabled={text.trim().length==0}>Clear</button>

                </div>
            </div>
            <div className="container">
                <h1>Your Text Summary</h1>
                <p>
                    {text.trim()===""?0:text.trim().split(" ").length} words in text
                    <br></br>
                    {text.trim().split("").length} characters in text
                    <br />
                    {(((text.trim().split(" ").length ) * 0.4) / 125).toFixed(2)} minutes average reading time
                </p>

            </div>
        </>
    )
}
