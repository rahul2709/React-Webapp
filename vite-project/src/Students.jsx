import Proptypes from 'prop-types'

function Student(props){

    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent?"Yes":"No"}</p>
        </div>
    );


}

Student.prototype ={
    name:Proptypes.string,
    age:Proptypes.number,
    isStudent:Proptypes.bool,
}

export default Student
