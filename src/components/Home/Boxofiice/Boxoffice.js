import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Boxoffice.css';
export default function Boxoffice(props) {
   
    return (
        <Container >
            <div className='BoxOffice'>
                <h4 style={{ color: '#ّFFF' }} className='mt-4 p-4'>فروش هفتگی سینمای جهان</h4>
                <Container>
                    <Row className='justify-content-start'>
                        {Object.entries(props).map(item => (
                            <Col key={Math.random(10, 1000)} lg={4} sm={12} xs={12}>
                                <div className='Item-Box-Office'>

                                    <Col className='Item-Box-Office-img' lg={6} xs={4} sm={4} style={{ backgroundImage: `url(${item[1].image})` }}>

                                    </Col>
                                    <Col className='Item-Box-Office-text' lg={6} xs={6} sm={6}>
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
        </Container>
    )
}
