import { useState } from 'react'
import './App.css'
import { Wallet } from './Wallet'
import { Footer } from './Footer'

function App() {

  return (
    <>
    <h1>Hola Dapp</h1>
    <p style={{color:"white",textAlign:"center",margin:".5rem 0 .5rem 0"}}>(aplicacion descentralizada)</p>
    <div className='ethfather'><img className='svgimg' src="/eth.svg" alt=""/></div>
    <Wallet/>
    <Footer/>
    </>
  )
}

export default App
