import React from 'react'

const App = () =>{
    const props ={
      likes: 3,
      fecha: '1 hour',
      colores: ['#36BA48', '#36BA97', '#36BA86', '#36BA25']
    }
  return (
    <>
    <ColorCard 
    propiedades={props}/>
    </>
  )
}
export default App

const ColorCard = ({propiedades}) =>{
  const {likes, fecha, colores} = propiedades
  return (
    <div className="container-cards">
      <div className="color-card">
          <div className="colors">
            <div className="color" style={{backgroundColor:colores[0]}}></div>
            <div className="color" style={{backgroundColor:colores[1]}}></div>
            <div className="color" style={{backgroundColor:colores[2]}}></div>
            <div className="color" style={{backgroundColor:colores[3]}}></div>
          </div>
          <div className="card-controls">
            <button type="button" className="btn-like" id="button" name="button"><i className="bi bi-heart"></i><span>{likes}</span></button>
            <span className="time-ago">{fecha}</span>
          </div>
      </div>
    </div>
    
  )
}

