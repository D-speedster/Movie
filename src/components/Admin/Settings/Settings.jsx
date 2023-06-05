import React from 'react'
import './Settings.css'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function Settings() {
    return (
        <Container>
            <Nav className='Settings-Nav' justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Link to="Home">تنظیمات صفحه اصلی</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="Movie">تنظیمات فیلم</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="Series">تنظیمات سریال</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="Slider">تنظیمات اسلایدر</Link>
                </Nav.Item>

                <Nav.Item>
                    <Link to="Box-Office">تنظیمات باکس آفیس</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="other">متفرقه</Link>
                </Nav.Item>

            </Nav>

            <br /><br />
            <Outlet></Outlet>
        </Container>
    )
}
