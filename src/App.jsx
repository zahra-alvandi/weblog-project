import React from 'react'
import Header from './Components/Header/Header'
import Article from './Components/Article/Article'
import Footer from './Components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className='flex flex-col mx-60'>
      <Header></Header>

      <Article></Article>

      <Footer></Footer>
    </div>
  )
}
