import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
export default function Footer() {
    return (
        <div className='Footer'>
            
           


            <hr style={{ color: '#CCC' }} />
            <Container>
                <Row className='text-center'>
                    <Col >
                        <span className='pe-5'>مووی </span>
                        <span className='pe-5'> قوانین </span>
                        <span className='pe-5'>راهنما </span>
                    </Col>
                    <Col>
                        <b>طراحی توسعه توسط تیم مووی کلاب</b>
                    </Col>
                    <Col>
                        <button className='btn' style={{ background: '#ca252d' }}>ALL SYSTEM</button>
                    </Col>

                </Row>
            </Container>

        </div >
    )
}
