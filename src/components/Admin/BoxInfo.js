import React, { useEffect, useState } from 'react'
import { Container, Col, Figure, Row, Form, Button, Table } from 'react-bootstrap';
import './BoxInfo.css';
import Swal from 'sweetalert2'

export default function BoxInfo(props) {
    let [Movie,] = useState();
    const [Images_Movie, SetImages] = useState([]);
    let [Image_Moviez, SetImageMoviez] = useState([]);
    let ImagesMoviez = [];
    let [TranslateText, SetTranslate] = useState('داستانی مشخص نشده است .')
    let [BackgroundImage, SetBackground] = useState('لینک مورد نظر را وارد کنید')
    const BackSetter = (event) => {
        SetBackground(event.target.value)
    }
    let finArray = [];
    const TranslatePlot = (Plot) => {
        fetch(`https://one-api.ir/translate/?token=665599:63d7d40ada1334.05423749&action=google&lang=fa&q=${Plot}`)
            .then(response => response.json())
            .then(data => {
                SetTranslate(data['result'])

            })
        return TranslateText

    }
    function SubmitHandler() {
        let finArray = { ...props, Image_Moviez, TranslateText , BackgroundImage }

        if (props.Type == "series") {
            fetch('https://database1.iran.liara.run/Series', {
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
            fetch('https://database1.iran.liara.run/Moviez', {
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
        // console.log("START PROCESS POST", Movie)

        // console.log("END PROCESS POST", Movie)
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'پست شما در دیتابیس ذخیره شد'
        })


    }
    function ImgHandlerClick(event) {
        event.target.classList.toggle("IsSelectImg");
        const imgSrc = event.target.src;
        const imgIndex = ImagesMoviez.findIndex((img) => img.url === imgSrc);

        if (imgIndex !== -1) {
            ImagesMoviez = ImagesMoviez.filter((img) => img.url !== imgSrc);
        } else {

            SetImageMoviez(prevState => [...prevState, imgSrc]);

        }


    }
    function ImageGetter() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTc0N2FhOTczMTViZDI2MTdkMTVjOTk0MzVjYjc5YiIsInN1YiI6IjYyYTgzNTEzN2Y2YzhkNzdiYmE4NDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lOCBFIWI14W-dhVxANVCS-OG17kRiLcusMkXKU-dfSg'
            }
        };
        fetch(`https://api.themoviedb.org/3/movie/${props.id}/images`, options)
            .then(response => response.json())
            .then(response => SetImages(response['backdrops']))
            .catch(err => console.error(err));
    }


    useEffect(() => {
        let IMGSR = Images_Movie.filter(res => {
            return res['vote_average'] > 5.32
        })
        let FinIMSRC = IMGSR.map((img) => {
            return "https://image.tmdb.org/t/p/w500" + img.file_path

        })
        SetImageMoviez(FinIMSRC)

    }, [Images_Movie])



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
                                    <Form.Label>ژانر</Form.Label>
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

                                <Col lg={7}>
                                    <textarea value={TranslateText} style={{ resize: 'none' }} className='form-control mt-3' ></textarea>
                                </Col>
                                <Col lg={3}>
                                    <button onClick={() => TranslatePlot(props.story)} className='btn btn-info mt-4 '>دریافت خلاصه داستان</button>

                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Form.Group as={Col} lg={2} controlId='formWriters'>
                                    <Form.Label>بک گراند</Form.Label>
                                </Form.Group>
                                <Col lg={10}>
                                    <Form.Control onChange={BackSetter} type='text' placeholder='مدت زمان' value={BackgroundImage} />
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
                        {!Images_Movie ? null : (Images_Movie.map((img, index) => <img onClick={ImgHandlerClick} className='img-fluid col-lg-3 mt-3' src={"https://image.tmdb.org/t/p/w500/" + img['file_path']} data-sd={index} />))}
                    </Row>
                    <button onClick={SubmitHandler} className='btn btn-success mt-3 '>ذخیره و انتشار</button>

                </Container>

            </div>

        </Row>

    )
}
