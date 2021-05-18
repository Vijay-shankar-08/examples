import React, { Component } from 'react'

 class ChildDerived extends Component {

    constructor(){
        super()
        this.state={
            currentValue:0
        }
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("hook",props,state)  
        return {
            currentValue : props.data*2
        }  
    }
    render() {
        return (
            <div>
                <h1>current Value{this.state.currentValue}</h1>
            </div>
        )
    }
}

export default ChildDerived
