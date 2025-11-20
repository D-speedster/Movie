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
        if (!paragraph) return '';
        const words = paragraph.split(' ');
        return words.slice(0, maxLength).join(' ') + (words.length > maxLength ? ' ...' : '');
    }
    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
    };


    return (


        <div className='Slider_Movie me-3'>



            <Container>
                <div className='d-flex justify-content-between mb-4 mt-2'>
                    <h5 style={{ paddingRight: '0px', color: '#FFF', fontSize: '22px', fontWeight: '700', textAlign: 'right' , fontFamily : 'IRANYEKAN' }}>
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

                    {Object.entries(props).map((item, index) => {
                        if (typeof item['1'] !== "object") return null;

                        const movie = item[1];
                        const movieId = movie.id || `movie-${index}`;

                        return (
                            <SwiperSlide key={movieId}>
                                <Link to={`/Movie/${movie.id}`}>
                                    <Figure onClick={() => handleMovieSelect(movie)}>
                                        <div className='item_Slider'>
                                            <div className='item_Slider_img'>
                                                <LazyLoad>
                                                    <img 
                                                        src={movie.poster} 
                                                        alt={movie.name || 'پوستر فیلم'}
                                                        loading="lazy"
                                                    />
                                                </LazyLoad>
                                            </div>
                                            <div className='item_Slider_story'>
                                                <p>
                                                    <h6>خلاصه داستان : </h6>
                                                    {movie?.TranslateText && shortenParagraph(movie.TranslateText, 30)}
                                                </p>
                                            </div>
                                            <div className='item_Slider_name'>
                                                <h5>{movie?.name}</h5>
                                            </div>
                                            <div className='item_Slider_Rate'>
                                                <h6>{movie.rate}</h6>
                                            </div>
                                        </div>
                                    </Figure>
                                </Link>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>
            </Container>

        </div >
    )
}

