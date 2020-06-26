import React , { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App  = () => {

  const [personsState, setPersonsState] =  useState<any>({
        persons:[
              {name:'max', age:28},
              {name:'manu', age:29},
              {name:'aladin', age:26},
              {name:'simba', age:33}
            ],
        otherState:'some other value',
        showPersons:false
        
        
  });  

  const  switchNameHandrel = (newName:string, ) =>{
        setPersonsState ({
          persons:[
            {name: newName, age:28},
            {name:'manu', age:29},
            {name:'aladin', age:26},
            {name:newName, age:35455},
            {name:'aladadas', age:451 }
          ]
        });

  };
  
  const nameChangeHandler = (event:any)=>
    setPersonsState ({
      persons:[
        {name: 'max', age:28},
        {name:event.target.value , age:29},
        {name:'aladin', age:26},
        {name:'tom', age:35455},
      ],
      
    }); 
    {

    const stylez = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    } 

  const togglePersonsHandler = () => {
      const doesShow = personsState.showPersons;
      setPersonsState({showPersons:!doesShow})
    } 
  

      return(
        <div className="App">
            <h1>Hi i'm a React App</h1>
            <p>This is realy working</p>
            <button 
                style={stylez}
                onClick={togglePersonsHandler}>Swich button
            </button>
            
            { personsState.showPersons === true ? 
              <div>
              <Person
                  name={personsState.persons[0].name } 
                  age={personsState.persons[0].age } /> 

              <Person 
                  name={personsState.persons[1].name } 
                  age={personsState.persons[1].age }
                  click = {()=>switchNameHandrel.bind('max')}
                  changed={nameChangeHandler}>My hobbie: fishing
              </Person> 

              <Person  
                  name={personsState.persons[2].name }
                  age={personsState.persons[2].age } />
            </div> : null }

        </div>
      );
    }

};
export default App; 
