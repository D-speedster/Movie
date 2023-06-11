import React, { useEffect, useState } from 'react'
import { Container, Col, Figure, Row, Form, Button, Table } from 'react-bootstrap';
import './BoxInfo.css';

export default function BoxInfo(props) {
    let [Movie,] = useState();
    const [Images_Movie, SetImages] = useState([]);
    let [Image_Moviez, SetImageMoviez] = useState([]);
    let ImagesMoviez = [];
    let finArray = [];
    console.log(props)
    function SubmitHandler() {
        let finArray = { ...props, Image_Moviez }
        console.log(finArray);
        if (props.type == "TVSeries") {
            fetch('http://localhost:3000/Series', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(finArray)
            }).then(res => {
                return res.json()
            }).then(data => {
                console.log(data)
            })
        }
        else {
            fetch('http://localhost:3000/Moviez', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(finArray)
            }).then(res => {
                return res.json()
            }).then(data => {
                console.log(data)
            })
        }
        console.log("START PROCESS POST", Movie)

        console.log("END PROCESS POST", Movie)


    }
    function ImgHandlerClick(event) {
        console.log(event.target.src);
        event.target.classList.toggle("IsSelectImg");
        const imgSrc = event.target.src;
        const imgIndex = ImagesMoviez.findIndex((img) => img.url === imgSrc);

        if (imgIndex !== -1) {
            ImagesMoviez = ImagesMoviez.filter((img) => img.url !== imgSrc);
        } else {
            // const objImg = {
            //     id: Math.random(10, 50),
            //     url: imgSrc.url,
            // };


            SetImageMoviez(prevState => [...prevState, imgSrc]);

        }


    }
    function ImageGetter() {
        fetch(`https://imdb-api.com/en/API/Images/k_709yvj7w/${props.id}`).then(res => {
            return res.json()
        }).then(data => {
            SetImages(data['items'])
        })

    }


    useEffect(() => {
        console.log(Images_Movie)

    }, [Images_Movie])
    useEffect(() => {

        console.log(Image_Moviez)

    }, [Image_Moviez])


    return (
        <Row className='mb-5 boox-insert'>
            <div>
                <Container>
                    <Row className='mt-2'>

                        <Col lg={9} className='justify-content-center'>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formName'>
                                    <Form.Label>نام فیلم</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control type='text' placeholder='نام فیلم' value={props.name} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formYear'>
                                    <Form.Label>سال انتشار</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control type='text' placeholder='سال انتشار' value={props.year} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formStars'>
                                    <Form.Label>بازیگران</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control type='text' placeholder='بازیگران' value={props.stars} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formDirector'>
                                    <Form.Label>کارگردان</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control type='text' placeholder='کارگردان' value={props.director} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formCountries'>
                                    <Form.Label>کشور</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control type='text' placeholder='کشور' value={props.countries} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formWriters'>
                                    <Form.Label>نویسنده</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control type='text' placeholder='نویسنده' value={props.writers} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formWriters'>
                                    <Form.Label>نویسنده</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control type='text' placeholder='نویسنده' value={props.genre} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formWriters'>
                                    <Form.Label>امتیاز</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control type='text' placeholder='نویسنده' value={props.rate} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formWriters'>
                                    <Form.Label>مدت زمان</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control type='text' placeholder='مدت زمان' value={props.time} />
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formWriters'>
                                    <Form.Label>خلاصه داستان</Form.Label>
                                </Form.Group>

                                <Col lg={10}>
                                    <textarea value={props.story} style={{ resize: 'none' }} className='form-control mt-3' ></textarea>
                                </Col>

                            </Row>

                            <Row className='mb-3 Bx_Dl mx-0'>
                                <Col lg={2}>
                                    <h5>لیست دانلود </h5>
                                </Col>
                                <Col lg={10} className='list_Box'>
                                    <Table striped>
                                        <thead>
                                            <tr>
                                                <th>کیفیت</th>
                                                <th>دوبله فارسی</th>
                                                <th>زیرنویس فارسی</th>
                                                <th>صوت دوبله</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1080p</td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                            </tr>
                                            <tr>
                                                <td>720p</td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                            </tr>
                                            <tr>
                                                <td>480p</td>
                                                <td ><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>

                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>

                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formWriters'>
                                    <Form.Label></Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <button onClick={ImageGetter} type="button" className="col-12 mt-3 btn-danger btn btn-primary">دریافت عکس </button>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={3} className='mt-1'>
                            <img alt="" style={{ borderRadius: '15px', height: '420px' }} src={props.poster} className='' />
                        </Col>


                    </Row>
                    <Row className='mt-3' >
                        {!Images_Movie ? null : (Images_Movie.slice(0, 15).map((img, index) => <img onClick={ImgHandlerClick} className='img-fluid col-lg-3 mt-3' src={img['image']} data-sd={index} />))}
                    </Row>
                    <button onClick={SubmitHandler} className='btn btn-success mt-3 '>ذخیره و انتشار</button>

                </Container>

            </div>

        </Row>

    )
}
