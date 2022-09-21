import React from "react";

class Head extends React.Component{
    render(){
        return(
            <div>
                <h1>babik lu ya</h1> 
            </div>
        )
    }
}
class Tail extends React.Component{

    render(){
        return(
            <div>
                <h1>daud ajg</h1> 
            </div>
        )
    }
}

export default class Ape extends React.Component{
    state={
        visible: true
    }

    render(){
        const slider= this.state.visible ? <Head/> : <Tail/>
        return(
            <div>
                {slider}
                    <button onClick={ ()=> this.setState({visible: !this.state.visible})}> ganti </button>
            </div>
        )
    }
}

