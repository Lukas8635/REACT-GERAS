import React from 'react';
import './UserOutput.css';


interface UserOutProps  {
    userName?:string;
    id?:string;
}

const userOutput = (props:UserOutProps)=> {
    return  (
        <div className='OutputStyle'>
            <p>UserName:{props.userName}</p>
            <p>I hope I'll be ovewritten</p>
        </div>
    )
} 



export default userOutput;