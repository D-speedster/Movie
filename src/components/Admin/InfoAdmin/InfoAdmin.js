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
export default function InfoAdmin() {
    let [Movie_Count, setMovie_Count] = useState('');
    let [Series_Count, setSeries_Count] = useState('');
    let [Users_Count, setUsers_Count] = useState('');
    let [Comments_Count, setComments_Count] = useState('');
    let [Collections_Count, setCollections_Count] = useState('')
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
    let data2 = [{ name: '' }]
    useEffect(() => {
        fetch('https://database1.iran.liara.run/ALL_MOVIE')
            .then(res => res.json())
            .then(data => {
                setMovie_Count(Object.keys(data).length)
            })
        fetch('https://database1.iran.liara.run/Series')
            .then(res => res.json())
            .then(data => {
                setSeries_Count(Object.keys(data).length)
            })
        fetch('https://database1.iran.liara.run/Users')
            .then(res => res.json())
            .then(data => {
                setUsers_Count(Object.keys(data).length)
            })
        fetch('https://database1.iran.liara.run/Comments')
            .then(res => res.json())
            .then(data => {
                setComments_Count(Object.keys(data).length)
            })
        fetch('https://database1.iran.liara.run/Collections')
            .then(res => res.json())
            .then(data => {
                setCollections_Count(Object.keys(data).length)
            })
    })

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
                        <Card.Title style={{ fontSize: '38px' }} className='me-3 mt-3'>41</Card.Title>
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
