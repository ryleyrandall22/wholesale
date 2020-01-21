import React, {useState, useEffect} from "react";
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';




export default function Contact(props) {
    const [hovered, setHovered] = useState(false)
    const [display, setDisplay] = useState("flex")
    const handleHover = () => {
        setHovered(!hovered)
      }

      useEffect(() => {
        if(props.visible){
            setDisplay('flex')
        }else{
            setDisplay('none')
        }
      },[props.visible])





    return(
        <div onClick={() => props.onClose()} style={{position:'fixed', top:0, left:0, right:0, bottom:0, backgroundColor:'rgba(0,0,0,0.15)', display:display, alignItems:'flex-start',  justifyContent:'center'}}>
                <div style={{display:'flex', flexDirection:'column', padding:20, width:360, marginTop:100, backgroundColor:"#fff", borderRadius:5}}>
                    
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <div style={{fontFamily:'Merriweather', fontSize:18, fontWeight:700}}>
                            Contact
                        </div>
                        <IconButton onClick={() => props.onClose()}>
                            <CloseIcon  />
                        </IconButton>
                    </div>
                    
                    <div style={{display:'flex', alignItems:'center', }}>
                        <div style={{fontFamily:'Merriweather', fontSize:12}}>
                            EMAIL
                        </div>
                        <div style={{fontFamily:'Merriweather', fontSize:18, marginLeft:10}}>
                            ryley.randall@gmail.com
                        </div>
                    </div>

                    <div style={{display:'flex', alignItems:'center', marginTop:20}}>
                        <div style={{fontFamily:'Merriweather', fontSize:12}}>
                            WORK
                        </div>
                        <div style={{fontFamily:'Merriweather', fontSize:18, marginLeft:10}}>
                            Brownfox.co
                        </div>
                    </div>
                </div>
        </div>
    )
}