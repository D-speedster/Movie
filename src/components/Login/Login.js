import React, { useEffect } from 'react'
import { Row, Container, InputGroup, Col, Form, Button } from 'react-bootstrap';
import './Login.css';
// import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { FaUserPlus } from 'react-icons/fa';
import { MdOutlinePassword } from 'react-icons/md'
import { Link } from 'react-router-dom';

export default function Register() {
    useEffect(() => {
        document.body.classList.add('background-form-2');
        // document.body.style.direction = 'ltr'
       
    }, []);
    return (
        <div className='background-form'>
            <div className='Register pe-3 ps-3'>
                <Container fluid>
                    <Row className='justify-content-between'>
                        <h4 className='text-center fw-bold'>ورود به دنیای فیلم و سریال </h4>
                        <div className='d-flex m-auto'>
                            <Link to='/Login'>
                                <Button>ورود</Button>
                            </Link>
                            <Link to='/Register'>
                                <Button>ثبت نام</Button>
                            </Link>

                        </div>
                        <Col lg={8} sm={6} xs={12} className='Register-Form mt-3'>


                            <Form className='col-lg-9 mx-auto text-start'>
                                <h3 className='text-center mt-3'>ورود به حساب کاربری</h3>
                                <br />
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm"><FaUserPlus /></InputGroup.Text>
                                    <Form.Control
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                        placeholder='نام کاربری'
                                    />
                                </InputGroup>


                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Text id="inputGroup-sizing-sm"><MdOutlinePassword /></InputGroup.Text>
                                    <Form.Control
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                        placeholder='پسوورد'
                                    />

                                </InputGroup>
                                <h4>Captcha</h4>



                                <br />
                                <Button className='col-12' variant="primary" type="submit">
                                    ثبت نام
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={4} sm={6} xs={12} className='Register-Left  mt-3'>
                            <img alt="" src='/img/welcome.jpg' />


                        </Col>
                    </Row>
                </Container>


            </div>
        </div>

    )
}
