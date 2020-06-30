import React ,{ChangeEvent, useState} from'react';
import '../App.css';

import Validation from '../Validation/Validation';
import Char from '../Char/Char'




interface Inputas {
    
    onChange?:(event: ChangeEvent<HTMLInputElement>) => void;
    userInput:string;
    
    
   
    
}




const Apsas:React.FC = ()=> {
   
    const [inputState, setInputState]= useState<Inputas> ({
       userInput: ''

   })

   const inputChangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
       setInputState({userInput:event.target.value});
        
}
    const deleteCharHandler = ( index:number ) =>{
        const text = inputState.userInput.split('');
        text.splice(index, 1); 
        const updatedText = text.join('');
        setInputState({userInput:updatedText});

    }
  
        const charList = inputState.userInput.split('').map((ch, index) =>{
            return <Char 
            character ={ch}
            key={index}
            clicked ={()=>deleteCharHandler(index)}/>
        })
     
        return (
             <div>
                 <ol>
                     <li>11111111111111111111</li>
                     <li>22222222222222222</li>
                     <li>333333333333333333333</li>
                     <li>44444444444444444</li>
                     <li>5555555555555555</li>
                     <li>666666666666666</li>
                 </ol>
                 <p>Hint: Keep im mind that JavaScript strings are basically arrays!</p>
                 <hr/>
                 <input type="text" onChange={inputChangeHandler}
                 value={inputState.userInput}/>
                 <p>{inputState.userInput}</p> 
                 <Validation inputLenght={inputState.userInput.length}/>
                 {charList}
             </div>
         )
     
}

export default Apsas;

