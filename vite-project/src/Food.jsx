function Food(){
    
    const f1 = "Biryani";
    const f2 = "Dosa";
    return(
      <ul>
        <li>Noodles</li>   
        <li>{f1}</li>
        <li>{f2.toUpperCase()}</li>
      </ul>  
    );
}

export default Food