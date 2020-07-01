import React,{ChangeEvent} from 'react';

import {PersonTypes} from './Person/Person';
import Person from './Person/Person';





const persons = (props:PersonTypes[] )=> props.persons.map((person: {id:string; hobby: string | undefined; name: string; age: number; }, index: any) => {
        return <Person

            id={person.id}
            clicked= {()=>props.clicked(index) }
            hobby={person.hobby}
            key={person.id}
            name={person.name }
            age={person.age }
            changed={(event)=>props.changed(event)}
             />
             
     })


export default persons;