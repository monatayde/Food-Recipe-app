import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
import Details from './Pages/Details';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <div className= 'min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/recipe-item/:id' element={<Details/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App;
