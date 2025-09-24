import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={5}/>
      </div>
    )
  }
}
