import React, { ChangeEvent } from'react';

interface UserInpProps {
    
    changed?:(event:ChangeEvent<HTMLInputElement>)=> void;
    name?:string;
}

const userInput= (props:UserInpProps)=>{
    const stilius={
        border:'2px solid blue',
        
        
    }

    return <input 
    style={stilius}
    type="text" 
    onChange={props.changed}
    value={props.name}
    />;
}


export default userInput;   