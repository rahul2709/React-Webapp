import React, {useState} from 'react';

function ArrayMod(){

    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(foods=>[...foods,newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!== index));
    }

    return(<div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index)=><li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button on onClick={handleAddFood}>Add Food</button>
           </div>
       );

}

export default ArrayMod