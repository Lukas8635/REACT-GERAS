import React from 'react';
import styleClasses from './Cockpit.module.css'
import {PersonStateInterface} from '../../containers/App'
import {PersonTypes} from '../Persons/Person/Person'

const Cockpit =(props:PersonStateInterface)=> {

    const classes = [];

    let btnClasses = [];

    if(props.showPersonState){
        btnClasses.push(styleClasses.Red);
    }   

    


    if(props.persons.length <= 2){
        classes.push(styleClasses.red);//classes = ['red']
    }
    if(props.persons.length <= 1 ){
        classes.push(styleClasses.bold);//classes =['red','bold']
    }


    return(
        <div className = {styleClasses.Cockpit}>
            <h1 >Hi i'm a React App</h1>
            <p className={classes.join(' ')}>This is realy working</p>

                <button 
                className={btnClasses.join(' ')}
                onClick={props.clicked}>  

                    Swich button 
                        
                </button>
        </div>
    ); 
}

export default Cockpit;