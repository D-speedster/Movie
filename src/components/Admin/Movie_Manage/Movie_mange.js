import { fontWeight } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Figure, Col, Modal, Button, Container } from 'react-bootstrap';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsTrash3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Movie_mange.css';


export default function Movie_mange() {
    let [result, SetResult] = useState([]);
    const [show, setShow] = useState(false);
    const [movieToRemove, setMovieToRemove] = useState('');


    const handleClose = () => { setShow(false) }
    const Remover = () => {
        setShow(false);
        fetch(`https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/ALL_MOVIE/${movieToRemove}.json`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovieToRemove('');
            })
            .catch(error => {
                console.error('Error removing movie:', error);
            });

    }
    const DeleteMovie = (id) => {
        setShow(true)
        setMovieToRemove(id)

    }
    const EditMovie = (id) => {

    }

    useEffect(() => {
        fetch('https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/ALL_MOVIE.json')
            .then(res => res.json())
            .then(data => {
                SetResult(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [movieToRemove]);
    return (
        <Container>
            <div className='row'>
                <h4 style={{ color: '#FFF' }}>فیلم ها</h4>
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
                {result ? (
                    Object.entries(result).reverse().map((res, prev) => (
                        <>

                            <Col lg={12}>

                                <div className='row Moviez_setting text-center justify-content-center mx-auto'>

                                    <Col lg={2}>
                                        <img src={res['1']['poster']} className='img-fluid' />
                                    </Col>

                                    <Col lg={4} className='mt-4' >
                                        <span>{res['1']['name']}</span>
                                    </Col>

                                    <Col lg={2} className='mt-4'>
                                        <Link to={res['1']['id']}>
                                            <AiOutlineEdit style={{ color: 'green' }}></AiOutlineEdit>

                                        </Link>
                                        <BsTrash3 onClick={() => DeleteMovie(res['0'])} style={{ color: 'red' }}></BsTrash3>
                                    </Col>
                                    <Col className='mt-4'>
                                        <span>منشتر شده  : <small>{res['1']['CreatedAt'] ? res['1']['CreatedAt'] : 'نامشخص'}</small></span>
                                    </Col>
                                    <Col lg={1} className='mt-4'>
                                        <h3>{prev + 1}</h3>
                                    </Col>



                                </div>
                            </Col>

                        </>

                    ))
                )
                    : null

                }
            </div>
        </Container>
    )
}
