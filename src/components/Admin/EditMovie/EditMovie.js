import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export default function EditMovie() {
    const { userId } = useParams();
    let [MovieEditInput, SetEditMovie] = useState();
    useEffect(() => {
        fetch('https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/ALL_MOVIE.json')
            .then(res => res.json())
            .then(data => {
                let movieEdit = Object.entries(data).find((movie) => {
                    return movie['1']['id'] == userId
                })
                SetEditMovie(movieEdit['1']);






            })
    }, [])
    useEffect(() => {

        console.log(MovieEditInput?.id)

    }, [MovieEditInput])



    return (
        <div>
            <h1 style={{ color: '#CCC' }}>{userId}</h1>

            <Row className='mb-5 boox-insert'>
                <Form>
                    <Container>
                        <Row className='mt-2 text-end'>
                            <Col lg={9}>
                                <Col lg={12} className='mt-2 row '>

                                    <Col lg={2}>
                                        <label>نام فیلم</label>
                                    </Col>

                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label>سال انتشار</label>
                                    </Col>
                                    <Col lg={10}>
                                        <input
                                            className='form-control'
                                            placeholder='سال انتشار'
                                            value={MovieEditInput?.year}
                                            onChange={(event) => SetEditMovie({ ...MovieEditInput, year: event.target.value })}
                                        />
                                    </Col>

                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label>بازیگران</label>
                                    </Col>
                                    <Col lg={10}>
                                        <input className='form-control'
                                            placeholder='نام فیلم'
                                            value={MovieEditInput?.stars}
                                            onChange={(event) => SetEditMovie({ ...MovieEditInput, stars: event.target.value })}

                                        />
                                    </Col>
                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label>کارگردان</label>
                                    </Col>
                                    <Col lg={10}>
                                        <input className='form-control ' placeholder='نام فیلم' value={MovieEditInput?.director} />
                                    </Col>
                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label>کشور</label>
                                    </Col>
                                    <Col lg={10}>
                                        <input className='form-control ' placeholder='نام فیلم' value={MovieEditInput?.countries} />
                                    </Col>
                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label>نویسنده</label>
                                    </Col>
                                    <Col lg={10}>
                                        <input value={MovieEditInput?.writers} className='form-control ' placeholder='نام نویسنده' />
                                    </Col>
                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label>ژانر</label>
                                    </Col>
                                    <Col lg={10}>
                                        <input className='form-control'
                                            placeholder='ژانر'
                                            value={MovieEditInput?.genre}
                                            onClick={(event)=>SetEditMovie({...MovieEditInput , genre : event.target.value })}
                                        />
                                    </Col>
                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label>امتیاز</label>
                                    </Col>
                                    <Col lg={10}>
                                        <input
                                            className='form-control'
                                            value={MovieEditInput?.rate}
                                            onChange={(event) => SetEditMovie({ ...MovieEditInput, rate: event.target.value })}

                                        />
                                    </Col>

                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label>مدت زمان</label>
                                    </Col>
                                    <Col lg={10}>
                                        <input value={MovieEditInput?.time}
                                            className='form-control '
                                            placeholder='مدت زمان'
                                            onChange={(event) => SetEditMovie({ ...MovieEditInput, time: event.target.value })}

                                        />
                                    </Col>
                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label className='mt-4'>خلاصه داستان</label>
                                    </Col>

                                </Col>
                            </Col>
                            <Col lg={2} className='mt-1'>
                                <img alt="" style={{ borderRadius: '15px', height: '420px' }} src={MovieEditInput?.poster} className='' />
                            </Col>
                        </Row>

                    </Container>

                </Form>

            </Row>
        </div>
    )
}
