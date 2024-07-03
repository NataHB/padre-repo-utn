import React from 'react'
import Contador from './Contador'

const App = () =>{
    const props ={
      likes: 3,
      fecha: '1 hour',
      colores: ['#36BA48', '#36BA97', '#36BA86', '#36BA25']
    }

    const [likes, setLikes] = useState(props)
  return (
    <>
    <ColorCard propiedades={props}/>
    <form>
      <h2>Crea tu carta</h2>
      <div>
        <label></label>
      </div>
    </form>
    <Contador limit={10}/>
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

