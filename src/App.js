import React, { Component } from 'react'
import Feed from './views/Feed'
import Signup from './views/Signup'
import Login from './views/Login'
import ToDoList from './views/ToDoList'
import Home from './views/Home'
import Nav from './components/Nav'
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default class App extends Component {


  logMeIn = (user) => {
    this.setState({
      user: user
    })
  }




  render() {
    return (

      <BrowserRouter>

        <div className='main'>

          <Nav />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ToDoList' element={<ToDoList />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Login' element={<Login logMeIn={this.logMeIn} />} />
            <Route path='/Feed' element={<Feed />} />
          </Routes>

        </div>

      </BrowserRouter>

    )
  }
}
