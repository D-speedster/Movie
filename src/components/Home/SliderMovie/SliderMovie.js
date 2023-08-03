import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { Container, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Navigation } from "swiper";
import './SliderMovie.css';
import { FcFilmReel } from "react-icons/fc";
const MovieContext = createContext();
export { MovieContext };

export default function SliderMovie(props) {



    let [InMovie, SetInMovie] = useState([]);
    useEffect(() => {
        console.log(InMovie)
    }, [InMovie])
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
    };


    return (


        <div className='Slider_Movie'>



            <Container>
                <div className='d-flex justify-content-between mb-4 mt-2'>
                    <h5 style={{ paddingRight: '0px', color: '#FFF', fontSize: '24px', fontWeight: 'bold', textAlign: 'right' }}>
                        <FcFilmReel></FcFilmReel>
                        {props.Title}
                    </h5>
                    <h5 style={{ paddingLeft: '24px', color: '#FFF' }}>
                        مشاهده کامل
                        <AiOutlineArrowLeft className='me-1' />

                    </h5>
                </div>
                <Swiper

                    touchAngle={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper"
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        "@1.00": {
                            slidesPerView: 2,
                            spaceBetween: 25,
                        },
                        "@1.50": {
                            slidesPerView: 5,
                            spaceBetween: 25
                        },
                    }}
                >

                    {

                        Object.entries(props).map(item => (



                            typeof (item['1']) == "object" ? (

                                <div key={Math.random(10, 1000)} >

                                    <SwiperSlide key={Math.random(10, 1000)} >

                                        <Link to={{
                                            pathname: `/Movie/${item[1].id}`
                                        }}>
                                            <Figure onClick={() => handleMovieSelect(item[1])}
                                            >
                                           
                                                <lr-img src={item[1].poster}></lr-img>



                                                <div className='info_Sliders'>

                                                    <h5> {item[1].name}</h5>
                                                </div>
                                                <p className='Rate_Movie'>{item[1].rate}</p>

                                                <div className='Story' style={{ color: 'white' }}>
                                                    <Container>
                                                        <h5>خلاصه داستان</h5>
                                                        {item[1].story}
                                                    </Container>
                                                </div>

                                            </Figure>
                                        </Link>
                                    </SwiperSlide>


                                </div>

                            ) : null




                        ))}

                </Swiper>
            </Container>

        </div>
    )
}

