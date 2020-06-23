import React from 'react';
import './App.css';
import Person from './Person/Person'


const App: React.FC = () =>{
 
  return(
    <div className="App">
      <h1>Hi i'm the React App</h1>
      <p>This is realy working</p>
      <button>Swich button</button>
      <Person name="Alibaba" age="50" />
      <Person name='Bakii' age="55"> My hobbies: Racing. </Person>
      <Person name='Aladin' age="99" />
    </div>
  );
  
};

export default App;