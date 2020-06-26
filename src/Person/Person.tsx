import React from 'react';
import './Person.css';

interface PersonTypes {
    name: string;
    age: number;
    children?:string;
    click?:()=> Function;
    changed?:any;
    
    
    
};

const person = (props:PersonTypes ) => {
return( 
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I'm a {props.age} !</p>
            <p >{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            
        </div>
    )
 };

 export default person;  