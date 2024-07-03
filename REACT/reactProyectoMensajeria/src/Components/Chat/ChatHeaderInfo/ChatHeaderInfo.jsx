import React from 'react'
import './ChatHeaderInfo.css'
import gato from '../../assets/img/gato.jpeg'
import camara from '../../assets/img/video-camara.png'
import telefono from '../../assets/img/telefono.png'
import puntos from '../../assets/img/puntos.png'
import angulo from '../../assets/img/angulo.png'

export const ChatHeaderInfo = () => {
  return (
    <div className="chat-header-info">
      <div className='chat-header'>
        <img src={angulo} alt="angulo"/>
        <img src={gato} alt="gato soldado"/>
        <div>
          <h1 className="perfil-nombre">Bigotes</h1>
          <p className="estado-texto">En línea</p>
        </div>
      </div>
      <div className="iconos">
        <img src={telefono} alt='telefono'/>
        <img src={camara} alt='camara'/>
        <img src={puntos} alt='puntos'/>
      </div>
    </div>
  )
}

export default ChatHeaderInfo
