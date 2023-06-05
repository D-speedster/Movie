import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Suggestion(props) {
    console.log(props['info'])
    return (
        <div className='mt-5'>
            <h4 style={{ color: 'white', paddingTop: "5px" }}>فیلم های مشابه</h4>
            <Container className='mt-4' >

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        },
                    }}
                >
                    {/* {Object.entries(props['info']).map((it) => {
                        <h1>{it}</h1>
                    })} */}
                    {Object.entries(props['info']).map((id)=>{
                        return <h1>{id}</h1>
                    })}
                    {/* <SwiperSlide style={{borderRadius:'15px' }}>
                        <Card style={{ backgroundColor: '#333' }}>
                            <Card.Header >
                                <img alt="" src='/img/poster5.png' />
                            </Card.Header>
                            <Card.Body>
                                <p style={{ color: 'white' }}>Avenger Infinity War</p>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{borderRadius:'15px' }}>
                        <Card style={{ backgroundColor: '#333' }}>
                            <Card.Header >
                                <img alt="" src='/img/poster5.png' />
                            </Card.Header>
                            <Card.Body>
                                <p style={{ color: 'white' }}>Avenger Infinity War</p>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{borderRadius: '15px' }}>
                        <Card style={{ backgroundColor: '#333' }}>
                            <Card.Header >
                                <img alt="" src='/img/poster5.png' />
                            </Card.Header>
                            <Card.Body>
                                <p style={{ color: 'white' }}>Avenger Infinity War</p>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{borderRadius: '15px' }}>
                        <Card style={{ backgroundColor: '#333' }}>
                            <Card.Header >
                                <img alt="" src='/img/poster5.png' />
                            </Card.Header>
                            <Card.Body>
                                <p style={{ color: 'white' }}>Avenger Infinity War</p>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>               
                    <SwiperSlide style={{borderRadius: '15px' }}>
                        <Card style={{ backgroundColor: '#333' }}>
                            <Card.Header >
                                <img alt="" src='/img/poster5.png' />
                            </Card.Header>
                            <Card.Body>
                                <p style={{ color: 'white' }}>Avenger Infinity War</p>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide style={{borderRadius: '15px' }}>
                        <Card style={{ backgroundColor: '#333' }}>
                            <Card.Header >
                                <img alt="" src='/img/poster5.png' />
                            </Card.Header>
                            <Card.Body>
                                <p style={{ color: 'white' }}>Avenger Infinity War</p>
                            </Card.Body>
                        </Card>
                    </SwiperSlide> */}

                </Swiper>
            </Container>
        </div>
    )
}
