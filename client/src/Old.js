import React, {Component} from 'react';

class Old extends Component {
    state = {name: 'Farida', age: 21}
    handleClick = (e) => {
        // console.log(e.target);
        console.log(this.state);
       }
       handleMouseOver(e){
         console.log(e.target, e.pageX);
       }
       handleCopy(e){
         console.log("Try being original for once");
       }
       handleChange = (e) => {
         this.setState({
           name: e.target.value
         })
       }
       handleSubmit = (e) => {
         e.preventDefault();
         console.log("form submitted", this.state.name);
       }
    render(){
        return(
            <div className="old">
                    <h1>Downloaded</h1>
                    <p>{Math.random() *100} %</p>
                    <p> Your name is { this.state.name} and you are {this.state.age} </p>
                     <button onClick={this.handleClick}> Click Me </button>
                     <button onMouseOver={this.handleMouseOver}>Hover Me </button>
                    <p onCopy={this.handleCopy}>What we think, we become</p>

                    <form onSubmit={this.handleSubmit}> <input type = "text" onChange={this.handleChange}/>
                      <button> Submit </button> 
                      </form>
                        </div>
        );}}
export default Old;