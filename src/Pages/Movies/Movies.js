import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'
import Header from '../../components/Home/Header/Header'
import MobileNav from '../../components/Home/MobileNav/MobileNav'
import './Movies.css';
import './Movies.responsive.css';
import { SwiperSlide } from 'swiper/react';
import ApiRequest from '../../Services/Axios/config';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


export default function Movies() {
    let [All_Moviez, setAll_Moviez] = useState([]);
    let [filteredMovies, setFilteredMovies] = useState([]);
    let [filters, setFilters] = useState({
        rating: '',
        dubbing: '',
        genre: '',
        sort: ''
    });

    const SearchBtn = () => {
        let filtered = Object.entries(All_Moviez).map(item => item[1]);

        if (filters.rating) {
            const minRating = parseFloat(filters.rating);
            filtered = filtered.filter(movie => parseFloat(movie.rate) >= minRating);
        }

        if (filters.genre && filters.genre !== 'ژانر') {
            filtered = filtered.filter(movie => 
                movie.genre && movie.genre.includes(filters.genre)
            );
        }

        if (filters.sort === 'جدیدترین') {
            filtered.sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt));
        } else if (filters.sort === 'پر بازدیدترین') {
            filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
        }

        setFilteredMovies(filtered);
    }
    useEffect(() => {
        ApiRequest.get('/Moviez').then(Response => {
            setAll_Moviez(Response.data);
            setFilteredMovies(Object.entries(Response.data).map(item => item[1]));
        }).catch(error => {
            console.error('Error fetching movies:', error);
        });
    }, [])
    function shortenParagraph(paragraph, maxLength) {
        if (!paragraph) return '';
        return paragraph.split(' ').slice(0, maxLength).join(' ') + (paragraph.split(' ').length > maxLength ? ' ...' : '');
    }

    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({ ...prev, [filterType]: value }));
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
                                <select 
                                    className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                                    onChange={(e) => handleFilterChange('rating', e.target.value)}
                                    value={filters.rating}
                                    aria-label="فیلتر بر اساس رتبه"
                                >
                                    <option value="">رتبه</option>
                                    <option value="8.5">بالای 8.5</option>
                                    <option value="8">بالای 8</option>
                                    <option value="7">بالای 7</option>
                                    <option value="6">بالای 6</option>
                                    <option value="5">بالای 5</option>
                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>
                                <select 
                                    className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                                    onChange={(e) => handleFilterChange('dubbing', e.target.value)}
                                    value={filters.dubbing}
                                    aria-label="فیلتر دوبله و زیرنویس"
                                >
                                    <option value="">دوبله و زیرنویس</option>
                                    <option value="دوبله">دوبله فارسی</option>
                                    <option value="زیرنویس">زیرنویس فارسی</option>
                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>
                                <select 
                                    className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                                    onChange={(e) => handleFilterChange('genre', e.target.value)}
                                    value={filters.genre}
                                    aria-label="فیلتر بر اساس ژانر"
                                >
                                    <option value="">ژانر</option>
                                    <option value="اکشن">اکشن</option>
                                    <option value="درام">درام</option>
                                    <option value="کمدی">کمدی</option>
                                    <option value="جنایی">جنایی</option>
                                    <option value="ماجراجویی">ماجراجویی</option>
                                    <option value="تاریخی">تاریخی</option>
                                    <option value="علمی تخیلی">علمی تخیلی</option>
                                    <option value="موزیکال">موزیکال</option>
                                </select>
                            </Col>
                            <Col lg={2} sm={4} xs={4} md={2}>
                                <select 
                                    className='form-control bg-dark w-100 text-center'
                                    style={{ color: '#FFF', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
                                    onChange={(e) => handleFilterChange('sort', e.target.value)}
                                    value={filters.sort}
                                    aria-label="مرتب سازی"
                                >
                                    <option value="">مرتب سازی بر اساس</option>
                                    <option value="جدیدترین">جدیدترین</option>
                                    <option value="پر بازدیدترین">پر بازدیدترین</option>
                                </select>
                            </Col>
                        </Row>
                        <Col className='mt-4' lg={3} sm={4} xs={4} md={2}>
                            <button onClick={SearchBtn} className='btn btn-info w-50'>جستجو</button>
                        </Col>
                    </Container>
                </div>
                <Row className='justify-content-start Slider_Movie'>
                    {filteredMovies.map((item, index) => (
                        <Col lg={3} md={3} xs={6} sm={6} className='Movies_Item' key={item.id || index}>
                            <SwiperSlide>

                                <Link to={`/Movie/${item.id}`}>
                                    <Figure>
                                        <div className='item_Slider'>
                                            <div className='item_Slider_img'>
                                                <LazyLoad>
                                                    <img 
                                                        src={item.poster} 
                                                        alt={item.name || 'پوستر فیلم'}
                                                        loading="lazy"
                                                    />
                                                </LazyLoad>
                                            </div>
                                            <div className='item_Slider_story'>
                                                <p>
                                                    <h6>خلاصه داستان : </h6>
                                                    {item?.TranslateText && shortenParagraph(item.TranslateText, 30)}
                                                </p>
                                            </div>
                                            <div className='item_Slider_name'>
                                                <h5>{item?.name}</h5>
                                            </div>
                                            <div className='item_Slider_Rate'>
                                                <h6>{item.rate}</h6>
                                            </div>
                                        </div>
                                    </Figure>
                                </Link>
                            </SwiperSlide>
                        </Col>
                    ))}
                </Row>
            </Container>
            <MobileNav />
        </div>
    )
}
