import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header_Admin from './Header_Admin/Header_Admin'
import { Outlet } from 'react-router-dom';
import SideBar from './Side_Bar/SideBar';
import './Admin.css';



export default function Admin() {

    useEffect(() => {
        document.body.style.backgroundColor = '#171b31';
    })



    return (
        <div className='Admin-Panel'>
            <Header_Admin></Header_Admin>
            <div className='d-lg-flex'>
                <Col lg={2} sm={12} xs={12} className='sec1'>
                    <SideBar></SideBar>
                </Col>
                <Col lg={10} className='sec2'>
                    <Container>
                        <Outlet />
                    </Container>
                </Col>

            </div>
        </div>
    )
}
