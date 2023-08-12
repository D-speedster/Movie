import React from 'react'

import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './Comments.css';
import ApiRequest from '../../../Services/Axios/config';
import Title_Admin from '../TitleAdmin/TitleAdmin';

export default function Comments() {
    let [Comments, SetComments] = useState('');
    useEffect(() => {
        ApiRequest.get('/Comments').then(data => {
            SetComments(data.data)
            // setpending(false)

        })

    }, [])
    return (
        <div>
            <Container>
                <Row className='d-flex justify-content-between mt-3'>
                    <Title_Admin Title={'مدیریت کامنت ها  : '}></Title_Admin>
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
                            {Object.entries(Comments).map(Comment => (


                                <tr>
                                    <td>{Comment[1].member}</td>
                                    <td>{Comment[1].comment}</td>
                                    <td>{Comment[1].data}</td>
                                    <td><a href={`http://localhost:3000/movie/${Comment[1].idMovie}`}>
                                        مشاهده پست
                                    </a>  </td>
                                    <td>مشخص نشده</td>
                                </tr>






                            ))}

                            {/* <td>سلام</td>
                            <td>سلام</td>
                            <td>سلام</td>
                            <td>سلام</td> */}


                        </tbody>
                    </Table>
                )}

            </Container>
        </div >
    )
}
