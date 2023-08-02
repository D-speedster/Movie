import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import Header from '../Home/Header/Header'
import './Movies.css';
import { SwiperSlide } from 'swiper/react';
import ApiRequest from '../../Services/Axios/config';

export default function Movies() {
    let [All_Moviez, setAll_Moviez] = useState([]);
    let SearchBtn = () => {
        console.log("EVENT CLICK")
    }
    useEffect(() => {
        ApiRequest.get('/Moviez').then(Response => setAll_Moviez(Response.data))
    }, [])
    return (
        <div>
            <Header></Header>
            <Container>
                <div className='Advanced_search'>
                    <h5>جستجوی پیشرفته فیلم</h5>
                    <Container>
                        <Row className='justify-content-between mt-4'>

                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>رتبه</option>
                                    <option>بالای 8.5</option>
                                    <option>بالای 8 </option>
                                    <option>بالای 7 </option>
                                    <option>بالای 6</option>
                                    <option>بالای 5</option>

                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>دوبله و زیرنویس</option>
                                    <option>دوبله فارسی</option>
                                    <option>زیرنویس فارسی</option>

                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>ژانر</option>
                                    <option>تاریخی</option>
                                    <option>علمی تخیلی </option>
                                    <option>موزیکال </option>
                                    <option>ژانر</option>
                                    <option>تاریخی</option>
                                    <option>علمی تخیلی </option>
                                    <option>موزیکال </option>
                                    <option>ژانر</option>
                                    <option>تاریخی</option>
                                    <option>علمی تخیلی </option>
                                    <option>موزیکال </option>
                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>

                                <select className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                    <option>مرتب سازی بر اساس</option>
                                    <option>جدیدترین</option>
                                    <option>پر فروش ترین</option>
                                    <option>پر بازدیدترین </option>
                                    <option>250 فیلم برتر</option>

                                </select>
                            </Col>
                        </Row>
                        <Col className='mt-4' lg={3} sm={4} xs={4} md={2}>
                            <button onClick={SearchBtn} className='btn btn-info w-50'>جستجو</button>
                        </Col>
                    </Container>
                </div>
                <Row className='justify-content-start Slider_Movie'>
                    {Object.entries(All_Moviez).map(item => (

                        <Col lg={3} md={3} xs={6} sm={6} classname='Movies_Item'>
                            <SwiperSlide key={Math.random(10, 1000)} >
                                <Figure>
                                    <Figure.Image

                                        alt="171x180"
                                        src={item['1'].poster}
                                    />
                                    <div className='info_Sliders'>

                                        <Container>
                                            {item['1'].name}
                                        </Container>
                                    </div>
                                    <p className='Rate_Movie'>{item['1'].rate}</p>

                                    <div className='Story' style={{ color: 'white', paddingLeft: '25px' }}>
                                        <Container>
                                            <h5>خلاصه داستان</h5>
                                            {item['1'].story}
                                        </Container>
                                    </div>


                                </Figure>
                            </SwiperSlide>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
