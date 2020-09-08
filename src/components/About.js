import React from 'react'
import './css/about.css'
import { useSpring, animated, useState } from 'react-spring'
import { Row, Col, Card } from 'react-bootstrap';
import { IoIosSchool } from 'react-icons/io';
import { AiTwotoneCloud } from 'react-icons/ai';
const info = {
    profession: ' Developer | Software Engineer',
    question: 'Who Am I?',
    personal: "My name is Anas Bin Sohail and I am a Full Stack (MERN) developer",
    intro: "educated and a motivated software engineering student and a quick learner, quick to ramp up with any existing development platform, and perform design, coding, debugging, and testing application and system software. Excellent interpersonal as well as communication skills and enjoys a high-pressure team environment"
}
const education = {
    bachelors: 'Bachelor of Science in Software Engineering',
    uni: 'Sir Syed University of Engg & Technology',
    year: '2019-2022',
    college: 'Govt National College Karachi'

}

// const [bg, setBg] = useState(false);


function About() {
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="about" style={{ background: 'transparent' }}>

            <Row>



                <Col lg={12}>

                    {/* <h2>{info.question}</h2> */}
                </Col>

                <Col sm={6} lg={6}>

                    <animated.img src="images/about.jpg" width="70%" id="aboutme"
                     onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                     onMouseLeave={() => set({ xys: [0, 0, 1] })}
                     style={{ transform: props.xys.interpolate(trans),marginTop:'30px'}}

                    
                    />

                    <Card className="intro-card" id="about" style={{ paddingTop: '50px', paddingBottom: '50px' }} >
                        <Card.Title><h4>About me</h4></Card.Title>
                        <p id="intro" style={{ fontWeight: '400', textAlign: 'center' }}>

                            <Card.Text>{info.personal} also an {info.intro}</Card.Text>

                        </p>


                    </Card>
                </Col>

                <Col lg={6} sm={6} md={6}>
                    <IoIosSchool size='8rem' color="orangered" style={{ marginTop: '50px' }} 
                     
                   
                   />
                    <Card.Title><h4>My Education</h4></Card.Title>
                    <Card style={{ marginTop: '50px', paddingTop: '50px', paddingBottom: '50px'}} 
                  id='education'
                    >



                        <Col lg={12} md={12} sm={12}>
                            <Card.Text>

                                {/* University     */}
                                <h4>{education.bachelors}</h4>
                                <h6>{education.uni}</h6>
                                <h7>{education.year}</h7>

                                {/* College */}
                                <h4 style={{ marginTop: '100px' }}>Pre-Engineering</h4>
                                <h6>{education.college}</h6>
                                <h7>2016-2018</h7>
                            </Card.Text>
                        </Col>
                    </Card>
                </Col>

            </Row>

        </div>
    )
}
export default About;