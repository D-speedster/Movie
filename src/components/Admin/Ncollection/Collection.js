import React, { useEffect, useState } from 'react'
import { Row, Col, Modal, Button, InputGroup, Form, Container } from 'react-bootstrap'
import { AiOutlinePlus, AiTwotoneEdit } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs';
import './Collection.css';
import { RiMovie2Fill } from 'react-icons/ri'
import { fontSize } from '@mui/system';
export default function Collection() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Collection, SetCollection] = useState('');
    let [SearchIDMovie, SetIdMovie] = useState('');
    let [ReLoad_Collectio , SetReCollecton] = useState('');

    useEffect(() => {
        console.log(SetIdMovie)
    }, [SetIdMovie])
    useEffect(() => {
        fetch('https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/Collections.json')
            .then(res => res.json())
            .then(data => {
                SetCollection(data)
            })
    }, [])

    let RemoverHandler = (name) => {
        console.log(`Remover Start Movie : ${name} `)
        fetch(`https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/Collections/${name}.json`,
            {
                method: 'DELETE'
            }
        ).then(res => res.json())
            .then(data => console.log(SetCollection(Collection)))

    }


    function SearchCollection(event) {
        let resultS = document.querySelector('.MovieInputSearch').value

        fetch('https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/ALL_MOVIE.json')
            .then(res => res.json())
            .then(data => {
                let findMovie = Object.entries(data).filter(ios => {
                    return ios['1'].id == resultS
                })

                findMovie.length == 1 ? SetIdMovie(prevImages => [...prevImages, findMovie['0']['1']])
                    : alert("فیلم در دیتابیس یافت نشد . ابتدا آن را به سایت اضافه کنید ");

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        document.querySelector('.MovieInputSearch').value = ''
        console.log(SearchIDMovie)
    }
    let SubmitCollection = (event) => {
        console.log(SearchIDMovie)
        let name_collection = document.querySelector('.input_name_collection').value;
        let input_poster_collection = document.querySelector('.input_poster_collection').value;

        let objCollection = {

            name: name_collection,
            poster: input_poster_collection,
            movies: SearchIDMovie
        }
        fetch(`https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/Collections.json`, {
            method: 'POST',
            body: JSON.stringify(objCollection)
        }).then(res => res.json)
            .then(data => console.log(data))
        handleClose()
        SetIdMovie('')

    }
    return (
        <div className='Collection'>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <button className='btn btn-danger mt-2 me-2' onClick={handleShow}>
                                <AiOutlinePlus />
                                افزودن کالکشن
                            </button>
                            <br /><br />
                            <section className='Box-Collection '>

                                <div class="container overflow-hidden">
                                    <div class="row gx-5 justify-content-between">

                                        {Collection ? (
                                            Object.entries(Collection).map(item => {
                                                return <>
                                                    <div class="col-lg-4 Item-Collection" style={{ backgroundImage: `url(${item['1']['poster']})` }}>
                                                        <div className='row justify-content-between Item-Collection_Info'>

                                                            <div className='col-12 mt-2 '>
                                                                <h3>کالکشن {item['1']['name']}</h3>

                                                            </div>

                                                            <div className='d-flex Footer_Collection '>
                                                                <div className='col-9'>
                                                                    <h5>
                                                                        <RiMovie2Fill></RiMovie2Fill>
                                                                        {/* فیلم ها : {item['1']['movies'].length} */}
                                                                    </h5>

                                                                </div>
                                                                <div className='col-3'>
                                                                    <span>
                                                                        <AiTwotoneEdit style={{ color: 'white', fontSize: '22px' }} />
                                                                    </span>
                                                                    <BsTrash onClick={() => RemoverHandler(item['0'])} style={{ color: 'white', fontSize: '22px' }}></BsTrash>
                                                                </div>
                                                            </div>


                                                        </div>


                                                    </div>
                                                </>

                                            }
                                            ) ) : (<h1>فیلمی موجود نیست</h1>)}


                                    </div>
                                </div>




                            </section>


                        </Col>
                    </Row>
                </Container>


                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}

                >
                    <Modal.Header>
                        <Modal.Title>افزودن کالکشن جدید</Modal.Title>
                        <button type="button" class="btn-close mx-5" aria-label="Close"></button>
                    </Modal.Header>
                    <Modal.Body>
                        <label>نام کالکشن</label>
                        <input className='form-control mt-3 input_name_collection' placeholder='نام نمایش کالکشن'></input>
                        <label className='mt-3 '>بنر کالکشن</label>
                        <input className='form-control mt-3 input_poster_collection' placeholder='لینک پوستر'></input>
                        <label className='mt-2'>آیدی فیلم مورد نظر رو وارد کنید</label>
                        <InputGroup size="sm" className="mb-3 mt-3">
                            <InputGroup.Text onClick={SearchCollection} style={{ fontSize: '16px', cursor: 'pointer', background: 'red', color: 'white' }} id="inputGroup-sizing-sm">افزودن</InputGroup.Text>
                            <Form.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                                className='MovieInputSearch'
                            />
                        </InputGroup>
                        <Row>
                            {!SearchIDMovie ? null :
                                Object.entries(SearchIDMovie).map((img) => (
                                    <Col lg={3}>
                                        <img className='img-fluid' src={img['1'].poster} />
                                    </Col>
                                ))}

                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            کنسل
                        </Button>
                        <Button onClick={SubmitCollection} variant="primary">ثبت</Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    )
}
