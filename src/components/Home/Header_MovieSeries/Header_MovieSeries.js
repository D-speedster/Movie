import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Header_MovieSeries.css';
import LazyLoad from 'react-lazy-load';

const comingSoonMovies = [
    { id: 1, src: '/img/C_391.webp', alt: 'فیلم جدید - به زودی' },
    { id: 2, src: '/img/flash.jpg', alt: 'فلش - به زودی' },
    { id: 3, src: '/img/amsterdam-poster.jpg', alt: 'آمستردام - به زودی' }
];

const newSeries = [
    { id: 1, src: '/img/777.jpg', title: 'سریال وایکینگ‌ها', episode: 'قسمت 6 فصل 6 اضافه شد' },
    { id: 2, src: '/img/888.webp', title: 'سریال Breaking Bad', episode: 'قسمت 8 فصل 5 اضافه شد' },
    { id: 3, src: '/img/999.jpg', title: 'سریال Game of Thrones', episode: 'قسمت 10 فصل 8 اضافه شد' },
    { id: 4, src: '/img/666.jpg', title: 'سریال The Crown', episode: 'قسمت 4 فصل 6 اضافه شد' }
];

const Header_MovieSeries = React.memo(function Header_MovieSeries() {
    return (
        <Container>
            <Row className='mb-5 mt-2'>
                <Col lg={8} className='Movie_Top'>
                    <div className='d-flex'>
                        {comingSoonMovies.map((movie) => (
                            <Col key={movie.id} className='Coming_Soon'>
                                <LazyLoad>
                                    <img 
                                        alt={movie.alt} 
                                        src={movie.src}
                                        loading="lazy"
                                    />
                                </LazyLoad>
                                <div className='Coming_Text'>بزودی</div>
                            </Col>
                        ))}
                    </div>
                </Col>
                <Col lg={4} className='mt-1 Series_New'>
                    {newSeries.map((series) => (
                        <Col key={series.id} className='Series_New_Item'>
                            <img 
                                alt={series.title} 
                                src={series.src}
                                loading="lazy"
                            />
                            <div className='info_Series_New'>
                                <span>{series.title}</span>
                                <span>{series.episode}</span>
                            </div>
                        </Col>
                    ))}
                </Col>
            </Row>
        </Container>
    )
});

export default Header_MovieSeries;
