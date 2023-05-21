import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Boxoffice.css';
export default function Boxoffice(props) {
    return (
        <div className='BoxOffice'>
            <Container>
                <h4 style={{color:'#ّFFF'}} className='mt-2'>فروش هفتگی سینمای جهان</h4>
                <Row className='justify-content-start'>
                    {Object.entries(props).map(item => (
                        <Col key={Math.random(10, 1000)} lg={3} sm={12} xs={12}>
                            <div className='d-flex justify-content-end Item-Box-Office'>

                                <Col lg={3} xs={2} sm={2} className='dd-lx'>
                                    <h1 className='mt-3 me-2'>{item[1].rank}</h1>
                                </Col>
                                <Col lg={3} xs={4} sm={4} className='dd-lx'>
                                    <img src={item[1].image} />
                                </Col>
                                <Col className='dd-lx' xs={6} sm={6}>
                                    <h6>{item[1].title}</h6>
                                    <h6>فروش هفتگی : {item[1].weekend}</h6>
                                    <h6>فروش کلی : {item[1].gross}</h6>
                                </Col>


                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </div>
    )
}
