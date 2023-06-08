import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header_Admin.css'
import { BsMoonStarsFill } from 'react-icons/bs';

function Header_Admin() {
    function BackHandler (event){
        console.log(event.target.classList.toggle("BackActive"));
        if(event.target.classList == "BackActive"){
            alert("YEEES")
            document.body.style.backgroundColor = '#FFFF';
        } else {
            alert("NOOOOOOOOOOOOOOOOO");
            document.body.style.backgroundColor = '#0000';
            

        }
    }
    return (
        <Navbar className='NavBar_Admin' collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand style={{ color: '#FFF' }} href="#home">داشبورد ادمین</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    <BsMoonStarsFill onClick={BackHandler}></BsMoonStarsFill>

                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets"><BsMoonStarsFill></BsMoonStarsFill></Nav.Link> */}
                        <Nav.Link eventKey={2} href="#memes">
                            <img src='../img/speedster.jpg' style={{width : '35px' , height : '35px' , borderRadius : '50%'}} />
                            <span className='pe-2'>مدیر اصلی</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header_Admin;