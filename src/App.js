import React, {useState} from "react";
import Intro from "./Sections/intro";
import About from "./Sections/about";
import Code from "./Sections/code";
import Contact from "./Sections/contact"

export function App(props) {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  const hover = {
    boxShadow: "4px 0px 5px 0px rgba(0,0,0,0.75)"
  }

  const handleHover = () => {
    setHovered(!hovered)
  }

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', backgroundColor:'#FFF', height:'100%'}}>
      <div style={{fontFamily:'Merriweather', fontWeight:'400', fontSize:32, color:'#333' }}>
        Ryley Randall
      </div>
      <div style={{width:100, height:5, backgroundColor:'#333333', marginTop:20, marginBottom:20}}/>
      <div onMouseOver={handleHover} onMouseLeave={handleHover} onClick={() => setVisible(true)} style={{boxShadow:hovered?"0px 2px 4px 2px rgba(0,0,0,0.15)":"", fontFamily:'Merriweather', fontWeight:'700', backgroundColor:'#88B2A7', padding:10, borderRadius:5, color:'#fff', cursor:'pointer'}}>
        Contact Me
      </div>
      <Contact onClose={() => setVisible(false)} visible={visible}/>
    </div>
  );
}
