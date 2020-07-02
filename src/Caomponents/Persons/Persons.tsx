import React,{ChangeEvent} from 'react';

import  Persons, {PersonTypes} from './Person/Person';
import Person from './Person/Person';


interface PersonsInterface{
        persons: PersonTypes[];
        clicked:(event: React.MouseEvent, personIndex: number ) => void;
        changed:(event: React.ChangeEvent<HTMLInputElement>) => void ;
}



const persons = (props:PersonsInterface )=> props.persons.map((person:PersonTypes,personIndex: number) => {
        return <Person

            id={person.id}
            clicked={ (event: React.MouseEvent) => props.clicked(event, personIndex )  }
            hobby={person.hobby}
            key={person.id}
            name={person.name }
            age={person.age }
            changed={(event)=>props.changed(event)}
             />
             
     })


export default persons;