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




    let [Search_Word, SetSearch_Word] = useState("");
    let [Search_Res, SetSearch_Res] = useState([])

    useEffect(() => {
        console.log(Search_Res);
    }, [Search_Res]);
    function ShowResult__Search() {
        const sXXS = Object.values(Search_Res).filter((DlItem) => {
            return DlItem.name.toLowerCase().includes(Search_Word.toLowerCase())
        });
        console.log(sXXS)
        if (sXXS) {

            return (
                sXXS.map(ios => {

                    <>
                        <Col lg={9}>
                            <h6>{console.log(ios['name'])}</h6>
                        </Col>
                        <Col lg={3}>
                            <img alt="" width='70px' height='90px' src={ios['poster']} />
                        </Col>
                    </>
                })

            )
        }
        return sXXS
    }
    ShowResult__Search();


    let Search_Handler = (event) => {
        SetSearch_Word(event.target.value);
        if (event.target.value.length < 1) {
            document.querySelector('.Result_Search').style.display = 'none '
        }

    }
    useEffect(() => {
        if (Search_Word.length === 3) {
            document.querySelector('.Result_Search').style.display = 'block'

            ApiRequest.get('/Moviez').then(data => {
                SetSearch_Res(data['data'])

            })

        }
    }, [Search_Word])
    return (

        <div>
            <div className='Header_Top'>

                <Container>

                    <Row className='justify-content-center text-end '>
                        <Col className='Logo_Web mt-3'>
                            <img alt="" height='90px !important' width='160px' src='/img/movie-club-banner-2x.png'></img>


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
                        style={{ height: '82px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;' }} >

                        <Container>

                            <Navbar.Brand href="#" >
                                {/* <img alt="" style={{ height: '65px', marginTop: '7px', width: '120px' }} className='img-fluid' src='/img/MOVIECLUBLOGO.png' /> */}

                            </Navbar.Brand>

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
                                        <Nav.Link href='#Home' className=''>
                                            <Link to='/'>
                                                <i className="fa-solid fa-house-chimney"></i>
                                                <span>خانه</span>
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to='/Movies'>

                                                <i className="fa-solid fa-clapperboard"></i>
                                                <span>دانلود فیلم</span>

                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to='/Series'>
                                                <i className="fa-solid fa-tv"></i>
                                                <span>دانلود سریال</span>
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>

                                            <i className="fa-solid fa-dragon"></i>
                                            <span>انیمه</span>
                                        </Nav.Link>
                                        <Nav.Link>

                                            <i className="fa-solid fa-newspaper"></i>
                                            <span>اخبار</span>
                                        </Nav.Link>
                                        <Nav.Link>

                                            <i className="fa-solid fa-newspaper"></i>
                                            <span>تماس با ما</span>
                                        </Nav.Link>



                                    </Nav>

                                    <Col lg={4} className='Search'>
                                        <input

                                            onChange={Search_Handler} type='search' placeholder='جستجو کنید ...' className='form-control bg-secondary search_btn'></input>
                                        <div className='Result_Search'>
                                            <Container>
                                                <Row className='justify-content-between'>
                                                    {Search_Res ? ShowResult__Search() : null}
                                                </Row>
                                            </Container>


                                        </div>
                                    </Col>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </div>
    )
}
