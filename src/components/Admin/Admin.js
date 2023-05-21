import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header_Admin from './Header_Admin/Header_Admin'
import { Outlet } from 'react-router-dom';
import SideBar from './Side_Bar/SideBar';
import './Admin.css';



export default function Admin() {
 
    document.body.style.background = '#34495e';

    return (
        <div className='Admin-Panel'>
            <div className='row justify-content-between'>
                <Col lg={2} md={2}>
                    <SideBar></SideBar>
                </Col>

                <Col lg={10} md={10} >
                    <Header_Admin></Header_Admin>
                    <Outlet />
                </Col>
            </div>
        </div>
    )
}
