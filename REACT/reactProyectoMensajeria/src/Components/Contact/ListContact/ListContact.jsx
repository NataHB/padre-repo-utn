import React from 'react'
import { contactos } from '../../../index'
import { Link } from 'react-router-dom'
import './ListContact.css'

export const ListContact = () => {
    return (
    contactos.map((contacto, index) =>{
        return(
            <Link to={`/chat/${contacto.id}`} key={index}>
                <div className='contacto' key={index}>
                    <img src={contacto.thumbnail} alt="gato"/>
                    <h3>{contacto.nombre}</h3>
                    <p>{contacto.ultima_conexion}</p>
                </div>
            </Link>
        )
    })
    )
}
