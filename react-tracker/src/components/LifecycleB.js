import React, { Component } from 'react'

 class LifecycleB extends Component {
     constructor(props){
         super(props)
         this.state = {
             name : "vijay"
         }
     }
     static getDerivedStateFromProps(props, state) {     //return new state or null
         console.log("Life cycle getderived");
         return null;
     }

     componentDidMount(){
         console.log("lifecycleB did mount");

     }
    render() {
        console.log("render lifecycleB")
        return (
            <div>
                <h1>lifecycleB</h1>
            </div>
        )
    }
}

export default LifecycleB
