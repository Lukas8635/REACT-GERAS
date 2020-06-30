import React, {ChangeEvent} from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv =  styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;


    @media (min-width:500px){
        
            width:450px;
    }
    `;

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
        
       <StyledDiv>
            <p onClick={props.click}>I'm a {props.name} and I'm a {props.age} !</p>
            {
                props.hobby ?
                    <p>{props.hobby}</p> :
                    null
            }
            <input id={props.id} type="text" onChange={props.changed} value={props.name}/>
            </StyledDiv>
    )
 };

 export default person;  