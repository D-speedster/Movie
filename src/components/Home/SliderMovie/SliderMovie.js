import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { Container, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Navigation } from "swiper";
import './SliderMovie.css';
import { FcFilmReel } from "react-icons/fc";
import LazyLoad from 'react-lazy-load';
export { MovieContext };
const MovieContext = createContext();
export default function SliderMovie(props) {
    let [sliceMovie, SetMovieSlice] = useState('')
    const [selectedMovie, setSelectedMovie] = useState(null);
    function shortenParagraph(paragraph, maxLength) {
        return paragraph.split(' ').slice(0, maxLength).join(' ') + (paragraph.split(' ').length > maxLength ? ' ...' : '');
    }
    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
    };


    return (


        <div className='Slider_Movie me-3'>



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
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper"
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 13,
                        },
                        "@1.00": {
                            slidesPerView: 2,
                            spaceBetween: 22,
                        },
                        "@1.50": {
                            slidesPerView: 5,
                            spaceBetween: 22
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


                                </div>

                            ) : null




                        ))}

                </Swiper>
            </Container>

        </div >
    )
}

