import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header_Admin.css'
import { BsMoonStarsFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Header_Admin() {
    const [isDarkMode, setIsDarkMode] = React.useState(true);

    const BackHandler = () => {
        setIsDarkMode(prev => !prev);
        document.body.style.backgroundColor = isDarkMode ? '#FFFFFF' : '#171b31';
    }
    return (
        <Navbar className='NavBar_Admin' collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand style={{ color: '#FFF' }} href="#home">داشبورد ادمین</Navbar.Brand>
                <Link className='me-5' to='/' style={{ color: '#FFF' }}>سایت اصلی</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <button
                            onClick={BackHandler}
                            className='btn btn-link'
                            aria-label={isDarkMode ? 'تغییر به حالت روز' : 'تغییر به حالت شب'}
                            title={isDarkMode ? 'حالت روز' : 'حالت شب'}
                        >
                            <BsMoonStarsFill style={{ color: '#FFF' }} />
                        </button>

                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets"><BsMoonStarsFill></BsMoonStarsFill></Nav.Link> */}
                        <Nav.Link eventKey={2} href="#memes">
                            <img 
                                src="/img/speedster.jpg" 
                                alt="تصویر پروفایل مدیر"
                                style={{ width: '35px', height: '35px', borderRadius: '50%' }} 
                            />
                            <span className='pe-2'>مدیر اصلی</span>
                            <div className='navbar_dis'>
                                <Link to='addMovie'><li> افزودن فیلم</li></Link>
                                <Link to='addSerie'><li> افزودن سریال</li></Link>
                                <Link to='addTrailer'><li> افزودن تریلر</li></Link>
                                <Link to='addNews'><li> افزودن اخبار</li></Link>
                                <Link to='newCollection'><li> کالکشن ها</li></Link>
                                <Link to='User-Management'><li> مدیریت کاربران</li></Link>
                                <Link to='Movies-Management'><li>مدیریت فیلم ها  </li></Link>
                                <Link to='Series-Management'><li> مدیریت سریال ها</li></Link>
                                <Link to='Comments-Management'><li> مدیریت کامنت ها</li></Link>
                                <Link to='BoxOffice'><li> باکس آفیس</li></Link>
                                <Link to='Plans'><li> اشتراک ها</li></Link>
                                <Link to='setting'><li> تنظیمات کلی قالب</li></Link>

                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header_Admin;