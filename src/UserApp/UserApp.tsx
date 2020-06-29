import React ,{useState, ChangeEvent } from 'react';
import UserInput from '../UserInput/UserInput';
import UserOutput from '../UserOutput/UserOutput';


interface User{
    name:string;
    id: string;
    
}


const App = ()=>{
    

    const [userState, setUsersState]=useState<User[]>([
       
            {name: 'Supermax', id:'1'},
            {name: 'Supermax', id:'2'},
            {name: 'Test3', id:'3'}        
        
    ]);
    const userNameChangedHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        
         setUsersState ([
             { name:event.target.value , id:'1'},
             { name:event.target.value , id:'2'},
             { name: 'Test3', id:'3' }
         ]);
    }
  
    return (
        <div>
            <ol>
                <li>11111111111111111</li>
                <li>22222222222222222</li>
                <li>33333333333333333</li>
                <li>44444444444444333</li>
                <li>55555555556333333</li>
                <li>66666666666666666</li>
                <li>77777777777777777</li>
                <li>89888888888888888</li>
                <li>99999999999999999</li>
                <li>10101110011010110</li>
            </ol>

            <UserInput  
                changed={userNameChangedHandler}
                currentName={userState[0].name}/>
            {
                userState.map(user =>
                     <UserOutput  userName={user.name}  key={user.id} />
                    )
            } 
      
        </div>
            );
    }

export default App;




    