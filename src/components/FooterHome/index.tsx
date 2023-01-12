import React from 'react'
import { FooterBackground } from './style'


const FooterHome = () => {
  return (
    <FooterBackground>
      <div className='one-footer'>
        <img src="./static.png" alt="Estatísticas" />
        <h2>Torneios em andamento</h2>
      </div>
      <div className='two-footer'>
        <img src="./player.png" alt="Jogadores" />
        <h2>Cadastre os seus jogadores</h2>
      </div>
      <div className='three-footer'>
        <img src="./local.png" alt="Localização" />
        <h2>Gerencie torneios em tempo real</h2>
      </div>
    </FooterBackground>
    
  )
}

export default FooterHome