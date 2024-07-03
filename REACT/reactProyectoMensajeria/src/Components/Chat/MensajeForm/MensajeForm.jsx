import React from 'react'
import './MensajeForm.css'


export const MensajeForm = ({submitMensaje}) => { 

  const handleSubmit = (e) => {
    e.preventDefault()
    submitMensaje(e.target[0].value)
    e.target.reset()
    console.log(e)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='input-mensaje'
          type="text"
          placeholder="Escribe un mensaje"
        />
        <button className='boton-mensaje' type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default MensajeForm
