import React from 'react'
import css from './Footer.module.css'
import foot from '../../images/footer.png'


export const Footer = ({titl,text}) => {
    return <div className={css.footer}>
           <hr/>
           <img className={css.foto} src={foot} alt=""/> 
          
           <div className={css.foot}>
                <h5 className={css.one} >{titl}</h5>
                 {/* <span className={css.text} >{text}</span> */}
           </div>
           
        </div>
    
}


