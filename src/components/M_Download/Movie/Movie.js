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
                background: `url(${props.info[3]})`
            }}>
                <Container>

                    <Row className='justify-content-between'>

                        <Col className='Poster' lg={4} md={5} xs={12} sm={12} onDragStart={(event) => event.preventDefault()}>

                            <img alt="" className='img-mobile' src='../img/mobile2-removebg-preview.png' />
                            <img alt="" className='img-poster' src={props.info['0']}></img>

                        </Col>
                        <Col className='INFO_HEAD' lg={6}>
                            <ul>
                                <h44 style={{ color: '#fff', display: 'block' }}>فیلم : {props.info[2]}</h44>
                                <li>فروش کلی : 248 میلیون دلار</li>
                                <li>افتخارات : برنده 2 اسکار و نامرد 3 اسکار دیگر</li>
                                <li>دوبله فارسی + زیرنویس چسبیده</li>
                                <li>جزو 250 فیلم برتر جهان</li>
                                <li>دوبله فارسی + زیرنویس چسبیده</li>



                            </ul>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
