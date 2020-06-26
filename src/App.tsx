import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import { render } from '@testing-library/react';
import UserOutput from './UserOutput/UserOutput';
  
const App = () => {
  
  const [personsState, setPersonsState] = useState({
    persons:[
          {name:'max', age:28},
          {name:'manu', age:29},
          {name:'aladin', age:26},
          {name:'simba', age:33}
        ]
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
        
      ]
    }); 
    {

    const stylez = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    } 

      return(
        <div className="App">
            <h1>Hi i'm a React App</h1>
            <p>This is realy working</p>
            <button 
            style={stylez}
            onClick={()=> switchNameHandrel('pasikeite')}>Swich button</button>
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
           
         
        </div>
      );
    }
    
};
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

          /*   */
           

            //   <button onClick={()=> switchName('maxi','pasikeite')}>Swich button</button> 
            // {personsState.persons.map(person=>{
            //       return <Person click={switchNameHandrel.bind(person.name, 'new Name' )} name = {person.name}age={person.age } />  
            //       })
            //     }

             // const switchName = (changingName:string, newName:string)=>{
  //   let newPersonsState = [...personsState.persons];
  //   for(let i = 0; i < personsState.persons.length; i++){
  //     if(newPersonsState[i].name === changingName){
  //       newPersonsState[i].name = newName;
  //     }
  //   }
  // }