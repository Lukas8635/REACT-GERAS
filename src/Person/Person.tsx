import React from 'react';



const person = (Props:any) => {
return <div>
            <p>I'm a {Props.name} and I'm a {Props.age} !</p>
            <p>{Props.children}</p>
        </div>
 };

 export default person; 