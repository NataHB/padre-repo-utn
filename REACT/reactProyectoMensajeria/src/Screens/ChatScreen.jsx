import React from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'
import './ChatScreen.css'
import { useState } from 'react'

export const ChatScreen = ({datos}) => {

  const { nombre, thumbnail, mensajes}= datos
  
const [AcumuladorMensajes, setMensajes] = useState(mensajes);

  const addMensaje = (mensajeNuevo) => {
    setMensajes([...AcumuladorMensajes, {
      author: 'yo',
      text: mensajeNuevo,
      estado: 'no visto',
      day: 'hoy',
      hour: '13:18',
      id: AcumuladorMensajes.length + 1
  }] )
  }

  return (
    <div className='screen'>
      <ChatHeaderInfo nombre={nombre} thumbnail={thumbnail}/>
    <div className='chat'>
        <ListaMensajes lista={AcumuladorMensajes}/> 
    </div>
      <MensajeForm addMensaje={addMensaje}/>
    
    </div>
  )
}
