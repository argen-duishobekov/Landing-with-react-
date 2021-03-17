import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.png'
import { HelpCard } from '../HelpCard'
import {SecondPage} from '../SecondPage'
import {NextCard} from '../NextCard'
import {Text} from '../Text'
import {Know} from '../Know'
import {Contact} from '../Contact'
import {Footer} from '../Footer'





export const MainPage = () => {
    const data = [
        { 
            // bg:"#FFE2DE", 
            title:"Weight Lifting",
            id:1
        },
        { 
            bg:"#C4E769", 
            title:"Running  & Spinning",
            id:2
        },
        { 
            bg:"#62D0DF", 
            title:"Pumping Iron",
            id:3
        },
        { 
            bg:"#0052C1", 
            title:"Pumping Iron",
            id:4
        },
]

const date = [
    {
        col:'#22356F',
        tit:'Physical Health',
        id:1
    },
    {
        col:'#0052C1',
        tit:'Mental Health',
        id:2
    },
    {
        col:'red',
        tit:'Nutrition',
        id:3
    },
    {
        col:'#62D0DF',
        tit:'Gymnastics',
        id:4
    },
    {
        col:'#DEE1FF',
        tit:'Crossfit',
        id:5
    },
    {
        col:'#8F00FF',
        tit:'Aerobics',
        id:6
    },
]

const dat = [
    {
      title:'Nutritional Plans',
      text:'Nutritional Facts on some shitty things that  you don’t care about and even we don’t , I need to replace this copy.',
      id:1
    },
    {
        title:'Weight Loss',
        text:'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id:2
    },
    {
        title:'Mental Peace',
        text:'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id:3
      },
      {
        title:'Home Training',
        text:'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id:4
      },
      {
        title:'Work/Life Balance',
        text:'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id:5
      },
      {
        title:'Cardio',
        text:'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.',
        id:6
      },
]

const da =[
    {
        title:'SOME INFO',
        text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.',
        id:1
    },
    {
        title:'ENFOLD HEALTH',
        text:'Main Street 1, Olcott Buffalo, United States +555 283 784 333 office@enfold-health.com',
        id:2
    },
    {
        title:'OFFICE HOURS',
        text:'Mo-Fr: 8:00-19:00  Sa: 8:00-14:00 Su: closed',
        id:3
    },
]
    return <div className={css.mainPage}>
        <div className={css.container}>
            <nav>
                <span className={css.logo}>Thrivetalk</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <button className={css.bt}>CONTACT US</button>
            </nav>
            <div className={css.mainBlock}>
                <div>
                    <p className={css.log}>Thrivetalk</p>
                    <h1>HELPING YOU THRIVE <br></br> IN ALL AREAS OF LIFE</h1>
                    <p>Our highly talented therapists can help you <br></br> with a range of
                    issues including relationships,<br></br> sex, PTSD, depression, social
              anxiety, or even<br></br>just caring for yourself more.</p>
                    <div>
                        <button  className={css.btn}>WHO AM I</button>
                        <button className={css.btnTwo}>WHAT DO I DO</button>
                    </div>
                </div>
                <div className={css.bacg}></div>
                    <img className={css.pic} src={mainPic} alt=""/>
                   
            </div>

          
        </div>
        
        <div>
            <SecondPage pr = "Why Thrive?"
            />
        </div>
        <div className={css.about}>
            <p className={css.one}>ABOUT US</p>
            <span className={css.aboutTex}>We want to help you thrive! Whether you are just <br></br> looking for someone to talk to, or are struggling with a <br></br>  mental wellness issue we’re here to help.  Our highly <br></br>  talented therapists can help you with a range of issues <br></br>  including relationships, sex, PTSD, depression, social <br></br>  anxiety, or even just caring for yourself more.

           </span>
        </div>
        <div>
            <h4>WE CAN HELP YOU WITH</h4>

            <div className='App'>
                {
                    data.map((el,id) => {
                        return <HelpCard
                         bg={el.bg}
                         title={el.title}
                         key={id}
                         /> 
                    })
                }

                <div>
                    {
                        date.map((el,id) => {
                            return <NextCard
                            col={el.col}
                            tit={el.tit}
                            key={id}
                            /> 
                        })
                    }
                </div>
                <div>
                   {
                       dat.map((el,id) => {
                           return < Text 
                           title={el.title}
                           text={el.text}
                           key={id}
                           />
                       })
                   }
                </div>
                <div>
                   <Know par = "YOU SHOULD ALSO KNOW"
                   />
                </div>
                <div>
                    <Contact par ="CONTACT US"/>
                </div>
                <div>
                    {
                       da.map((el,id) => {
                           return <Footer
                           titl={el.title}
                           text={el.text}
                           key={id}
                           />
                       })
                    }
                   
                </div>
                {/* <HelpCard bg="#FFE2DE" title="Weight Lifting" />
                <HelpCard bg="#C4E769" title="Running  & Spinning" />
                <HelpCard bg="#62D0DF" title="Pumping Iron" />
                <HelpCard bg="#0052C1" title="Pumping Iron" /> */}
            </div>

        </div>
    </div>
}