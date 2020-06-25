import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import { render } from '@testing-library/react';


const App = () => {
  
  const [personsState, setPersonsState] = useState({
    persons:[
          {name:'max', age:28},
          {name:'manu', age:29},
          {name:'aladin', age:26},
          {name:'simba', age:33}
        ]
  });
  
  const switchName = (changingName:string, newName:string)=>{
    let newPersonsState = [...personsState.persons];
    for(let i = 0; i < personsState.persons.length; i++){
      if(newPersonsState[i].name === changingName){
        newPersonsState[i].name = newName;
      }
      
    
  }
  const  switchNameHandrel = (newName:string) =>{
        setPersonsState ({
          persons:[
            {name: newName, age:28},
            {name:'manu', age:29},
            {name:'aladin', age:26},
            {name:'simba', age:35455},
            {name:'aladadas', age:451 }
          ]
        });


        
  };
    return(
      <div className="App">
          <h1>Hi i'm a React App</h1>
          <p>This is realy working</p>
          <button onClick={()=> switchNameHandrel('pasikeite')}>Swich button</button> 
          {personsState.persons.map(person=>{
                 return <Person click={switchNameHandrel.bind(person.name, 'new Name' )} name = {person.name}age={person.age } />  
                })
              }

          {/* <Person
          
              name={personsState.persons[0].name } 
              age={personsState.persons[0].age } /> 
          
          <Person 
              name={personsState.persons[1].name } 
              age={personsState.persons[1].age }
              click = {switchName.bind('max')}>My hobbie: fishing
          </Person> 
          <Person  
         
              name={personsState.persons[2].name }
              age={personsState.persons[2].age } />
           
          <Person 
              name={personsState.persons[3].name }
              age={personsState.persons[3].age } />  */}
           
           
             
          
      </div>
      );
  };
}
export default App; 




  // state = {
  //   persons:[
  //     {name:'max', age:28},
  //     {name:'manu', age:29},
  //     {name:'aladin', age:26},
  //     {name:'simba', age:33}
  //   ]
  // }

  // switchNameHandrel = ()=>{
  //   // console.log('Was clicked ');
  //   this.setState({
  //     persons:[
  //       {name:'maximilian', age:28},
  //       {name:'manu', age:29},
  //       {name:'aladin', age:26},
  //       {name:'simba', age:35455},
  //       {name:'aladadas', age:451 }
  //     ]
  //   })}

