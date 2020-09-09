import React from 'react'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Progress } from 'semantic-ui-react';
import { Popup } from 'semantic-ui-react'
import './css/skills.css'
function Skills() {

    const Skill = {
        java: 'Java',
        js: 'JavaScript',
        python: 'Python',
        C: "C"
    }
    return (
        <div className="container skills">
            <AnimatedOnScroll animationIn="slideInLeft">
                <h1 id="languages" style={{ textAlign: 'center', marginTop: '100px' }}>Programming Languages that I know</h1>


                <h3 style={{ textAlign: 'center' }}>{Skill.java}</h3>
                <Popup content='Highly Skilled' trigger={<Progress percent={100} size='medium' color='red' active className='text-center'
                    style={{ display: 'inline' }}

                />} />

                <h3 style={{ textAlign: 'center' }}>{Skill.js}</h3>
                <Popup content='Excellent' trigger={<Progress percent={85} size='medium' color='red' active className='text-center'
                    style={{ display: 'inline' }}

                />} />


                <h3 style={{ textAlign: 'center' }}>{Skill.C}</h3>
                <Popup content='Perfect' trigger={<Progress percent={80} size='medium' color='red' active className='text-center'
                    style={{ display: 'inline' }}

                />} />

                <h3 style={{ textAlign: 'center' }}>{Skill.python}</h3>
                <Popup content='Good' trigger={<Progress percent={75} size='medium' color='red' active className='text-center'
                    style={{ display: 'inline' }}

                />} />
            </AnimatedOnScroll>
        </div>
    )
}
export default Skills;