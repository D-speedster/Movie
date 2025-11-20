import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
export default function Suggestion(props) {
    const similarMovies = props?.info;

    if (!similarMovies || Object.keys(similarMovies).length === 0) {
        return (
            <div className='mt-5'>
                <h4 style={{ color: 'white', paddingTop: "5px" }}>فیلم‌های مشابه</h4>
                <Container className='mt-4'>
                    <div style={{ 
                        textAlign: 'center', 
                        padding: '40px', 
                        color: '#999' 
                    }}>
                        <p>فیلم مشابهی یافت نشد</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='mt-5'>
            <h4 style={{ color: 'white', paddingTop: "5px" }}>فیلم‌های مشابه</h4>
            <Container className='mt-4'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 25,
                        },
                    }}
                >
                    {Object.entries(similarMovies).map(([key, movie], index) => (
                        <SwiperSlide key={movie?.id || `similar-${index}`} style={{ borderRadius: '15px' }}>
                            <Card style={{ backgroundColor: '#333' }}>
                                <Card.Header>
                                    <img 
                                        alt={movie?.title || 'پوستر فیلم'} 
                                        src={movie?.poster || '/img/poster5.png'}
                                        loading="lazy"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </Card.Header>
                                <Card.Body>
                                    <p style={{ color: 'white' }}>
                                        {movie?.title || 'نام فیلم'}
                                    </p>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))}
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
