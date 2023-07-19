import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
// import AboutComponent from './Component/AboutComponent';
import { useState } from "react"
import Alert from './Component/Alert';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutComponent from './Component/AboutComponent';

function App() {
  const [Mode, setMode] = useState("light")
  const [alert, setalert] = useState(null)
  const [btnclass, setbtnclass] = useState("light")

  const showalert = (message, type) => {

    setalert({ msg: message, type: type })
    setTimeout(() => {
      setalert(null)
    }, 2000)
  }

  let themeobj = {
    "light": "white",
    "grey": '#21211f',
    "green": "#1d2b1d",
    "red": "#2e1d1f",
    "yellow": "#2f3020",
    "blue": "#132441",
  }
  const toggleMode = (e) => {

    setbtnclass(e.target.classList[1])


    if (e.target.id !== "light") {
      setMode(e.target.id)
      document.body.style.background = themeobj[e.target.id];
      document.body.style.color = "white"

      showalert(`Switched to ${e.target.id} Mode`, `${e.target.classList[1].split("-")[1]}`)
      //2nd parameter gives primary danger sucess etc so that alert is of same color as theme
    }
    else if (e.target.id === "light") {

      setMode("light")
      document.body.style.background = "white";
      document.body.style.color = "black"
      showalert(`Switched to ${e.target.id} Mode`, `${e.target.classList[1].split("-")[1]}`)

    }
  }
  return (
    <>


      <BrowserRouter>
        <Navbar title="TextUtils" abouttext="About Us" hometext="Home" toggleMode={toggleMode} Mode={Mode} />
        <Alert alert={alert}></Alert>
        <Routes>
          <Route path="/" element={
            <Textform Mode={Mode} btnclass={btnclass}  showalert={showalert}/>
          } />
          <Route path="/About" element={<AboutComponent toggleMode={toggleMode} Mode={Mode} themeobj={themeobj} btnclass={btnclass} />} />
        </Routes>
      </BrowserRouter>
      
          
    </>

  );
}

export default App;
