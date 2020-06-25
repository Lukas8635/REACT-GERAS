import React from 'react';

interface PersonTypes {
    name: string;
    age: number;
    children?:string;
    click?:()=> void;
    
    
    
};

const person = (props:PersonTypes ) => {
return( 
        <div>
            <p onClick={props.click}>I'm a {props.name} and I'm a {props.age} !</p>
            <p >{props.children}</p>
            
        </div>
    )
 };

 export default person;  