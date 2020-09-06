import React from 'react'
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
            <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Programming Languages that I know</h1>


            <h3 style={{ textAlign: 'center' }}>{Skill.java}</h3>
            <Popup content='Highly Skilled' trigger={<Progress percent={100} size='medium' color='red' active className='text-center'
                style={{ display: 'inline', Left: '100px' }}

            />} />

            <h3 style={{ textAlign: 'center' }}>{Skill.js}</h3>
            <Popup content='Excellent' trigger={<Progress percent={90} size='medium' color='red' active className='text-center'
                style={{ display: 'inline', Left: '100px' }}

            />} />


            <h3 style={{ textAlign: 'center' }}>{Skill.C}</h3>
            <Popup content='Perfect' trigger={<Progress percent={85} size='medium' color='red' active className='text-center'
                style={{ display: 'inline', Left: '100px' }}

            />} />

            <h3 style={{ textAlign: 'center' }}>{Skill.python}</h3>
            <Popup content='Good' trigger={<Progress percent={75} size='medium' color='red' active className='text-center'
                style={{ display: 'inline', Left: '100px' }}

            />} />

        </div>
    )
}
export default Skills;