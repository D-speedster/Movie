import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Header_MovieSeries.css';
export default function Header_MovieSeries() {
    return (
        <Container>
            <Row className='mb-5 mt-2'>
                <Col lg={8} className='Movie_Top'>
                    <div className='d-flex'>
                        <Col className='Coming_Soon'>
                            <img alt="" src='/img/C_391.webp' />
                            <div className='Coming_Text'>بزودی</div>
                        </Col>
                        <Col className='Coming_Soon'>
                            <img alt="" src='/img/john.jpg' />
                            <div className='Coming_Text'>بزودی</div>
                        </Col>
                        <Col className='Coming_Soon'>
                            <img alt="" src='/img/amsterdam-poster.jpg' />
                            <div className='Coming_Text'>بزودی</div>

                        </Col>
                    </div>
                </Col>
                <Col lg={4} className='mt-1 Series_New'>
                    <Col className='Series_New_Item'>
                        <img alt="" src='/img/777.jpg' />
                        <div className='info_Series_New'>
                            <span>سریال وایکینگ ها</span>
                            <span>قسمت 6 فصل 6 اضافه شد</span>
                        </div>
                    </Col>
                    <Col className='Series_New_Item'>
                        <img alt="" src='/img/888.webp' />
                        <div className='info_Series_New'>
                            <span>سریال وایکینگ ها</span>
                            <span>قسمت 6 فصل 6 اضافه شد</span>
                        </div>
                    </Col>
                    <Col className='Series_New_Item'>
                        <img alt="" src='/img/999.jpg' />
                        <div className='info_Series_New'>
                            <span>سریال وایکینگ ها</span>
                            <span>قسمت 6 فصل 6 اضافه شد</span>
                        </div>
                    </Col>
                    <Col className='Series_New_Item'>
                        <img alt="" src='/img/666.jpg' />
                        <div className='info_Series_New'>
                            <span>سریال وایکینگ ها</span>
                            <span>قسمت 6 فصل 6 اضافه شد</span>
                        </div>
                    </Col>

                </Col>

            </Row>

        </Container>
    )
}
