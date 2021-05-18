// import Header from "./components/Header"
import React, { Component } from 'react'
// import Tasks from "./components/Tasks"

// import  LifecycleA  from "./components/LifecycleA";
import Timer from './components/Timer';
import State from './components/State';
import Derived from './components/Derived';
class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* <LifecycleA /> */}
        <Timer  name = {234}/>
        <State />
        <Derived />
        
      </div>
    )
  }
}

export default App;
