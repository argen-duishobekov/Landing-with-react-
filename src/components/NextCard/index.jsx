import React from 'react'
import css from './NextCard.module.css'
import threeIm from '../../images/three.png'

export  const NextCard = (props) => {
     const {col,tit,im} = props
    return  <div style={{backgroundColor: col}} className={css.nextCard}>
             <hr/>
        <h2>{tit}</h2>
     {/* <img className={css.pic} src={threeIm} alt=""/> */}
        </div>
    
    
}


