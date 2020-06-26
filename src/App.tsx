import React , { Component, ChangeEvent } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import { render } from '@testing-library/react';
import UserOutput from './UserOutput/UserOutput';


  
class App extends Component{
  state={
    username:'supermax'
  }

 usernameChangedHandler=(event:ChangeEvent<HTMLInputElement>)=> {
    this.setState({username:event.target.value})
  }


  render(){
    return(
      <div className='OutputStyle'>
        <UserInput changed={this.usernameChangedHandler} name={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='max'/>
      </div>
    );
  }
}

export default App;