import React from 'react';
import './App.css';
import Person from './Person/Person'

const App: React.FC = () =>{
  return(
    <div className="App">
      <h1>Hi i'm the React App</h1>
      <p>This is realy working</p>
      <Person name='Mali' age="22" />
      <Person name='Bakii' age="55"> </Person>
      <Person name='Aladin' age="99" />
    </div>
  );
};

export default App;