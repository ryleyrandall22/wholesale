import React, { useState, useEffect } from "react";
import Blob from "../Assets/Blob.png";
import Blocks from "../Assets/Blocks.png";
import Frame from "../Assets/frame.png";
import Couple from "../Assets/couple.JPG";
export default function Intro() {
  const [size, setSize] = useState("reg");

  const styles = {
    reg: {
      titleSize: 72,
      bodySize: 32
    },
    mobile: {
      titleSize: 58,
      bodySize: 24
    }
  };

  const updateSize = x => {
    if (window.innerWidth < 680) {
      setSize("mobile");
    } else {
      setSize("reg");
    }
  
    console.log(size)
  };
  useEffect(() => {
    updateSize()
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      style={{display:'flex', flexWrap:size==='reg'?'nowrap':'wrap', flexDirection:'row', alignItems:'stretch'}}
    >
        <div style={{display:'flex', flexGrow:1, flexBasis:'50%', flexDirection:'column', padding:50, justifyContent:'center'}}>
          <div style={{fontSize:84, marginBottom:80}}>Ryley Randall</div>
          <div style={{fontSize:32}}>Finance Student, Coder, Arizona Sports Fan, Conesour of German Pancakes</div>
        </div>
        <div style={{  flexBasis:'50%', flexGrow:1, paddingTop:'25%', minWidth:'360px', minHeight:400, backgroundImage:`url(${Couple})`, backgroundSize: "cover",}}>

        </div>
    </div>
  );
}
