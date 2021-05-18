import PropTypes from 'prop-types'

import React, { Component } from 'react'

export class Timer extends Component {

    constructor (props) {           //without props it will run here
        console.log("constructor")
        super();
        // console.log(this.prop)     //when we want to use props inside the constructor 
                                //we want to pass the props inside the super
        // this.setState = {
        //     name : "Timer"   //it says the name will have null value error
        // }
        this.state = {
            date : new Date()
        };
        
}
    // componentWillMount(){
    //     console.log('will mount')
    // }

    componentDidMount() {
        console.log("did mount");
        
        // this.state = {date : new Date()};  //no direct mutation for state
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    };

    tick() {
        
        this.setState({
            date : new Date()
        });
    };

    componentDidUpdate() {
        console.log("update")
    }

    componentWillUnmount() {
        console.log("unmount")
        clearInterval(this.timerID);
    }

    changeState = () => {
        this.setState({
            name : "changed to tick"
        })
    }

    render() {
        console.log("render mount")
        console.log(this.state.name)
        return (
            
            <div>
                <h1>{this.props.name}</h1>  
                  
    
                {/* <h1>Timer</h1> */}
                
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <button onClick = {this.componentWillUnmount.bind(this)}>click to stop</button>
                <button onClick = {this.changeState}>change name</button>
                {/* <button onClick = {this.tick}>change</button> */}
            </div>
        )
    }
}

Timer.defaultProps = {
    name : "Timing"
}

Timer.propTypes = {
    name : PropTypes.string,
}


export default Timer
