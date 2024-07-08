import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Obtenha ofertas excluivas no email</h1>
      <p>Increva-se para nossas novidades e atualizações</p>
      <div>
        <input type="email" placeholder='Seu email' />
        <button>Inscrever-se</button>
      </div>
    </div>
  )
}

export default NewsLetter
