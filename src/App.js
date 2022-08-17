import React, { Component } from 'react'
import Feed from './Feed'
import ToDoList from './ToDoList'
import Home from './Home'
import Nav from './Nav'
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (

      <BrowserRouter>

      <div className='main'>

        <Nav />

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ToDoList' element={<ToDoList/>}/>
        <Route path='/Feed' element={<Feed/>}/>
        </Routes>

      </div>

      </BrowserRouter>

    )
  }
}
