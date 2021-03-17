import React from 'react'
import css from './HelpCard.module.css'

export const HelpCard = (props) => {
        const {bg,title} = props
    return <div style={{backgroundColor: bg}} className={css.helpCard}>
        <hr/>
        <h3>{title}</h3>  
    </div>
}