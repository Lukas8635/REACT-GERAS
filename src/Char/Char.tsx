import React, { MouseEvent } from 'react';



interface CharInterface {
    character:string;
    key?:number;
    clicked:(event:MouseEvent<HTMLDivElement>) => void ;
}


const char =(props:CharInterface) =>{
    const charStyle = {
         display: 'inline-block',
         padding:'16px',
         margin:' 16px',
         border:'1px solid black',
         textAlingn:'center' 

    }

    return(
        <div style={charStyle} onClick={props.clicked}> 
            {props.character}
            
        </div>
    )
}

export default char;