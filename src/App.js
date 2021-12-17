//import { useState } from 'react'  
import MovieList from './components/MovieList'
import Header from './components/Header'
import Sessions from './components/Sessions'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function App() {

  return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<MovieList/>}/>
            <Route path='/sessions/:idMovie' element={<Sessions/>}/>
        </Routes>
      </BrowserRouter>

  )
}



