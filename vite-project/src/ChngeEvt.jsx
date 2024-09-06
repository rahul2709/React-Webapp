import React, {useState} from 'react';

function ChngeEvt(){
 
    const [name,setName] = useState("Guest");
    const[shipping, setShipping] = useState();
    function handleChange(e){
        setName(e.target.value);
    }

    function HandleShipping(e){
        setShipping(e.target.value);
    }

    return(<>
            <input value={name} onChange={handleChange}/>
            <p>Name:{name}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping==="Pick Up"}
                 onChange={HandleShipping}></input>
                Pickup
            </label>
            <label>
            <input type="radio" value="Delivery" checked={shipping==="Delivery"}
                 onChange={HandleShipping}></input>
                Delivery
            </label>
            <p>Shipping:{shipping}</p>
           </>);
}

export default ChngeEvt