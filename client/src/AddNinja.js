import React, {Component} from 'react'

class AddNinja extends Component{
state={
    name: null,
    age: null,
    belt: null
}
handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
}
handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
    this.props.addNinja(this.state);
    this.setState({
        name: null,
        age: null,
        belt: null
    })
    e.target.name.value= '';
    e.target.age.value= '';
    e.target.belt.value= '';
    
}
render(){
return(
    <div>
      <div> <h3>Type in the info of this class's Ninjas </h3></div>
      <h3>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name"> Name: </label>
            <input type ="text" id="name" onChange={this.handleChange} />
            <label htmlFor="age"> Age: </label>
            <input type ="text" id="age" onChange={this.handleChange} />   
             <label htmlFor="belt"> Belt: </label>
            <input type ="text" id="belt" onChange={this.handleChange} />
            <br />
            <br />
            <button>Add Ninja</button>
        </form>
        </h3>
    </div>
);
}
}

export default AddNinja;