import React from 'react'
import css from './Know.module.css'
import foto from '../../images/Know.png'

export const Know = ({par}) => {
    return (
        <div className={css.Know}>
             <img className={css.foto} src={foto} alt=""/>
             <p className={css.par} >{par}</p>
             <p className={css.mine}>MDD affects more than 16.1 million <br></br> American adults, or about 6.7%of the U.S. <br></br> population age 18 and older in a given year. <br></br> We at <span className={css.logo}>ThriveTalk </span> can help you.</p>
        </div>
    )
}

 
