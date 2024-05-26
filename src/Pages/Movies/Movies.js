import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import Header from '../../components/Home/Header/Header'
import './Movies.css';
import { SwiperSlide } from 'swiper/react';
import ApiRequest from '../../Services/Axios/config';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { PiTelevisionLight } from 'react-icons/pi';
import { BiLogInCircle } from 'react-icons/bi';
import { RiMovie2Line } from 'react-icons/ri';
import { AiOutlineChrome, AiOutlineHome } from 'react-icons/ai';


export default function Movies() {
    let [All_Moviez, setAll_Moviez] = useState([]);
    let SearchBtn = () => {
        console.log("EVENT CLICK")
    }
    useEffect(() => {
        ApiRequest.get('/Moviez').then(Response => setAll_Moviez(Response.data))
    }, [])
    function shortenParagraph(paragraph, maxLength) {
        return paragraph.split(' ').slice(0, maxLength).join(' ') + (paragraph.split(' ').length > maxLength ? ' ...' : '');
    }
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

                                <Link to={{
                                    pathname: `/Movie/${item[1].id}`
                                }}>
                                    <Figure
                                    >
                                        <div className='item_Slider'>
                                            <div className='item_Slider_img'>
                                                <LazyLoad>
                                                    <img src={item[1].poster}></img>
                                                </LazyLoad>
                                            </div>
                                            <div className='item_Slider_story'>
                                                <p>
                                                    <h6>خلاصه داستان : </h6>

                                                    {item[1]?.TranslateText && shortenParagraph(item[1].TranslateText, 30)}
                                                </p>
                                            </div>
                                            <div className='item_Slider_name'>
                                                <h5>{item[1]?.name}</h5>
                                            </div>
                                            <div className='item_Slider_Rate'>
                                                <h6> {item[1].rate}</h6>
                                            </div>
                                        </div>


                                    </Figure>
                                </Link>
                            </SwiperSlide>
                        </Col>
                    ))}
                </Row>
            </Container>
            <div className='mobile-nav d-lg-none d-md-none'>
                <div className='container'>
                    <Row>
                        <Col className='mobile-nav-item'>
                            <Link to='/'>
                                <AiOutlineHome style={{ fontSize: '21px' }}></AiOutlineHome>
                                <span className='d-block ' >خانه</span>

                            </Link>
                        </Col>

                        <Col className='mobile-nav-item d-inline'>
                            <Link to='/Movies'>

                                <RiMovie2Line style={{ fontSize: '21px' }}></RiMovie2Line>
                                <span className='d-block'>فیلم ها</span>
                            </Link>

                        </Col>
                        <Col className='mobile-nav-item'>
                            <Link to='/Series'>

                                <PiTelevisionLight style={{ fontSize: '21px' }}></PiTelevisionLight>
                                <span className='d-block'>سریال ها</span>
                            </Link>
                        </Col>
                        <Col className='mobile-nav-item'>
                            <Link to='/Login'>

                                <BiLogInCircle style={{ fontSize: '21px' }}></BiLogInCircle>
                                <span className='d-block'>ورود</span>
                            </Link>
                        </Col>

                    </Row>
                </div>

            </div>
        </div>
    )
}
