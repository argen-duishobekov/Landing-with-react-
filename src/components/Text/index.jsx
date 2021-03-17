import React from 'react'
import css from './Text.module.css'

export const Text = (props) => {
    const {title,text} = props
    return  <div className={css.textOne}>
            <span className={css.textTwo}>{title}</span>
            <text className={css.textThree}>{text}</text>
   </div>
    
}


