import React, {ChangeEvent} from 'react';

import styleClasses from '../App.module.css';

interface PersonTypes {
    
    name: string;
    age: number;
    children?:string;
    click?:()=> void;
    changed?:(event: ChangeEvent<HTMLInputElement>) => void;
    id: string;
    hobby?: string;
    
    
};


const Person=(props:PersonTypes ) =>  {
    return( 
        
        <div className ={styleClasses.DivStyle}>
             <p onClick={props.click}>I'm a {props.name} and I'm a {props.age} !</p>
             {
                 props.hobby ?
                     <p>{props.hobby}</p> :
                     null
             }
             <input id={props.id} type="text" onChange={props.changed} value={props.name}/>
             </div>
     )
}




 

 export default Person;  