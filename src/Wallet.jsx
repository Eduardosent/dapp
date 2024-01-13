import React from 'react'
import './Wallet.css'
import { Web3 } from 'web3'
import { useState } from 'react'

export const Wallet = () => {

    const [wallet, setWallet] = useState("")
    const [clave, setClave] = useState("")
    const [display, setDisplay] = useState("none")

    const web3 = new Web3("https://rpc.sepolia.org")

    const generateWallet = () =>{
        const newWallet = web3.eth.accounts.wallet.create(1)
        setWallet(newWallet[0].address)
        setClave(newWallet[0].privateKey)
        setDisplay('')
        alert('acabas de generar una wallet (Ahora puedes guardarla con la Clave Privada y usar esta wallet por ejemplo en Metamask')
    }

  return (
    <>
    <button className='buttonCreate' onClick={generateWallet}>Crear Ethereum Wallet</button>
    <h3>Tu Nueva Wallet:</h3>
    <div className='createWallet'>
        <p>{wallet}</p>
    </div>
    <div className={`advertencia ${display}`}>
        <img src="./adv.png" alt="advertencia" />
        <p>Puedes copiar y guardar esta wallet</p>
    </div>
    <h3>Tu Clave Privada:</h3>
    <div className='createWallet'>
        <p>{clave}</p>
    </div>
    <div className={`advertencia ${display}`}>
        <img src="./adv.png" alt="advertencia" />
        <p>Con la clave privada podras recuperar tu wallet y conectarla con un gestor de Wallets como Metamask</p>
        <p>Guardala y no la compartas con nadie</p>
    </div>
    </>
  )
}
