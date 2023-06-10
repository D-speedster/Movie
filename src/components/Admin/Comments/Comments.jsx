import React from 'react'

import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './Comments.css';

export default function Comments() {
    let [Comments, SetComments] = useState('');
    useEffect(() => {
        fetch('https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/Comments.json')
            .then(res => res.json())
            .then(data => {
                SetComments(data)
                // setpending(false)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-between mt-3'>
                    <Col lg={6}> <h3 className='title_admin'>مدیریت کامنت ها</h3></Col>

                </Row>
                {!Comments ? 'Locading ...' : (
                    <Table responsive className='mt-3'>
                        <thead>
                            <tr>
                                <th>نویسنده</th>
                                <th>نظر</th>
                                <th>تاریخ</th>
                                <th>پست</th>
                                <th>وضعیت</th>

                            </tr>
                        </thead>

                        <tbody>

                            {Object.entries(Comments).map((Comment) => (
                                <tr>
                                    {/* <td>{Comment[1].user}</td>
                                    <td>{Comment[1].email}</td>
                                    <td>{Comment[1].password}</td> */}
                                    {/* <td>{console.log(user)}</td> */}

                                </tr>


                            )

                            )}


                        </tbody>
                    </Table>
                )}

            </Container>
        </div>
    )
}
