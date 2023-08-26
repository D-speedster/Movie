import React, { useState } from 'react';
import './addTrailer.css';
import { Card, Col, Container, Row, Button, Form, Modal } from 'react-bootstrap';
import { BsPlusCircle } from 'react-icons/bs';
import Title_Admin from '../TitleAdmin/TitleAdmin';


export default function AddTrailer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <>
               

                <Modal style={{direction : 'ltr'}} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Trailer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            <Title_Admin Title={'افزودن تریلر جدید : '}></Title_Admin>
            <div className='Add_New_Trailer'>
                <Button onClick={handleShow}>
                    <BsPlusCircle />
                    تریلر جدید
                </Button>
            </div>
            <Title_Admin Title={'تریلر های اخیر : '}></Title_Admin>
            <div className='Last_trailer_added'>
                <Container>
                    <Row className='justify-content-between mb-5'>
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className='text-center bg-secondary ' style={{ border: 'none' }}>
                                <Card.Header>
                                    <Card.Img style={{ height: '150px' }} src='https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/f/five-nights-at-freddys-switch/hero'></Card.Img>
                                    <img src='' className='img-fluid'></img>
                                </Card.Header>
                                <Card.Body>Five Nights at Freddy's
                                </Card.Body>
                                <Card.Footer>
                                    <span>October 27, 2023</span>
                                    <br />                                    <br />

                                    <div className='d-flex justify-content-between'>
                                        <span style={{ color: 'red', cursor: 'pointer' }}>DELETE</span>
                                        <span style={{ color: 'green', cursor: 'pointer' }}>Edit</span>

                                    </div>

                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className='text-center bg-secondary ' style={{ border: 'none' }}>
                                <Card.Header>
                                    <Card.Img style={{ height: '150px' }} src='https://www.oppenheimermovie.com/meta/meta-v3-en_US.jpg'></Card.Img>
                                    <img src='' className='img-fluid'></img>
                                </Card.Header>
                                <Card.Body>Oppenheimer

                                </Card.Body>
                                <Card.Footer>
                                    <span>October 27, 2023</span>
                                    <br />
                                    <br />

                                    <div className='d-flex justify-content-between'>
                                        <span style={{ color: 'red', cursor: 'pointer' }}>DELETE</span>
                                        <span style={{ color: 'green', cursor: 'pointer' }}>Edit</span>

                                    </div>

                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className='text-center bg-secondary ' style={{ border: 'none' }}>
                                <Card.Header>
                                    <Card.Img style={{ height: '150px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FKnVx5_a4rzANybVI2efQrowGfoJj15waQ&usqp=CAU'></Card.Img>
                                    <img src='' className='img-fluid'></img>
                                </Card.Header>
                                <Card.Body>The Flash
                                </Card.Body>
                                <Card.Footer>
                                    <span>October 27, 2023</span>
                                    <br />                                    <br />

                                    <div className='d-flex justify-content-between'>
                                        <span style={{ color: 'red', cursor: 'pointer' }}>DELETE</span>
                                        <span style={{ color: 'green', cursor: 'pointer' }}>Edit</span>

                                    </div>

                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className='text-center bg-secondary ' style={{ border: 'none' }}>
                                <Card.Header>
                                    <Card.Img style={{ height: '150px' }} src='https://cdn.zoomg.ir/2021/11/trolls-world-tour-4k-2020.jpg'></Card.Img>
                                    <img src='' className='img-fluid'></img>
                                </Card.Header>
                                <Card.Body>Trols 3
                                </Card.Body>
                                <Card.Footer>
                                    <span>October 27, 2023</span>
                                    <br />
                                    <br />

                                    <div className='d-flex justify-content-between'>
                                        <span style={{ color: 'red', cursor: 'pointer' }}>DELETE</span>
                                        <span style={{ color: 'green', cursor: 'pointer' }}>Edit</span>

                                    </div>

                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className='text-center bg-secondary ' style={{ border: 'none' }}>
                                <Card.Header>
                                    <Card.Img style={{ height: '150px' }} src='https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/f/five-nights-at-freddys-switch/hero'></Card.Img>
                                    <img src='' className='img-fluid'></img>
                                </Card.Header>
                                <Card.Body>Five Nights at Freddy's
                                </Card.Body>
                                <Card.Footer>
                                    <span>October 27, 2023</span>
                                    <br />                                    <br />

                                    <div className='d-flex justify-content-between'>
                                        <span style={{ color: 'red', cursor: 'pointer' }}>DELETE</span>
                                        <span style={{ color: 'green', cursor: 'pointer' }}>Edit</span>

                                    </div>

                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className='text-center bg-secondary ' style={{ border: 'none' }}>
                                <Card.Header>
                                    <Card.Img style={{ height: '150px' }} src='https://www.oppenheimermovie.com/meta/meta-v3-en_US.jpg'></Card.Img>
                                    <img src='' className='img-fluid'></img>
                                </Card.Header>
                                <Card.Body>Oppenheimer

                                </Card.Body>
                                <Card.Footer>
                                    <span>October 27, 2023</span>
                                    <br />
                                    <br />

                                    <div className='d-flex justify-content-between'>
                                        <span style={{ color: 'red', cursor: 'pointer' }}>DELETE</span>
                                        <span style={{ color: 'green', cursor: 'pointer' }}>Edit</span>

                                    </div>

                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className='text-center bg-secondary ' style={{ border: 'none' }}>
                                <Card.Header>
                                    <Card.Img style={{ height: '150px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FKnVx5_a4rzANybVI2efQrowGfoJj15waQ&usqp=CAU'></Card.Img>
                                    <img src='' className='img-fluid'></img>
                                </Card.Header>
                                <Card.Body>The Flash
                                </Card.Body>
                                <Card.Footer>
                                    <span>October 27, 2023</span>
                                    <br />                                    <br />

                                    <div className='d-flex justify-content-between'>
                                        <span style={{ color: 'red', cursor: 'pointer' }}>DELETE</span>
                                        <span style={{ color: 'green', cursor: 'pointer' }}>Edit</span>

                                    </div>

                                </Card.Footer>
                            </Card>

                        </Col>
                        <Col lg={3} md={3} sm={6} xs={6}>
                            <Card className='text-center bg-secondary ' style={{ border: 'none' }}>
                                <Card.Header>
                                    <Card.Img style={{ height: '150px' }} src='https://cdn.zoomg.ir/2021/11/trolls-world-tour-4k-2020.jpg'></Card.Img>
                                    <img src='' className='img-fluid'></img>
                                </Card.Header>
                                <Card.Body>Trols 3
                                </Card.Body>
                                <Card.Footer>
                                    <span>October 27, 2023</span>
                                    <br />
                                    <br />

                                    <div className='d-flex justify-content-between'>
                                        <span style={{ color: 'red', cursor: 'pointer' }}>DELETE</span>
                                        <span style={{ color: 'green', cursor: 'pointer' }}>Edit</span>

                                    </div>

                                </Card.Footer>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
