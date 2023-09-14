import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
export default function Footer() {
    return (
        <div className='Footer'>
            <div className='svg-footer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="gray" fill-opacity="0.8" d="M0,128L60,112C120,96,240,64,360,48C480,32,600,32,720,53.3C840,75,960,117,1080,128C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

            </div>
            <Container>
                <div className='footer-box'>
                    <Col className='footer-item'><h5>پیشنهاد فیلم</h5></Col>
                    <Col className='footer-item'><h5>پیشنهاد سریال</h5></Col>
                    <Col className='footer-item'><h5>انیمه و انیمیشن</h5></Col>
                    <Col className='footer-item'><h5>ارتباط با ما </h5></Col>

                </div>

            </Container>


            <hr style={{ color: '#CCC' }} />
            <Container>
                <Row>
                    <Col>
                        <span className='pe-5'>مووی </span>
                        <span className='pe-5'> قوانین </span>
                        <span className='pe-5'>راهنما </span>
                    </Col>
                    <Col className='text-start'>
                        <button className='btn' style={{ background: '#ca252d' }}>ALL SYSTEM</button>
                    </Col>

                </Row>
            </Container>

        </div >
    )
}
