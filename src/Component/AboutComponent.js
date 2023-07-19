import { Link }  from 'react-router-dom'
// import React, { useState } from "react";
export default function AboutComponent(props) {

    // const [myStyle, setStyle] = useState({});
    // const togglemode = () => {
    //     if (document.body.style.color === "black") {
    //         setStyle({ backgroundColor: "black", color: "white" })
    //         document.getElementById("togglemode").classList.replace("btn-primary", "btn-info")
    //         document.body.style.background = "black"
    //         document.body.style.color = "white"
    //         document.getElementById("togglemode").innerText = "Disable Dark Mode"
    //         document.getElementById("navbar").classList.replace("bg-light", "bg-dark")
    //         document.getElementById("navbar").classList.replace("navbar-light", "navbar-dark")
    //     }
    //     else {
    //         setStyle({})
    //         document.body.style.background = "white"
    //         document.body.style.color = "black"
    //         document.getElementById("togglemode").innerText = "Enable Dark Mode"
    //         document.getElementById("togglemode").classList.replace("btn-info", "btn-primary")
    //     }


    // }

    return (
    //     <div className='container' style={myStyle}>
    //         <h1 className='my-2 container' style={myStyle}>About Us</h1>
    //         <div className="accordion" id="accordionExample" style={myStyle}>
    //             <div className="card" style={{ ...myStyle, border: "2px solid white" }}>
    //                 <div className="card-header" id="headingOne">
    //                     <h2 className="mb-0">
    //                         <button style={myStyle} className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    //                             Collapsible Group Item #1
    //                         </button>
    //                     </h2>
    //                 </div>

    //                 <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
    //                     <div className="card-body">
    //                         Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="card" style={{ ...myStyle, border: "2px solid white" }}>
    //                 <div className="card-header" id="headingTwo">
    //                     <h2 className="mb-0">
    //                         <button style={myStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    //                             Collapsible Group Item #2
    //                         </button>
    //                     </h2>
    //                 </div>
    //                 <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
    //                     <div className="card-body">
    //                         Some placeholder content for the second accordion panel. This panel is hidden by default.
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="card" style={{ ...myStyle, border: "2px solid white" }}>
    //                 <div className="card-header" id="headingThree">
    //                     <h2 className="mb-0">
    //                         <button style={myStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
    //                             Collapsible Group Item #3
    //                         </button>
    //                     </h2>
    //                 </div>
    //                 <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
    //                     <div className="card-body">
    //                         And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <button onClick={togglemode} id='togglemode' className="btn btn-primary" >Enable Dark Mode</button>

        // </div>

    <div className={`jumbotron  text-${props.Mode === "light" ? "dark" : "white"}`}  style={{background:`${props.themeobj[props.Mode]}` }}>
        <h1 className="display-4">Welcome to TextUtils</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            {/* <Link className={`btn ${props.btnclass} btn-lg`} to="/textutils-React" role="button">Learn more</Link> */}
    </div>
    )
}
