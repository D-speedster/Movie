import React, { useEffect, useState } from 'react'
import { Figure, Col, Modal, Button, Container, Row } from 'react-bootstrap';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Title_Admin from '../TitleAdmin/TitleAdmin';
import ApiRequest from '../../../Services/Axios/config';

export default function Movie_Series() {
    let [result, SetResult] = useState([]);
    const [show, setShow] = useState(false);
    const [SeriesToRemove, setSeriesToRemove] = useState('');
    const [TextSearch, SetSearch] = useState('');
    const handleClose = () => { setShow(false) }

    const Remover = () => {
        setShow(false);
        ApiRequest.delete(`Series/${SeriesToRemove}.json`).then(data=>setSeriesToRemove(''))


    }
    const DeleteMovie = (id) => {
        setShow(true)
        setSeriesToRemove(id)

    }
    const EditMovie = (id) => {

    }

    useEffect(() => {
        ApiRequest.get('/Series').then(data => SetResult(data['data']))

    }, [SeriesToRemove]);

    const SearchAllMovie = (event) => {

        SetSearch(event.target.value);

    }
    useEffect(() => {
        if (TextSearch.length >= 3) {
            ApiRequest.get('/Serires').then(data => {
                let result = Object.entries(data['data']).filter(res => {
                    return res[1].name.toLowerCase().includes(TextSearch.toLowerCase());
                });
                result = result.map(es => es[1]);
                SetResult(result);
            })
        
        } else {
            ApiRequest('/Series').then(data=>SetResult(data['data']))
                
        }
    }, [TextSearch]);
    return (
        <Container>
            <div dir='rtl' className='row justify-content-between '>
                <Row className='d-flex justify-content-between mt-3'>
                    <Col lg={6}>
                        <Title_Admin Title={'مدیریت سریال ها  : '}></Title_Admin>
                    </Col>
                    <Col lg={6}>
                        <input onChange={SearchAllMovie} className='form-control me-4 mt-3' placeholder='فیلم مورد نظر ...' />
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>آیا میخواهید این فیلم را حذف کنید ؟ </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            خیر نیازی نیست
                        </Button>
                        <Button variant="primary" onClick={() => Remover()}>
                            بله انجام شود
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Container>
                    <div className='row pe-3 ps-3 justify-content-between'>
                        {result ? (
                            Object.entries(result).reverse().map((res, prev) => (
                                <>

                                    <Col lg={3} sm={6} md={3} xs={6} className='movie_data' style={{ width: '22%', marginTop: '25px', backgroundImage: `url(${res['1']['poster']})` }}>
                                        {/* <img src={res['1']['poster']} className='img-fluid' alt='Movie Poster' /> */}
                                        <div className='info_onMovie'>
                                            <h4>{res['1']['name']}</h4>
                                        </div>
                                        <div className='Setting_Footer'>
                                            <br />
                                            <Row>
                                                <Col style={{ marginTop: '-12px' }}>
                                                    <Link to={res['1']['id']}>
                                                        <AiOutlineEdit style={{ color: 'green', fontSize: '22px' }}></AiOutlineEdit>

                                                    </Link>
                                                    <BsTrash3 onClick={() => DeleteMovie(res['0'])} style={{ color: 'red', fontSize: '22px' }}></BsTrash3>
                                                </Col>
                                                <Col style={{ marginTop: '-12px' }}>
                                                    {res['1']['CreatedAt'] ? res['1']['CreatedAt'] : 'نامشخص'}

                                                </Col>
                                            </Row>

                                        </div>
                                    </Col>


                                </>

                            ))
                        )
                            : null

                        }
                    </div>

                </Container>
            </div>
        </Container>
    )
}
