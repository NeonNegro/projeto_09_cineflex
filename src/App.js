//import { useState } from 'react'  
import MovieList from './components/MovieList'
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {

  //const [screen, setScreen] = useState('Begin');

  //function toFlashCard(){ setScreen('FlashCard')}
  //function toBegin(){ setScreen('Begin')}

  //let screenNow;
  //if(screen === 'Begin') screenNow =  <Begin toFlashCard={toFlashCard}/>
  //if(screen === 'FlashCard') screenNow =  <FlashCard deck={deck} toBegin={toBegin}/>
/* <BrowserRouter>
			<Routes>
				<Route path="/" element={<PaginaPrincipal />}></Route>
				<Route path="/contato" element={<Contato />}></Route>
			</Routes>
		</BrowserRouter> */
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<MovieList/>}/>
            {/* <Route />
            <Route /> */}
        </Routes>
      </BrowserRouter>

  )
}



