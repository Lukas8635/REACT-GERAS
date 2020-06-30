import React from 'react';



interface ValidationInterface {
    inputLenght:number;

}

const validation = (props:ValidationInterface)=>{

    let valifdationMessage = 'Text long enough';

    if(props.inputLenght <= 5){
        valifdationMessage ='Text too short';
    }



    return(
        <div>
         <p>{valifdationMessage}</p>
        </div>

        
    )
}

export default validation;