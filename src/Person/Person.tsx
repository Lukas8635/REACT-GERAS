import React, {ChangeEvent, CSSProperties} from 'react';
import './Person.css';
import Radium  from 'radium';

interface PersonTypes {
    name: string;
    age: number;
    children?:string;
    click?:()=> void;
    changed?:(event: ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    hobby?: string;
    style?:CSSProperties;
    
    
    
    
    
};


const person = (props:PersonTypes ) => {

   const stilius = {
  "@media (min-width: 500px)":{
    width:"450px"
  }
};
   

    return( 
        <div className="Person" style={stilius}>
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

 export default Radium(person);  