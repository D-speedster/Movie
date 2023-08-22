import React, { useEffect, useState } from 'react'
import { Nav, Navbar, Container, Offcanvas, Button, Col, Row } from 'react-bootstrap'
import './Header.css';
import { RiMovie2Fill } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { MdHome } from "react-icons/md"
import { Link } from 'react-router-dom';
import ApiRequest from '../../../Services/Axios/config';


export default function Header() {


    let [Search_Word, SetSearch_Word] = useState("");
    let [Search_Res, SetSearch_Res] = useState([])

    useEffect(() => {
        console.log(Search_Res);
    }, [Search_Res]);
    function ShowResult__Search() {
        const sXXS = Object.values(Search_Res).find((DlItem) => {
            return DlItem.name.toLowerCase().includes(Search_Word.toLowerCase())
        });
        if (sXXS) {
            return (
                <>
                    <Col lg={9}>
                        <h6>{sXXS['name']}</h6>
                    </Col>
                    <Col lg={3}>
                        <img alt="" width='70px' height='90px' src={sXXS['poster']} />
                    </Col>
                </>
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
                            <img alt="" width='250px' src='/img/movie-club-banner-2x.png' className='img-fluid'></img>


                        </Col>

                        <Col className='Login_Register mt-3'>
                            <div className='d-flex float-start'>
                                <Link to='/login'>
                                    <Button className='me-3 Login_Btn'>ورود</Button>
                                </Link>

                                <Link to='/register'>
                                    <Button className='me-3 Register_Btn'>ثبت نام</Button>
                                </Link>

                            </div>
                        </Col>
                    </Row>

                </Container>



            </div>
            <div>
                {['lg'].map((expand) => (
                    <Navbar key={expand} expand={expand} style={{ height: '82px' }} >
                        <Container >
                            <Navbar.Brand href="#" >
                                {/* <img alt="" style={{ height: '65px', marginTop: '7px', width: '120px' }} className='img-fluid' src='/img/MOVIECLUBLOGO.png' /> */}

                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                                className="bg-dark"
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
                                                <MdHome style={{ color: '#CF0A0A', fontSize: '30px' }}></MdHome>

                                                <span>خانه</span>
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to='/Movies'>

                                                {/* <RiMovie2Fill style={{ color: '#CF0A0A', fontSize: '26px' }}></RiMovie2Fill>
                                                <img style={{mixBlendMode : 'color-burn' , objectFit : 'contain'}}  src='img/cinema.png'/>
                                                دانلود فیلم */}
                                                <RiMovie2Fill style={{ color: '#CF0A0A', fontSize: '30px' }}></RiMovie2Fill>
                                                <span>دانلود فیلم</span>

                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <BiMoviePlay style={{ color: '#CF0A0A', fontSize: '30px' }}></BiMoviePlay>
                                            <span>دانلود سریال</span>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <BiMoviePlay style={{ color: '#CF0A0A', fontSize: '30px' }}></BiMoviePlay>
                                            <span>انیمیشن | انیمه</span>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <BiMoviePlay style={{ color: '#CF0A0A', fontSize: '30px' }}></BiMoviePlay>
                                            <span>اخبار</span>
                                        </Nav.Link>




                                    </Nav>

                                    <Col lg={4} className='Search'>
                                        <input
                                            style={{ border: '0', outline: '0' }}
                                            onChange={Search_Handler} type='search' placeholder='اسم فیلم را وارد نمایید' className='form-control bg-secondary search_btn'></input>
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
