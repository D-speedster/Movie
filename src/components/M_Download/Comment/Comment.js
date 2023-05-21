import React, { useState } from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import './Comment.css'
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { ImForward } from 'react-icons/im';

export default function Comment() {
    let [Avatars, SetAvatars] = useState([
        { name: 'Boy1', src: '/img/avatar/boy_2.png' },
        { name: 'Boy2', src: '/img/avatar/boy_3.png' },
        { name: 'Boy3', src: '/img/avatar/boy_4.png' },
        { name: 'Girl1', src: '/img/avatar/girl_3.jpg' },
        { name: 'Girl2', src: '/img/avatar/girl_2.png' },
        { name: 'Girl3', src: '/img/avatar/girl_1.jpg' }
    ])
    return (
        <div className='section_Comment mt-5' style={{ color: 'white' }}>
            <Container>
                <Row>
                    <Col lg={4} md={4} xs={12} sm={12} className="Info_Comment me-lg-3 me-md-3">
                        <h6>Send a Comment</h6>
                        <textarea className='form-control' placeholder='نظر شما '></textarea>
                        <br />
                        <label>Name</label>
                        <input placeholder='نام' className='form-control' />
                        <br />
                        <label>Email</label>
                        <input placeholder='ایمیل ...' className='form-control' />
                        <hr />
                        <Row>
                            {Avatars.map(item => {
                                return <Col lg={4} xs={2} sm={2}><img alt="" src={item.src} /></Col>
                            })}
                        </Row>

                        <br />
                        <button className='btn btn-info'>انتشار کامنت</button>

                    </Col>
                    <Col lg={7} md={8} xs={12} sm={12} className="Comments mx-lg-3 mx-md-3">
                        <br /><br /><br />
                        <Card style={{ marginTop: '0px' }}>
                            <Card.Header>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img alt="" width='60px' height='60px' src={Avatars[2].src} />
                                        <span className='mt-3 me-2' style={{ fontSize: '19px' }}>Ali</span>
                                    </div>

                                    <div className='d-flex mt-3 '>
                                        <div className='me-2'>
                                            <BiLike style={{ color: 'green', fontSize: '24px' }}></BiLike>
                                            <BiDislike style={{ color: 'red', fontSize: '24px' }}></BiDislike>
                                        </div>
                                        <span>24/12/2021</span>
                                    </div>

                                </div>
                            </Card.Header>
                            <Card.Body >
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                </p>
                                <a href='/'>
                                    <ImForward></ImForward><span>پاسخ</span>
                                </a>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img alt="" width='60px' height='60px' src={Avatars[2].src} />
                                        <span className='mt-3 me-2' style={{ fontSize: '19px' }}>Ali</span>
                                    </div>

                                    <div className='d-flex mt-3 '>
                                        <div className='me-2'>
                                            <BiLike style={{ color: 'green', fontSize: '24px' }}></BiLike>
                                            <BiDislike style={{ color: 'red', fontSize: '24px' }}></BiDislike>
                                        </div>
                                        <span>24/12/2021</span>
                                    </div>

                                </div>
                            </Card.Header>
                            <Card.Body >
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                </p>
                                <a href='/'>
                                    <ImForward></ImForward><span>پاسخ</span>
                                </a>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img alt="" width='60px' height='60px' src={Avatars[2].src} />
                                        <span className='mt-3 me-2' style={{ fontSize: '19px' }}>Ali</span>
                                    </div>

                                    <div className='d-flex mt-3 '>
                                        <div className='me-2'>
                                            <BiLike style={{ color: 'green', fontSize: '24px' }}></BiLike>
                                            <BiDislike style={{ color: 'red', fontSize: '24px' }}></BiDislike>
                                        </div>
                                        <span>24/12/2021</span>
                                    </div>

                                </div>
                            </Card.Header>
                            <Card.Body >
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                </p>
                                <a href='/'>
                                    <ImForward></ImForward><span>پاسخ</span>
                                </a>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img alt="" width='60px' height='60px' src={Avatars[2].src} />
                                        <span className='mt-3 me-2' style={{ fontSize: '19px' }}>Ali</span>
                                    </div>

                                    <div className='d-flex mt-3 '>
                                        <div className='me-2'>
                                            <BiLike style={{ color: 'green', fontSize: '24px' }}></BiLike>
                                            <BiDislike style={{ color: 'red', fontSize: '24px' }}></BiDislike>
                                        </div>
                                        <span>24/12/2021</span>
                                    </div>

                                </div>
                            </Card.Header>
                            <Card.Body >
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                </p>
                                <a href='/'>
                                    <ImForward></ImForward><span>پاسخ</span>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
