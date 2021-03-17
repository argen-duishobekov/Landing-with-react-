import React from 'react'
import css from './Second.module.css'
import secondPic from '../../images/two.png'



export const SecondPage  = ({pr }) => {
    return (
        
        <div className={css.blockTwo}>
              <img className={css.pic} src={secondPic} alt=""/>
             <p className={css.pr} >{pr}</p>
            
             <span className={css.textOne} >Want to improve your well-being from the comfort <br></br> of your own couch? Are you having trouble finding <br></br> the right therapist? <span className={css.textTwo}> Here at ThriveTalk, our licensed <br></br> therapists provide the same quality care you would get in office <br></br> from anywhere you can access your laptop or mobile phone.<br></br> Become your best self with ThriveTalk. Start therapy now with a <br></br> licensed therapist!</span> </span>
   
        </div>
    )
}

 
