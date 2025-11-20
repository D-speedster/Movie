import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './InfoMovie.css';
export default function InfoMovie(props, { children }) {
    useEffect(() => {
        // Component mounted
    }, [])


    return (
        <div className='Info_Movie'>
            <Container>

                <Row>
                    <Col className='Info_Movie_Section' lg={5} md={6} xs={12} sm={12}>
                        <ul>
                            <li>
                                <span>🥇 دانلود فیلم : {props.info['5']} </span>
                            </li>
                            <li>
                                <span>🥇 امتیاز : {props.info['6']} از 10</span>
                            </li>
                            <li>
                                <span>🎭 ژانر : {props.info['3']} </span>
                            </li>

                            <li>
                                <span>🗿 بازیگران :{props.info['10']}</span>
                            </li>
                            <li>
                                <span>📣 کشور سازنده : {props.info['8']}</span>
                            </li>
                            <li>
                                <span>⛱ زبان فیلم : اصلی + دوبله فارسی</span>
                            </li>
                            <li>
                                <span>🎦 کارگردان : {props.info['2']}</span>
                            </li>
                            <li>
                                <span>📆 سال انتشار : {props.info['9']} </span>
                            </li>
                            <li>
                                <span>⏰ مدت زمان : {props.info['4']} دقیقه</span>
                            </li>
                            <li>
                                <span>⏰ رده سنی : R</span>
                            </li>
                            <li>
                                <span>🎬 خلاصه داستان : </span>
                                {props.info['11']}
                            </li>
                        </ul>
                    </Col>
                    <Col className='mt-5 gallery_Pic' lg={7} md={6} xs={12} sm={12} >
                        <Row>
                            <Col lg={6} md={6} xs={6} sm={6}>
                                {props.info['7']?.['3'] ? <img alt="" src={props.info['7']['4']}></img> : <h1>Not Found</h1>}

                            </Col>
                            <Col lg={6} md={6} xs={6} sm={6} >
                                {props.info['7']?.['0'] ? <img alt="" src={props.info['7']['2']}></img> : <h1>Not Found</h1>}
                            </Col>
                            <Col lg={6} md={6} xs={6} sm={6} >
                                {props.info['7']?.['1'] ? <img alt="" src={props.info['7']['1']}></img> : <h1>Not Found</h1>}
                            </Col>
                            <Col lg={6} md={6} xs={6} sm={6} >
                                {props.info['7']?.['2'] ? <img alt="" src={props.info['7']['0']}></img> : <h1>Not Found</h1>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {children}
            </Container>


        </div>
    )
}
