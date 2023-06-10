import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './User.css'
export default function DataTable() {
  const [users, Setusers] = useState(true);
  const [pending, setpending] = useState(true);
  useEffect(() => {
    fetch('https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json')
      .then(res => res.json())
      .then(data => {
        Setusers(data)
        setpending(false)
        console.log(data)
      })
  }, [])

  return (
    <Container>
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
              <th>پسوورد</th>

            </tr>
          </thead>

          <tbody>

            {Object.entries(users).map((user) => (
              <tr>
                <td>{user[1].user}</td>
                <td>{user[1].email}</td>
                <td>{user[1].password}</td>
                {/* <td>{console.log(user)}</td> */}

              </tr>


            )

            )}


          </tbody>
        </Table>
      )}
    </Container>
  );
}
