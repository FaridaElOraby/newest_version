import React, { Component } from 'react';
import Ninja from './Ninja';
import Old from './Old'; 
import AddNinja from './AddNinja';

class Home extends Component {
  state = {
    caption: '',
    ninjas: [
      {name: 'Hany', age:30, belt: 'black', id:1},
      {name: 'Razan', age:20, belt: 'black', id:2},
      {name: 'Tia', age:25, belt: 'black', id:3}
    ]
  }
  handleCopy = (e) => {
    this.setState({
      caption: 'Do not copy and try being original for once'
    })
    console.log(this.state.caption);
  }
 
  addNinja =(ninja) =>{
      console.log(ninja);
      ninja.id= Math.random()*10;
      let ninjas2 = [...this.state.ninjas, ninja]    
      this.setState({
        ninjas: ninjas2
      })
  }
  deleteNinja =(id) =>{
    console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id!== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  render() {
    return (
      <div className="App">
              <h1>Walk-in Karate Class</h1>
      <AddNinja addNinja={this.addNinja}/>
        <Ninja deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <h1 onCopy={this.handleCopy}>What we think, we become</h1>
        <h2>{this.state.caption}</h2>

    </div>
    );
  }
}

export default Home;