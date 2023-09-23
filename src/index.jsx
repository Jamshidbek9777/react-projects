import React from "react";
import "./style.css";

class Tally extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
     if(this.state.count>0){
        this.setState({ count: this.state.count - 1 });
     }
    };
     const reset = ()=>{
        this.setState({count: 0})
     }
    return (
      <div className="container">
        <h1 className="title">Tally Counter</h1>
        <div className="screen"><h1>Count: {this.state.count}</h1></div>
       <div className="buttons">
        <button className="minus-button" onClick={minus}>-</button>
       <button className="plus-button" onClick={plus}>+</button>
       </div>
       <button className="reset" onClick={reset}>Reset</button>
      </div>
    );
  }
}
export default Tally;
