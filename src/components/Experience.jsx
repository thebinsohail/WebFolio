import React from 'react';
import { Card, Divider } from 'semantic-ui-react';
import { Row, Col } from 'react-bootstrap';
import {descriptions} from '../constants';
import './css/experience.css';

const Experience = () => (

  <div>
    <div className="container">
      <Divider />
      <h1 style={{
        fontSize: '30px',
        marginTop: '100px',
        textAlign: 'center',
        fontWeight: 'lighter',
      }}
      >
        My Experience
      </h1>
    </div>

    <div className="container-fluid text-center">
      <Row>

      <Col lg={6} sm={6}>
      <Card
            id="card5"
            style={{ marginTop: '50px', boxShadow: '1px 1px 1px  gray' }}
            image="./images/logo.png"
            header="Founder | CEO at Cauldron Technologies "
            description={descriptions.cauldrontech}
         />


      </Col>

        <Col lg={6} sm={6}>
          <Card
            id="card4"
            style={{
              marginTop: '50px',
              boxShadow: '1px 1px 1px  gray',
            }}
            image="./images/afiniti.png"
            header="SQA Intern "
            description={descriptions.afiniti}
          />
        </Col>

        <Col lg={6} sm={6}>
          <Card
            id="card3"
            style={{ marginTop: '50px', boxShadow: '1px 1px 1px  gray' }}
            image="./images/ieeex.png"
            header="Brand Ambassador IEEEXTREME Programming Competition 2020"
           
            description={descriptions.xtreme}
          />
        </Col>
        <Col lg={6} sm={6}>
          <Card
            id="card1"
            style={{ marginTop: '50px', boxShadow: '1px 1px 1px  gray' }}
            image="./images/sac.png"
            header="Technical Chapter/vTools Coordinator "
            description={descriptions.sac2020}
          />
        </Col>

        <Col lg={6}>
          <Card
            id="card2"
            style={{ marginTop: '50px', boxShadow: '1px 1px 1px  gray' }}
            image="./images/sac.png"
            header="vTools Coordinator 2019 "
            description={descriptions.sac2019}
         />
        </Col>
      </Row>
    </div>
  </div>

);

export default Experience;
