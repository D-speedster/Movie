import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Movie.css'

export default function Movie(props) {
    let [BgBack, SetBgBack] = useState();
    useEffect(() => {
        props.info['1']?.['0'] ? SetBgBack(props.info['1']['3']) : console.log(`Byee , ${props.info['1']}`)

    })
    return (
        <div className='Movie'>
            <div className='Movie_Head' style={{
                background: `url(${BgBack})`,
                // backgroundPosition : 'center' ,
                // backgroundSize : '100% 100%;' ,
                // backgroundAttachment : 'fixed' ,
                // zIndex : '0' ,
                // backgroundRepeat : 'no-repeat'

            }}>
                <Container>
                    <Row className='pt-5 justify-content-between'>

                        <Col className='Poster' lg={4} md={5} xs={12} sm={12} onDragStart={(event) => event.preventDefault()}>
                            <img alt="" className='img-mobile' src='http://localhost:3000//img/mobile2-removebg-preview.png' />
                            <img alt="" className='img-poster' src={props.info['0']}></img>

                        </Col>
                        <Col className='trailer' lg={7} md={5} xs={12} sm={12}>
                            <img alt="" className='img-fluid img-tablet ' src='http://localhost:3000/img/tablet.png'></img>
                            <video poster='./img/video.jpg' className='img-video' controls>
                                <source src='./img/Marvel.mp4' type="video/mp4"></source>
                            </video>


                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
