import React from 'react'
import css from './Contact.module.css'
import foto from '../../images/contact.png'


export  const Contact = ({par}) => {
    return (
        <div className={css.contact}>
            <img className={css.foto} src={foto} alt=""/>
            <p className={css.par} >{par}</p>
            <p className={css.ready}>Ready. Set. Smile</p>
            <p className={css.text} >Take the free online assessment to see if you are a candidate and get started on your journey.</p>
            <p className={css.us} >GET HELP NOW</p>
        </div>
    )
}


