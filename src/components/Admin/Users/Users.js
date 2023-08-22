import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './User.css'
import { BiEditAlt } from 'react-icons/bi';
import { ImBin2 } from 'react-icons/im';
import Swal from 'sweetalert2'
import ApiRequest from '../../../Services/Axios/config';
import axios from "axios";


export default function DataTable() {
  const [users, Setusers] = useState(true);
  const [pending, setpending] = useState(true);
  const [show, setShow] = useState(false);
  const [InfoUser, SetInfoUser] = useState('')
  const handleClose = () => { setShow(false) }
  const [UserName, SetUserName] = useState('');
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [Type, SetType] = useState('');
  const [NumEdit, SetNumEdit] = useState('')
  const EditUser = (id) => {
    ApiRequest.get(`/Users/${id}`).then(data => {

      SetUserName(data.data.user)
      SetEmail(data.data.email)
      SetPassword(data.data.password)
      SetType(data.data.type)
      SetNumEdit(data.data.id);


    })
    setShow(true)


  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    // تابع برای دریافت اطلاعات اولیه از دیتابیس
    async function fetchData() {
      try {
        const response = await ApiRequest.get('Users');
        Setusers(response.data);
        setpending(false);
        console.log(response.data);
      } catch (error) {
        console.error('خطا در دریافت اطلاعات از دیتابیس', error);
      }
    }

    fetchData(); // فراخوانی تابع برای دریافت اطلاعات اولیه
  }, []);
  useEffect(() => {
    ApiRequest.get('/Users').then(data => {
      Setusers(data.data);
    })
  }, [users])
  const SubmitEdit = () => {
    setShow(false);
    let obj = {
      user: UserName,
      email: Email,
      password: Password,
      type: Type
    }
    ApiRequest.put(`/Users/${NumEdit}`, obj).then(data => console.log(data.data))
  }

  const DeleteUser = (id) => {
    Swal.fire({
      title: 'آیا مطمین هستید ؟ ',
      text: "این عملیات بدون بازگشت میباشد",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'بله حذف شود!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id)
        // ApiRequest.delete(`/Users/`, id).then(data => console.log(data))
        async function DeleteAsyncUser() {
          try {
            const response = await ApiRequest.delete(`Users/${id}`)
            console.log(response.data); // نتیجه‌ای که از سرور دریافت می‌شود
            // ...
          } catch (error) {
            console.error(error); // نمایش پیام خطا در صورت بروز خطا
          }
        }
        DeleteAsyncUser()
        function FireMessage() {
          Swal.fire(
            'موفقیت آمیز!',
            'کاربر مورد نظر از سایت حذف شد.',
            'success'
          )
        }
        FireMessage()

      }
    })
  }
  const UserHandler = (event) => {
    SetUserName(event.target.value)

  }
  const EmeailHandler = (event) => {
    SetEmail(event.target.value)


  }
  const PasswordHandler = (event) => {
    SetPassword(event.target.value)

  }
  const TypeHandler = (event) => {
    SetType(event.target.value)

  }

  return (
    <Container>
      <>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="email"
                  placeholder='Email'
                  autoFocus
                  value={Email}
                  onChange={EmeailHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder='text'
                  autoFocus
                  value={UserName}
                  onChange={UserHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder='type'
                  autoFocus
                  value={Type}
                  onChange={TypeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder='Password'
                  autoFocus
                  value={Password}
                  onChange={PasswordHandler}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={SubmitEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <Row className='d-flex justify-content-between mt-3'>
        <Col lg={6}> <h3 className='title_admin'>مدیریت کاربران</h3></Col>
        <Col lg={6}>
          <input className='form-control ' placeholder='کاربر مورد نظر ...' />
        </Col>
      </Row>
      {!users ? 'Locading ...' : (
        <Table responsive className='mt-3'>
          <thead>
            <tr>
              <th>نام کاربری</th>
              <th>ایمیل</th>
              <th>سطح دسترسی</th>
              <th>عملیات</th>

            </tr>
          </thead>

          <tbody>

            {Object.entries(users).map((user) => (
              <tr>
                <td>{user[1].user}</td>
                <td>{user[1].email}</td>
                {/* <td>{console.log(user)}</td> */}
                <td>{user[1].type}</td>
                <td>


                  <BiEditAlt onClick={() => EditUser(user[1].id)} style={{ color: 'green', fontSize: '19px' }}></BiEditAlt>
                  <ImBin2 onClick={() => DeleteUser(user[1].id)} className='me-3' style={{ color: 'red', fontSize: '19px' }}></ImBin2>
                </td>


              </tr>


            )

            )}


          </tbody>
        </Table>
      )
      }
    </Container>
  );
}
