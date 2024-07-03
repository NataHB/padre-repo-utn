import React from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'
import './ChatScreen.css'
import { useState } from 'react'

export const ChatScreen = () => {
  const MOOK_MENSAJES = [
    {
        author: 'yo',
        text: 'Hola sos pepe?',
        estado: 'visto',
        day: 'hoy',
        hour: '13:15',
        id: '1'
    },
    {
        author: 'pepe',
        text: 'Si soy',
        estado: 'visto',
        day: 'hoy',
        hour: '13:16',
        id: '2'
    },
    {
        author: 'yo',
        text: 'Sos real pepe? OMG',
        estado: 'visto',
        day: 'hoy',
        hour: '13:17',
        id: '3'
    }
]

const [mensajes, setMensajes] = useState(MOOK_MENSAJES);

  const addMensaje = (mensajeNuevo) => {
    setMensajes([...mensajes, {
      author: 'yo',
      text: mensajeNuevo,
      estado: 'visto',
      day: 'hoy',
      hour: '13:18',
      id: mensajes.length + 1
  }] )
  }

  return (
    <>
      <ChatHeaderInfo/>
    <div className='chat'>
        <ListaMensajes lista={mensajes}/> 
    </div>
      <MensajeForm submitMensaje={addMensaje}/>
    
    </>
  )
}
