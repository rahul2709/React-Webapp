
function List(){

    const fruits = [{id:1, name:"apple", calories:10},
                    {id:2,name:"banana",calories:10},
                    {id:3,name:"pineapple",calories:10},
                    {id:4,name:"grapes",calories:10}];

    const lowcalFruit = fruits.filter(fruit=>fruit.calories<100);

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;{fruit.calories}</li>);

   
    
    return(<ol>{listItems}</ol>);
     
}
export default List