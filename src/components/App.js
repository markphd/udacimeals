import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import { connect } from 'react-redux'

class App extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        Hello world
      </div>
    )
  }
}

function mapStateToProps(calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.assign({}, calendar[day])
  }
}


export default App