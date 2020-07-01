import React, { ChangeEvent, useState } from 'react';
import styleClasses from './App.module.css';
import { render } from 'react-dom';
import Person from './Person/Person';


interface PersonInterface {
    name: string;
    age: number;
    id: string;
    hobby?: string;
    

}

interface PersonStateInterface { 
    // [x: string]: any;
    persons: PersonInterface[];
    showPersonState?:boolean;
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
            personas =(
              <div >
                 {
                      personsState.persons.map((person, index) => {
                         return <Person 
                            id={person.id}
                             click= {()=> deletePersonHandler(index) }
                             hobby={person.hobby}
                             key={person.id}
                             name={person.name }
                             age={person.age }
                             changed={(event)=>nameChangeHandler(event)}
                              />
                              
                      })
                  
                    }
              </div> ) 
                     bntClasses.push(styleClasses.Red);
                    }
                   
            
                
    const classes = [];
    if(personsState.persons.length <= 2){
        classes.push(styleClasses.red);//classes = ['red']
    }
    if(personsState.persons.length <= 1 ){
        classes.push(styleClasses.bold);//classes =['red','bold']
    }
    return(
        
        <div className={styleClasses.App}>
            
            <h1 >Hi i'm a React App</h1>
            <p className={classes.join(' ')}>This is realy working</p>
           
                    <button
                       className={bntClasses.join(' ')}
                        onClick={togglePersonsHandler}>    
                        Swich button 
                    </button>
                    {personas}
        </div>
        
    );

};
export default App; 