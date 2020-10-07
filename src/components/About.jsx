import React from 'react';
import './css/about.css';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { Divider } from 'semantic-ui-react';
import { useSpring, animated } from 'react-spring';
import { Row, Col, Card } from 'react-bootstrap';
import { IoIosSchool } from 'react-icons/io';
import { education, info } from '../constants';
import {
  calc, trans,
} from '../utils';

function About() {
  const [props, set] = useSpring(() => (
    {
      xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 },
    }));
  const { xys } = props;
  return (
    <div className="about" style={{ background: 'transparent' }}>

      <AnimatedOnScroll animationIn="bounceIn">
        <div className="container">
          <Divider />
          <h1 style={{ fontSize: '30px', marginTop: '100px', fontWeight: 'lighter' }}>Personal Information</h1>
        </div>
      </AnimatedOnScroll>

      <Row>
        <Col sm={6} lg={6}>
          <AnimatedOnScroll animationIn="bounceIn">
            <animated.img
              src="images/anasbinsohail.jpg"
              width="30%"
              id="aboutme"
              onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
              onMouseLeave={() => set({ xys: [0, 0, 1] })}
              style={{
                transform: xys.interpolate(trans),
                marginTop: '30px',
                marginBottom: '20px',
                borderRadius: '300px',
                border: '3px solid #0e1f47',
              }}
            />
          </AnimatedOnScroll>

          <AnimatedOnScroll animationIn="fadeIn">
            <Card
              className="intro-card"
              id="about"
              style={{
                paddingTop: '50px',
                paddingBottom: '50px',
              }}
            >
              <Card.Title><h4>About me</h4></Card.Title>
              <p id="intro" style={{ fontWeight: '400', textAlign: 'center' }}>
                <Card.Text>
                  {info.personal}
                  {' '}
                  also an
                  {' '}
                  {info.intro}
                </Card.Text>
              </p>
            </Card>
          </AnimatedOnScroll>
        </Col>

        <Col lg={6} sm={6} md={6}>
          <AnimatedOnScroll animationIn="bounceIn">
            <IoIosSchool
              id="edu-icon"
              size="6rem"
              color="red"
              style={{ marginTop: '50px' }}
            />
          </AnimatedOnScroll>

          <AnimatedOnScroll animationIn="fadeIn">
            <Card.Title><h4 id="my-education">My Education</h4></Card.Title>
            <Card
              style={{
                marginTop: '50px',
                paddingTop: '50px',
                paddingBottom: '50px',
              }}
              id="education"
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
          </AnimatedOnScroll>
        </Col>

      </Row>
      <div id="skills" />
    </div>
  );
}
export default About;
