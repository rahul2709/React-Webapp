import React, {useState,useEffect} from 'react';

function Effect(){
  
    const [count, setCount] = useState(0);


    return(<>
            <p>Count:{count}</p>
            <button>Click</button>
           </>);
}
export default Effect;