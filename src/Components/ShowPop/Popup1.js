// import React,{useState} from 'react';
// import Alert from './Alert';

// const Popup1 = () => {

//     const [toogle, setToogle]=useState(false);
//     const toogleHandler = () => {
//         setToogle(!toogle);
//     };



//   return (
//     <div>
//         <button onClick={toogleHandler} className="top3" > popup</button>
//         {toogle ? <Alert toogle={toogle} setToogle={setToogle}/>:null}




//     </div>
//   )
// }

// export default Popup1



import React, { useState }  from "react";
import './Alert.css'
function Popup1(){
    const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }
    return(
        <div>
            <button onClick={handleClickOpen}>Open popup</button>
            <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>popup</h1>
                                <h1 onClick={closePopup}>X</h1>
                            </div>
                            <div>
                            <p>This is simple popup in React js</p>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default Popup1;