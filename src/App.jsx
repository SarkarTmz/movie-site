import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

function App() {

  return (
    <>
      <div className="app container">
      <BrowserRouter>
      <Header/>
      <MobileNav/>
        <Routes>
        <Route index element = {<Home/>} />
        <Route path='movie/:id' element={<h1>Movie details page</h1>} />
        <Route path='movie/:type' element={<MovieList/>} />
        <Route path='*' element={<h1>Eoor page</h1>} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </>
  )
}

export default App
