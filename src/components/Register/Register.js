import React, { useEffect, useState } from 'react'
import { Row, Container, InputGroup, Col, Form, Button } from 'react-bootstrap';
import './Register.css';
// import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserPlus } from 'react-icons/fa';
import { MdOutlinePassword } from 'react-icons/md'
import { Link, json } from 'react-router-dom';

export default function Register() {
  let [Username, SetUsername] = useState('');
  let [Email, SetEmail] = useState('');
  let [Password, SetPassword] = useState('');
  useEffect(() => {
    document.body.classList.add('background-form-2');
    // document.body.style.direction = 'ltr'
    return () => {
      document.body.classList.remove('background-form-2');
    };
  }, []);
  let submitUser = () => {
    let obj = {
      user: Username,
      email: Email,
      password: Password
    }
    console.log('Register SuccessFully')
    console.log(obj)
    fetch('http://localhost:3000/Users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json())
      .then(data => console.log('End Process', data))
  }
  function EmailChanger(event) {
    SetEmail(event.target.value);
  }
  function UserChanger(event) {
    SetUsername(event.target.value);
  }
  function PasswordChanger(event) {
    SetPassword(event.target.value);

  }
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
                <h3 className='text-center mt-3'>ثبت نام در سایت</h3>

                <br />
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm"><FaUserPlus /></InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='نام کاربری'
                    value={Username}
                    onChange={UserChanger}
                  />
                </InputGroup>

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm"><AiOutlineMail /></InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='ایمیل'
                    value={Email}
                    onChange={EmailChanger}
                  />
                </InputGroup>

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm"><MdOutlinePassword /></InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='پسوورد'
                    value={Password}
                    onChange={PasswordChanger}
                  />

                </InputGroup>

                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm"><MdOutlinePassword /></InputGroup.Text>
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='تکرار پسوورد'
                  />
                </InputGroup>
                <h4>Captcha</h4>


                <Button onClick={submitUser} className='col-12' variant="primary">
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
