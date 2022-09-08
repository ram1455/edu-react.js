import React from "react";

class ClassComponent extends React.Component{
    state = {
        value : 0
    }

    HandlePlus = () => {
        this.setState({value : this.state.value + 1})
    }

    HandleMinus = () => {
        if ( this.state.value >0 ) {
            this.setState({value : this.state.value -1})
        }

    }

    render(){
        return(
            <div>
                <h1>HA 1 KELASSS {this.props.nama}</h1>
                <button onClick={this.HandleMinus} >-</button>
                <span>{" "} {this.state.value} {" "}</span>
                <button onClick={this.HandlePlus}>+</button>
            </div>
        )
    }
}

export default ClassComponent;