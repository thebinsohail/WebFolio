import React from 'react'
import './css/about.css'
import {Row,Col,Card} from 'react-bootstrap';
import {IoIosSchool} from 'react-icons/io';

const info = {
    profession: ' Developer | Software Engineer',
    question: 'Who Am I?',
    personal: "My name is Anas Bin Sohail and I am a MERN STACK Developer",
    intro: "educated and motivated software engineering student and a quick learner, quick to ramp up with any existing development platform, and perform design, coding, debugging, and testing application and system software. Excellent interpersonal as well as communication skills and enjoys a high-pressure team environment"
}
const education={
    bachelors:'Bachelor of Science in Software Engineering',
    uni:'Sir Syed University of Engg & Technology',
    year:'2019-2022',
    college:'Govt National College Karachi'

}

function About() {
    return (
        <div className="about">
            <Row>
               
               
                
                <Col lg={12}>
            <h3>{info.question}</h3>
            </Col>
            
            <Col sm={6} lg={6}>
               
                <img src="images/about.jpg" width="70%" id="aboutme"/>
               
               <Card style={{paddingTop:'50px',paddingBottom:'50px',background:'whitesmoke'}}>
                <Card.Title><h4>About me</h4></Card.Title>
        <p  id="intro" style={{fontWeight:'400',textAlign:'center'}}>
         
        <Card.Text>{info.personal} an {info.intro}</Card.Text>
       
            </p>


            </Card>
        </Col>
        
        <Col lg={6} sm={6} md={6}>
        <IoIosSchool size='8rem' color="orangered" style={{marginTop:'100px'}}/> 
        <Card.Title><h4>My Education</h4></Card.Title>
    <Card style={{marginTop:'50px',paddingTop:'50px',paddingBottom:'50px',background:'whitesmoke'}}>
        
       
       
        <Col lg={12} md={12} sm={12}>
        <Card.Text>

        {/* University     */}
        <h4>{education.bachelors}</h4>
        <h6>{education.uni}</h6>
        <h7>{education.year}</h7>

        {/* College */}
        <h4 style={{marginTop:'100px'}}>Pre-Engineering</h4>
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