import React from 'react'
import { HeaderContact } from '../Components/Contact/HeaderContact/HeaderContact'
import { ListContact } from '../Components/Contact/ListContact/ListContact'
import './ChatList.css'

export const ChatList = () => {
  return (
    <div className='screen'>
        <HeaderContact/>
        <div className='contactos'><ListContact/></div>
        
    </div>)}
