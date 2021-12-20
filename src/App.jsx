import MovieList from './components/MovieList'
import Header from './components/Header'
import Sessions from './components/Sessions'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Seats from './components/Seats';

import Sucess from './components/Sucess';

export default function App() {

  return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<MovieList/>}/>
            <Route path='/sessoes/:idMovie' element={<Sessions/>}/>
            <Route path='/assentos/:idSession' element = {<Seats/>} />
            <Route path='/sucesso' element = {<Sucess/>} />
        </Routes>
      </BrowserRouter>

  )
}



