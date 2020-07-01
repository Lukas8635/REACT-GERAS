import React, {ChangeEvent} from 'react';

import styleClasses from '../../../containers/App.module.css';

export interface PersonTypes {
    persons?: any;
    name?: string;
    age?: number;
    children?:string;
    clicked?:(e: React.MouseEvent ) => void;
    changed?:(event: React.ChangeEvent<HTMLInputElement>) => void ;
    id?: string;
    hobby?: string;
};

const Persons=(props:PersonTypes ) =>  {
    return( 
        
        <div className ={styleClasses.DivStyle}>
             <p onClick={props.clicked}>I'm a {props.name} and I'm a {props.age} !</p>
                {
                    props.hobby ?
                        <p>{props.hobby}</p> :
                        null
                }
             <input id={props.id} type="text" onChange={props.changed} value={props.name}/>
        </div>
     )
}




 

export default Persons;  
