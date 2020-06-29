import React, { ChangeEvent } from'react';



interface UserInpProps {
    
    changed?:(event:ChangeEvent<HTMLInputElement>)=> void;
    name?:string;
    currentName:string;
}

const userInput= (props:UserInpProps)=>{
    const stilius={

        border:'2px solid blue',
       
    }

        return <input 
        style={stilius}
        type="text" 
        onChange={props.changed}
        value={props.currentName} 
        />;
}


export default userInput;   