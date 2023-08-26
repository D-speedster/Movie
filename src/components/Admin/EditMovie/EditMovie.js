import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ApiRequest from '../../../Services/Axios/config';

export default function EditMovie() {


    const { userId } = useParams();
    let [MovieEditInput, SetEditMovie] = useState();
    const EditerHandler = (event) => {
        // ApiRequest.get('/Moviez').then(data => {
        //     let MovieGetter = Object.values(data.data).filter(movie => {
        //         return movie.id == MovieEditInput.id
        //     })
        //     console.log(MovieGetter ['0'])
        // })
        ApiRequest.put(`/Moviez/${MovieEditInput.id}`, MovieEditInput).then(data => {
            console.log(data)
        })

    }
    useEffect(() => {
        ApiRequest.get('/Moviez').then(data => {
            let movieEdit = Object.entries(data.data).find((movie) => {
                return movie['1'].id == userId
            })
            console.log(movieEdit)
            SetEditMovie(movieEdit['1'])
        })

    }, [])
    useEffect(() => {
        console.log(MovieEditInput)
    }, [MovieEditInput])

    return (
        <div className='container'>
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
                                    <Col lg={10}>
                                        <input
                                            className='form-control'
                                            placeholder='نام فیلم'
                                            value={MovieEditInput?.name}
                                            onChange={(event) => SetEditMovie({ ...MovieEditInput, name: event.target.value })}
                                        />
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
                                            placeholder='بازیگران'
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
                                        <input
                                            value={MovieEditInput?.writers}
                                            className='form-control '
                                            placeholder='نام نویسنده'
                                            onChange={(event) => SetEditMovie({ ...MovieEditInput, writers: event.target.value })}

                                        />
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
                                            onChange={(event) => SetEditMovie({ ...MovieEditInput, genre: event.target.value })}
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
                                    <Col lg={10}>
                                        <input value={MovieEditInput?.BackgroundImage}
                                            className='form-control '
                                            placeholder='لینک بک گراند'
                                            onChange={(event) => SetEditMovie({ ...MovieEditInput, BackgroundImage: event.target.value })}

                                        />
                                    </Col>
                                </Col>
                                <Col lg={12} className='mt-2 row'>
                                    <Col lg={2}>
                                        <label className='mt-4'>خلاصه داستان</label>
                                    </Col>
                                    <Col lg={10}>
                                        <textarea value={MovieEditInput?.TranslateText}
                                            className='form-control '
                                            placeholder='خلاصه داستان'
                                            onChange={(event) => SetEditMovie({ ...MovieEditInput, TranslateText: event.target.value })}

                                        />
                                    </Col>
                                </Col>
                            </Col>
                            <Col lg={2} className='mt-1'>
                                <img alt="" style={{ borderRadius: '15px', height: '420px' }} src={MovieEditInput?.poster} className='' />
                            </Col>

                            <br />
                        </Row>

                    </Container>

                </Form>
                <button onClick={EditerHandler} className='btn btn-danger mt-3 mx-auto col-4 '>ذخیره تغییرات</button>


            </Row>
        </div>
    )
}
