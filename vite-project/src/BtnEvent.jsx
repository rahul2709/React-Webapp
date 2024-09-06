
function BtnEvent(){

    const handleClick = (e) => e.target.textContent="HI";
      
    return (<button onClick={(e) => handleClick(e)}>Click Me</button>);
}
export default BtnEvent