import React, { useEffect, useState } from 'react'
import { Nav, Navbar, Container, Offcanvas, Button, Col, Row } from 'react-bootstrap'
import './Header.css';
import { RiMovie2Fill } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { MdHome } from "react-icons/md"
import { Link } from 'react-router-dom';
import ApiRequest from '../../../Services/Axios/config';
import { HiUsers } from 'react-icons/hi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    let scroll = document.querySelector('.navbar-special');

    if (scroll) {
        document.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            if (scrollY > 100) {
                scroll.classList.add('fixed-top');
            } else {
                scroll.classList.remove('fixed-top');
            }
        });
    } else {
        console.log("Element not found");
    }




    const [Search_Word, SetSearch_Word] = useState("");
    const [Search_Res, SetSearch_Res] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    function ShowResult__Search() {
        if (!Search_Res || Search_Res.length === 0) return null;

        const filteredResults = Object.values(Search_Res).filter((DlItem) => {
            return DlItem.name && DlItem.name.toLowerCase().includes(Search_Word.toLowerCase());
        });

        if (filteredResults.length === 0) {
            return (
                <div className='no-results'>
                    <p>نتیجه‌ای یافت نشد</p>
                </div>
            );
        }

        return filteredResults.slice(0, 5).map((movie, index) => (
            <Link 
                to={`/Movie/${movie.id}`} 
                key={movie.id || index}
                className='search-result-item'
            >
                <Row className='align-items-center'>
                    <Col xs={3}>
                        <img 
                            alt={movie.name || 'پوستر فیلم'} 
                            width='70px' 
                            height='90px' 
                            src={movie.poster}
                            loading="lazy"
                        />
                    </Col>
                    <Col xs={9}>
                        <h6 className='movie-title'>{movie.name}</h6>
                        <p className='movie-year'>{movie.year}</p>
                        <span className='movie-rate'>⭐ {movie.rate}</span>
                    </Col>
                </Row>
            </Link>
        ));
    }


    const Search_Handler = (event) => {
        const value = event.target.value;
        SetSearch_Word(value);
        
        const resultDiv = document.querySelector('.Result_Search');
        if (resultDiv) {
            resultDiv.style.display = value.length >= 2 ? 'block' : 'none';
        }
    }

    useEffect(() => {
        if (Search_Word.length >= 2) {
            setIsSearching(true);
            
            ApiRequest.get('/Moviez')
                .then(data => {
                    SetSearch_Res(data['data']);
                    setIsSearching(false);
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                    setIsSearching(false);
                });
        } else {
            SetSearch_Res([]);
        }
    }, [Search_Word])
    return (

        <div>
            <div className='Header_Top'>

                <Container>

                    <Row className='justify-content-center text-end '>
                        <Col className='mt-3'>
                            <img className='Logo_Web' alt="Logo" src='/img/movie-club-banner-2x.png'></img>


                        </Col>

                        <Col className='Login_Register mt-3'>
                            <div className='d-flex float-start'>
                                <Link to='/login'>
                                    <Button className='me-3 Login_Btn mt-4'>
                                        <HiUsers></HiUsers>

                                        پنل کاربری
                                    </Button>
                                </Link>

                                {/* <Link to='/register'>
                                    <Button className='me-3 Register_Btn'></Button>
                                </Link> */}

                            </div>
                        </Col>

                    </Row>

                </Container>



            </div>

            <div>

                {['lg'].map((expand) => (
                    <Navbar

                        className='navbar-special d-lg-block d-sm-block d-none mb-4 '
                        key={expand} expand={expand}
                        style={{ height: '82px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px' }} >

                        <Container>



                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                                className="bg-dark mt-3"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='justify-content-between'>
                                    <Nav>

                                        <Link className='nav-link' to='/'>
                                            <i className="fa-solid fa-house-chimney"></i>
                                            <span>خانه</span>
                                        </Link>


                                        <Link className='nav-link' to='/Movies'>

                                            <i className="fa-solid fa-clapperboard"></i>
                                            <span>دانلود فیلم</span>

                                        </Link>

                                        <Link className='nav-link' to='/Series'>
                                            <i className="fa-solid fa-tv"></i>
                                            <span>دانلود سریال</span>
                                        </Link>

                                        <Link className='nav-link'>

                                            <i className="fa-solid fa-dragon"></i>
                                        <span>انیمه</span>
                                    </Link>
                                    <Link className='nav-link'>

                                        <i className="fa-solid fa-newspaper"></i>
                                        <span>اخبار</span>
                                    </Link>
                                    <Link className='nav-link'>

                                        <i className="fa-solid fa-newspaper"></i>
                                        <span>تماس با ما</span>
                                    </Link>



                                </Nav>

                                <Col lg={4} className='Search'>
                                    <input
                                        onChange={Search_Handler}
                                        value={Search_Word}
                                        type='search'
                                        placeholder='جستجو کنید ...'
                                        className='form-control bg-secondary search_btn'
                                        aria-label="جستجوی فیلم"
                                    />
                                    <div className='Result_Search'>
                                        {isSearching ? (
                                            <div className='search-loading'>
                                                <p>در حال جستجو...</p>
                                            </div>
                                        ) : (
                                            <Container>
                                                {ShowResult__Search()}
                                            </Container>
                                        )}
                                    </div>
                                </Col>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                    </Navbar>
                ))}
        </div>
        </div >
    )
}
