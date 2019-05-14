import React, { Component } from 'react';
import './App.css';
import { FaLightbulb, FaToggleOn} from 'react-icons/fa'

class App extends Component {
  constructor(){
    super()
    this.state = {
      OnLeft:true,
      OnCenter:true,
      OnRight:true,
      
      
  
    }
    this.switchOnLeft= this.switchOnLeft.bind(this)
    this.switchOnCenter= this.switchOnCenter.bind(this)
    this.switchOnRight= this.switchOnRight.bind(this)
   

  }
  
 switchOnLeft() {
    this.setState(state => ({
      OnLeft:!state.OnLeft
    }));
  }

  switchOnCenter() {
    this.setState(state => ({
      OnCenter:!state.OnCenter
    }));
  }
  switchOnRight() {
    this.setState(state => ({
      OnRight:!state.OnRight
    }));
  }
 
  
   
  render() {
  
    return (
      <div id="condi-render" className="container-fluid mt-3 ">
        <div className="row justify-content-between">

        {this.state.OnLeft?<h1 id="left-light-on" className="text-warning  text-left  col-4"><FaLightbulb /></h1> :
          <h1 id =" left-light-off"className="text-left  col-4"><FaLightbulb /></h1>}
         

         {this.state.OnCenter? <h1  id="centred-light-on" className="text-success text-center  col-4"><FaLightbulb /></h1>
          :<h1 id="centred-light-off" className="text-center col-4"><FaLightbulb /></h1>} 
        {this.state.OnRight?  <h1 id="right-light-on" className="text-danger text-right col-4"><FaLightbulb /></h1> 
        :  <h1 id = "right-light-off" className="text-right col-4"><FaLightbulb /></h1> } 
         
  
        </div>
        <div className="mt-4 text-center">
        <div className="alert alert-warning">
           the left-light is {this.state.OnLeft
            ? <p className="badge badge-success">on</p> : <p className="badge badge-danger">off</p> }
          </div>
          <div className="alert alert-success">
           the centered-light is {this.state.OnCenter
            ? <p className="badge badge-success">on</p> : <p className="badge badge-danger">off</p> }
          </div>
          <div className="alert alert-danger">
            the right-light is {this.state.OnRight
            ? <p className="badge badge-success">on</p> : <p className="badge badge-danger">off</p> }
          </div>
          

          <button onClick={this.switchOnLeft} ><FaToggleOn/></button>
          <button  onClick={this.switchOnCenter} ><FaToggleOn/></button>
          <button  onClick={this.switchOnRight} ><FaToggleOn/></button>
        </div>
         
      </div>
    );
  }
}

export default App;
