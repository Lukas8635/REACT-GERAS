import React, {ChangeEvent} from 'react';
import './Person.css';

interface PersonTypes {
    name: string;
    age: number;
    children?:string;
    click?:()=> void;
    changed?:(event: ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    hobby?: string;
    
    
};

const person = (props:PersonTypes ) => {
return( 
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I'm a {props.age} !</p>
            {
                props.hobby ?
                    <p>{props.hobby}</p> :
                    null
            }
            <input id={props.id} type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
 };

 export default person;  