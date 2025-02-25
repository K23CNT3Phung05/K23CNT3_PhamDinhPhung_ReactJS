import React, { Component } from "react";

class PdpEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            PdpSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    PdpHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.PdpSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
       
        this.setState({
            PdpSelectCheckBox:selectedOptions
        });
    }

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.PdpSelectCheckBox.includes("Apple")}
              onChange={this.PdpHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.PdpSelectCheckBox.includes("Banana")}
              onChange={this.PdpHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.PdpSelectCheckBox.includes("Orange")}
              onChange={this.PdpHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PdpEventForm4;
