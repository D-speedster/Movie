import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Card, Button } from 'react-bootstrap'
import { BsCollection } from 'react-icons/bs';
import { GiNewspaper } from 'react-icons/gi';
import { HiUsers } from 'react-icons/hi';
import { RiMovie2Fill, RiSlideshow2Fill } from 'react-icons/ri';
import './InfoAdmin.css';
import { AiOutlineComment } from 'react-icons/ai'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Chart from './Chart';
import { RiAdminFill } from 'react-icons/ri'
import { xAxisData } from './datas';
import { MdOutlinePreview } from 'react-icons/md';

import { GrUserAdmin, GrView } from 'react-icons/gr'
import ApiRequest from '../../../Services/Axios/config';
export default function InfoAdmin() {
    const [Movie_Count, setMovie_Count] = useState(0);
    const [Series_Count, setSeries_Count] = useState(0);
    const [Users_Count, setUsers_Count] = useState(0);
    const [Comments_Count, setComments_Count] = useState(0);
    const [Collections_Count, setCollections_Count] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [movies, series, users, comments, collections] = await Promise.all([
                    ApiRequest.get('./Moviez'),
                    ApiRequest.get('./Series'),
                    ApiRequest.get('./Users'),
                    ApiRequest.get('./Comments'),
                    ApiRequest.get('./Collections')
                ]);

                setMovie_Count(Object.keys(movies.data).length);
                setSeries_Count(Object.keys(series.data).length);
                setUsers_Count(Object.keys(users.data).length);
                setComments_Count(Object.keys(comments.data).length);
                setCollections_Count(Object.keys(collections.data).length);
                setLoading(false);
            } catch (error) {
                console.error('خطا در دریافت اطلاعات:', error);
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    if (loading) {
        return (
            <Container>
                <div className='text-center mt-5'>
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">در حال بارگذاری...</span>
                    </div>
                    <p className='mt-3' style={{ color: '#999' }}>در حال بارگذاری داشبورد...</p>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <Row className='info_Admin'>
                <Col lg={3}>
                    <Card className='info_Admin_box'>
                        <Card.Header>
                            <Row className='justify-conent-center'>
                                <Col>
                                    <span style={{ fontSize: '21px' }}>کاربران</span>

                                </Col>
                                <Col className='text-start'>
                                    <HiUsers style={{ fontSize: '30px' }}></HiUsers>

                                </Col>

                            </Row></Card.Header>
                        <Card.Title style={{ fontSize: '38px' }} className='me-3 mt-3'>{Users_Count}</Card.Title>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <small>امروز</small>
                                    <small>752</small>

                                </Col>
                                <Col>
                                    <small>ماه</small>
                                    <small>122</small>
                                </Col>
                                <Col>
                                    <small>سال</small>
                                    <small>752</small>
                                </Col>

                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className='info_Admin_box'>
                        <Card.Header >
                            <Row className='justify-conent-center'>
                                <Col>
                                    <span style={{ fontSize: '21px' }}>نظرات</span>

                                </Col>
                                <Col className='text-start'>
                                    <AiOutlineComment style={{ fontSize: '30px' }}></AiOutlineComment>

                                </Col>

                            </Row>
                        </Card.Header>
                        <Card.Title style={{ fontSize: '38px' }} className='me-3 mt-3'>{Series_Count}</Card.Title>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <small>تایید شده</small>
                                    <small>752</small>

                                </Col>
                                <Col>
                                    <small>در انتظار</small>
                                    <small>122</small>
                                </Col>
                                <Col>
                                    <small>حذف شده</small>
                                    <small>752</small>
                                </Col>

                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className='info_Admin_box'>
                        <Card.Header>
                            <Row className='justify-conent-center'>
                                <Col>
                                    <span style={{ fontSize: '21px' }}>بازدید ها</span>

                                </Col>
                                <Col className='text-start'>
                                    <MdOutlinePreview style={{ fontSize: '30px' }}></MdOutlinePreview>

                                </Col>

                            </Row>
                        </Card.Header>
                        <Card.Title style={{ fontSize: '38px' }} className='me-3 mt-3'>145</Card.Title>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <small>دوبله</small>
                                    <small>752</small>

                                </Col>
                                <Col>
                                    <small>زیرنویس</small>
                                    <small>122</small>
                                </Col>
                                <Col>
                                    <small>اصلی</small>
                                    <small>752</small>
                                </Col>

                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className='info_Admin_box'>
                        <Card.Header>
                            <Row className='justify-conent-center'>
                                <Col>
                                    <span style={{ fontSize: '21px' }}>ادمین ها</span>

                                </Col>
                                <Col className='text-start'>
                                    <RiAdminFill style={{ fontSize: '30px' }}></RiAdminFill>

                                </Col>

                            </Row>
                        </Card.Header>
                        <Card.Title style={{ fontSize: '38px' }} className='me-3 mt-3'>2</Card.Title>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <small>دوبله</small>
                                    <small>752</small>

                                </Col>
                                <Col>
                                    <small>زیرنویس</small>
                                    <small>122</small>
                                </Col>
                                <Col>
                                    <small>اصلی</small>
                                    <small>752</small>
                                </Col>

                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className='info_Admin'>
                <Col lg={3}>
                    <Card className='info_Admin_box'>
                        <Card.Header>
                            <Row className='justify-conent-center'>
                                <Col>
                                    <span style={{ fontSize: '21px' }}>فیلم ها</span>

                                </Col>
                                <Col className='text-start'>
                                    <RiMovie2Fill style={{ fontSize: '30px' }}></RiMovie2Fill>

                                </Col>

                            </Row></Card.Header>
                        <Card.Title style={{ fontSize: '38px' }} className='me-3 mt-3'>{Movie_Count}</Card.Title>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <small>دوبله</small>
                                    <small>752</small>

                                </Col>
                                <Col>
                                    <small>زیرنویس</small>
                                    <small>122</small>
                                </Col>
                                <Col>
                                    <small>اصلی</small>
                                    <small>752</small>
                                </Col>

                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className='info_Admin_box'>
                        <Card.Header >
                            <Row className='justify-conent-center'>
                                <Col>
                                    <span style={{ fontSize: '21px' }}>سریال ها</span>

                                </Col>
                                <Col className='text-start'>
                                    <RiSlideshow2Fill style={{ fontSize: '30px' }}></RiSlideshow2Fill>

                                </Col>

                            </Row>
                        </Card.Header>
                        <Card.Title style={{ fontSize: '38px' }} className='me-3 mt-3'>{Series_Count}</Card.Title>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <small>دوبله</small>
                                    <small>752</small>

                                </Col>
                                <Col>
                                    <small>زیرنویس</small>
                                    <small>122</small>
                                </Col>
                                <Col>
                                    <small>اصلی</small>
                                    <small>752</small>
                                </Col>

                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className='info_Admin_box'>
                        <Card.Header>
                            <Row className='justify-conent-center'>
                                <Col>
                                    <span style={{ fontSize: '21px' }}>خبر ها</span>

                                </Col>
                                <Col className='text-start'>
                                    <GiNewspaper style={{ fontSize: '30px' }}></GiNewspaper>

                                </Col>

                            </Row>
                        </Card.Header>
                        <Card.Title style={{ fontSize: '38px' }} className='me-3 mt-3'>74</Card.Title>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <small>دوبله</small>
                                    <small>752</small>

                                </Col>
                                <Col>
                                    <small>زیرنویس</small>
                                    <small>122</small>
                                </Col>
                                <Col>
                                    <small>اصلی</small>
                                    <small>752</small>
                                </Col>

                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className='info_Admin_box'>
                        <Card.Header>
                            <Row className='justify-conent-center'>
                                <Col>
                                    <span style={{ fontSize: '21px' }}>کالکشن ها</span>

                                </Col>
                                <Col className='text-start'>
                                    <BsCollection style={{ fontSize: '30px' }}></BsCollection>

                                </Col>

                            </Row>
                        </Card.Header>
                        <Card.Title style={{ fontSize: '38px' }} className='me-3 mt-3'>{Collections_Count}</Card.Title>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <small>دوبله</small>
                                    <small>752</small>

                                </Col>
                                <Col>
                                    <small>زیرنویس</small>
                                    <small>122</small>
                                </Col>
                                <Col>
                                    <small>اصلی</small>
                                    <small>752</small>
                                </Col>

                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <div className='mx-4 rounded-2' style={{ background: 'rgba(29, 29, 50, 0.911)' }}>
                <Chart grid title="کاربران جدید" data={xAxisData} dataKey="user" />
            </div>

        </Container>
    )
}
