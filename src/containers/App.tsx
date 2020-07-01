import React, { ChangeEvent, useState } from 'react';
import styleClasses from '../containers/App.module.css';
import {PersonTypes} from '../Caomponents/Persons/Person/Person'
import { render } from 'react-dom';

import Persons from '../Caomponents/Persons/Persons';
import Cockpit from '../Caomponents/Cockpit/Cocpit';





export interface PersonStateInterface { 
    persons: PersonTypes[];
    showPersonState?:boolean;
    clicked?:()=>void;
}

const App  = () => {

  const [personsState, setPersonsState] = useState<PersonStateInterface>({
        persons:[
            { name:'max', age:28, id: '1', hobby: 'My hobby is Fishing' },
            { name:'manu', age:29, id: '2' },
            { name:'aladin', age:26, id: '3' },
            { name:'simba', age:33, id: '4' }
        ],
  });

  const [showPersonsState, setShowPersonsState] = useState(false);

 
  
  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
      const target = event.target;
      const targetValue = target.value;
      const targetId = target.getAttribute('id');
      let newState;

      setPersonsState((oldPersons) => {
          let findingPerson;

          for (let i = 0; i < oldPersons.persons.length; i++) {
              if (oldPersons.persons[i].id === targetId) {
                  findingPerson = oldPersons.persons[i];
              }
          }

          newState = {
              persons: [
                  ...oldPersons.persons,
              ]
          };

          if (findingPerson) {
              findingPerson.name = targetValue;

                newState = {
                    persons: [
                        ...oldPersons.persons,
                        
                    ]
                };
            }

          return newState
      });
  };
 
  const deletePersonHandler =(personIndex:number) =>{
    const personas = [...personsState.persons];
    personas.splice(personIndex, 1);
    setPersonsState({persons:personas})
  }

  const togglePersonsHandler = () => {
    setShowPersonsState((prevState => {
        const newState = prevState ? false : true;
        return newState;
    }))

    };
     let personas=null;
     let bntClasses = [styleClasses.Button];
        if(showPersonsState){
            personas=<Persons
                 persons={personsState.persons}
                
                 clicked = {deletePersonHandler}
                 changed = {nameChangeHandler}/>
         }

    return(
        
        <div className={styleClasses.App}>
            <Cockpit 
            
            persons={personsState.persons}
            clicked={ togglePersonsHandler}/>
            {personas}
        </div>
        
    );

};
export default App; 