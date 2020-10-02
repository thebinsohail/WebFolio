import React from 'react'
import { Card ,Divider } from 'semantic-ui-react'
import { Row, Col } from 'react-bootstrap'
import './css/experience.css'
const Experience = () => (

    <div>
        
        <div className="container"><Divider/><h1 style={{fontSize:'30px',marginTop: '100px',textAlign: 'center',fontWeight: 'lighter'}}>My Experience</h1></div>
        
       
        <div className="container-fluid text-center">
        <Row>
            
        <Col lg={6} sm={6}>
                <Card id="card4" style={{ marginTop: '50px',
                boxShadow:'1px 1px 1px  gray'}}
                    image='./images/afiniti.png'
                    header='SQA Intern '

                    description='Black-Box Tester'

                />
            </Col>
            

            <Col lg={6} sm={6}>
                <Card id="card3" style={{ marginTop: '50px', boxShadow:'1px 1px 1px  gray'}}
                    image='./images/ieeex.png'
                    header='Brand Ambassador IEEEXTREME Programming Competition 2020'
                     
                    description='IEEEXtreme is a global challenge in which teams of IEEE Student members – advised and proctored by an IEEE member, and often supported by an IEEE Student Branch – compete in a 24-hour time span against each other to solve a set of programming problems.'

                />
            </Col>
            <Col lg={6} sm={6}>
                <Card id="card1" style={{ marginTop: '50px', boxShadow:'1px 1px 1px  gray'}}
                    image='./images/sac.png' 
                    header='Technical Chapter/vTools Coordinator '

                    description='Being a part of IEEE SAC Karachi Section . as a Technical Chapter Coordinator it is my responsibility to keep in track of every technical chapter activity and inactivity (if) Tech. Chap events events on VTOOLS - Events so as coordination with IEEE Student Branches as well as assisting them in using the tools being provided by IEEE . '

                />
            </Col>

            <Col lg={6}>
                <Card id="card2" style={{ marginTop: '50px', boxShadow:'1px 1px 1px  gray'}}
                    image='./images/sac.png'
                    header='vTools Coordinator 2019 '

                    description='In 2019, I was a part of IEEE SAC Karachi Section . Being a VTOOLS Coordinator it was my responsibility to report
                     section event on VTOOLS - Events so as coordination with IEEE Student Branches as well as assisting them in using the tools being provided by IEEE
                     . Also guiding them about all the volunteer tools that fall under IEEE MGA VTOOLS'

                />
            </Col>

           

           

        </Row>
        </div>
    </div>

);

export default Experience;