import React from 'react'
import { ChatScreen } from './Screens'
import { Route, Routes } from 'react-router-dom'
import { ChatList } from './Screens/ChatList'
import { contactos } from './index'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<ChatList/>}/>
      {contactos.map((contacto, index) =>{
      return(<Route path={`/chat/${contacto.id}`} element = {<ChatScreen datos={contacto}/>} key={index}/>)
      })
      }
    </Routes>
  )
}

export default App
