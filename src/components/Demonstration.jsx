import React from "react";
import Demonstration from '../assets/Demonstration.webm'

const VidoeDemonstration = () => {
    return (
      
        
        <div> 
            <video>
                <source src={VidoeDemonstration} type="video/webm" />
            </video>
        </div>
        )
};

export default VidoeDemonstration;
