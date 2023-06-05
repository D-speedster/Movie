import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
export default function Footer() {
    return (
        <div className='Footer'>
            <Container>
                <Row className='pt-4'>
                    <Col sm={4} xs={4} lg={2} className='Footer-Item'>
                        <h5 style={{fontWeight:'bold'}}>فیلم ها </h5>
                        <ul className='list-unstyled text-end'>
                            <li>فیلم نوع سه</li>
                            <li>فیلم نوع یک</li>
                            <li>فیلم نوع یک</li>
                            <li>فیلم نوع دو</li>
                        </ul>
                    </Col>
                    <Col sm={4} xs={4} lg={2} className='Footer-Item'>
                        <h5 style={{fontWeight:'bold'}}>سریال ها </h5>
                        <ul className='list-unstyled text-end'>
                            <li>سریال نوع سه</li>
                            <li>سریال نوع یک</li>
                            <li>سریال نوع یک</li>
                            <li>سریال نوع دو</li>
                        </ul>
                    </Col>
                    <Col sm={4} xs={4} lg={2} className='Footer-Item'>
                        <h5 style={{fontWeight:'bold'}}>جدیدترین ها </h5>
                        <ul className='list-unstyled text-end'>
                            <li>جدیدترین نوع سه</li>
                            <li>جدیدترین نوع یک</li>
                            <li>جدیدترین نوع یک</li>
                            <li>جدیدترین نوع دو</li>
                        </ul>
                    </Col>
                    <Col sm={4} xs={4} lg={2} className='Footer-Item'>

                        <h5 style={{fontWeight:'bold'}}>شبکه های اجتماعی </h5>
                        <ul className='list-unstyled'>
                            <li>TELEGRAM</li>
                            <li>EMAIL</li>
                            <li>INSTAGRAM</li>
                            <li>Twiter</li>
                        </ul>
                    </Col>
                    <Col sm={4} xs={4} lg={2} className='Footer-Item'>
                        <h5 style={{fontWeight:'bold'}}>جدیدترین ها </h5>
                    </Col>
                    <Col sm={4} xs={4} lg={2} className='Footer-Item'>
                        <img alt="" src='/img/cinema.jpg' className='img-fluid'></img>
                    </Col> 
                </Row>

            </Container>
            <hr style={{color:'#CCC'}}/>
            <Container>
                <Row>
                    <Col>
                        <span className='pe-5'>مووی </span>
                        <span className='pe-5'> قوانین </span>
                        <span className='pe-5'>راهنما </span>
                    </Col>
                    <Col className='text-start'>
                        <button className='btn' style={{background:'#ca252d'}}>ALL SYSTEM</button>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}
