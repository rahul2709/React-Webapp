import React, { useState } from 'react';

function MyComp(){
    const [name,setName] = useState("Test");
    const [age,setAge] = useState(0);

    const handleClick = () => {
        setName("Rahul");
    };
    const handleAge = () => {
        setAge(age+1);
    };


    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={handleClick}>Click Me</button>
            <p>Name:{age}</p>
            <button onClick={handleAge}>Click Me</button>
        </div>
    );
}
export default MyComp