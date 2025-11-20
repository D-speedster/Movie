import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
const Footer = React.memo(function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='Footer' role="contentinfo">
            <hr style={{ color: '#CCC' }} />
            <Container>
                <Row className='text-center align-items-center'>
                    <Col lg={4} md={4} sm={12} className='mb-3 mb-md-0'>
                        <nav aria-label="فوتر">
                            <a href="/about" className='pe-3'>درباره ما</a>
                            <a href="/rules" className='pe-3'>قوانین</a>
                            <a href="/help" className='pe-3'>راهنما</a>
                        </nav>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='mb-3 mb-md-0'>
                        <p className='mb-0'>
                            <strong>© {currentYear} مووی کلاب</strong>
                            <br />
                            <small>تمامی حقوق محفوظ است</small>
                        </p>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <button 
                            className='btn' 
                            style={{ background: '#ca252d', color: 'white' }}
                            aria-label="وضعیت سیستم"
                        >
                            ALL SYSTEMS OPERATIONAL
                        </button>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
});

export default Footer;
