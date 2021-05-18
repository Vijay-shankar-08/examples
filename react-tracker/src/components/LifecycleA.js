import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

 class LifecycleA extends Component {
     constructor(props){
         super(props)
         this.state = {
             name : "vijay"
         }
     }
     static getDerivedStateFromProps(props, state) {     //return new state or null 
         console.log("lifecycle getderived");
         return null;
     }

     componentDidMount(){
         console.log("lifecycle did mount");

     }
    render() {
        console.log("render lifecycle")
        return (
            <div>
                <h1>{this.state.name}</h1>
                {/* <LifecycleB /> */}
            </div>
        )
    }
}

export default LifecycleA
