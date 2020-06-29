import React, {ChangeEvent, useState} from 'react';
import './App.css';
import { render } from 'react-dom';
import Person from './Person/Person';


interface PersonInterface {
    name: string;
    age: number;
    id: string;
    hobby?: string;
}

interface PersonStateInterface {
    persons: PersonInterface[]
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

  
    const stylez = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
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
  

      return(
        <div className="App">
            <h1>Hi i'm a React App</h1>
            <p>This is realy working</p>
            <button 
                style={stylez}
                onClick={togglePersonsHandler}>Swich button
            </button>
              
            { showPersonsState === true ?
              <div>
                  {
                      personsState.persons.map((person, index) => {
                         return <Person
                             click= {()=> deletePersonHandler(index) }
                             hobby={person.hobby}
                             key={person.id}
                             name={person.name }
                             age={person.age }
                             changed={nameChangeHandler}
                              />
              
                      })
                  }
              </div> : null 
            }

        </div>
      );
};
export default App; 