import React, { useEffect } from 'react'
import './Plans.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import Title_Admin from '../TitleAdmin/TitleAdmin';

export default function Plans() {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("HEllow");
    }, []);
    return (
        <Container className='pe-3 ps-3'>
            <Title_Admin Title={'مدیریت اشتراک ها'}></Title_Admin>
            <Row>
                <Col sm={12} xs={12} lg={3} className='mt-4'>
                    <Card>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 87.34928229665073,176.86124401913875 174.69856459330146,153.7224880382775 281,136 C 387.30143540669854,118.27751196172248 512.555023923445,105.97129186602871 604,132 C 695.444976076555,158.0287081339713 753.0813397129187,222.39234449760767 851,230 C 948.9186602870813,237.60765550239233 1087.1196172248804,188.45933014354068 1192,174 C 1296.8803827751196,159.54066985645932 1368.44019138756,179.77033492822966 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 114.90909090909093,379.5598086124402 229.81818181818187,359.1196172248804 326,366 C 422.18181818181813,372.8803827751196 499.6363636363636,407.08133971291875 583,429 C 666.3636363636364,450.91866028708125 755.6363636363635,460.555023923445 849,440 C 942.3636363636365,419.444976076555 1039.8181818181818,368.69856459330146 1139,357 C 1238.1818181818182,345.30143540669854 1339.090909090909,372.6507177033493 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>                        <Card.Body>
                            <Card.Title className='text-center'>اشتراک رایگان</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>محدود بودن تعداد فیلم ها</ListGroup.Item>
                            <ListGroup.Item>عدم پخش آنلاین</ListGroup.Item>
                            <ListGroup.Item>عدم دسترسی به بخش فولدر</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} xs={12} lg={3} className='mt-4'>
                    <Card>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,200 0,200 C 87.34928229665073,176.86124401913875 174.69856459330146,153.7224880382775 281,136 C 387.30143540669854,118.27751196172248 512.555023923445,105.97129186602871 604,132 C 695.444976076555,158.0287081339713 753.0813397129187,222.39234449760767 851,230 C 948.9186602870813,237.60765550239233 1087.1196172248804,188.45933014354068 1192,174 C 1296.8803827751196,159.54066985645932 1368.44019138756,179.77033492822966 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#fcb900" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><path d="M 0,600 C 0,600 0,400 0,400 C 114.90909090909093,379.5598086124402 229.81818181818187,359.1196172248804 326,366 C 422.18181818181813,372.8803827751196 499.6363636363636,407.08133971291875 583,429 C 666.3636363636364,450.91866028708125 755.6363636363635,460.555023923445 849,440 C 942.3636363636365,419.444976076555 1039.8181818181818,368.69856459330146 1139,357 C 1238.1818181818182,345.30143540669854 1339.090909090909,372.6507177033493 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#fcb900" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>                        <Card.Body>
                            <Card.Title className='text-center'>اشتراک special</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>محدود بودن تعداد فیلم ها</ListGroup.Item>
                            <ListGroup.Item>عدم پخش آنلاین</ListGroup.Item>
                            <ListGroup.Item>عدم دسترسی به بخش فولدر</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} xs={12} lg={3} className='mt-4'>
                    <Card>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,200 0,200 C 87.34928229665073,176.86124401913875 174.69856459330146,153.7224880382775 281,136 C 387.30143540669854,118.27751196172248 512.555023923445,105.97129186602871 604,132 C 695.444976076555,158.0287081339713 753.0813397129187,222.39234449760767 851,230 C 948.9186602870813,237.60765550239233 1087.1196172248804,188.45933014354068 1192,174 C 1296.8803827751196,159.54066985645932 1368.44019138756,179.77033492822966 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><path d="M 0,600 C 0,600 0,400 0,400 C 114.90909090909093,379.5598086124402 229.81818181818187,359.1196172248804 326,366 C 422.18181818181813,372.8803827751196 499.6363636363636,407.08133971291875 583,429 C 666.3636363636364,450.91866028708125 755.6363636363635,460.555023923445 849,440 C 942.3636363636365,419.444976076555 1039.8181818181818,368.69856459330146 1139,357 C 1238.1818181818182,345.30143540669854 1339.090909090909,372.6507177033493 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#0693e3" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>                        <Card.Body>
                            <Card.Title className='text-center'>اشتراک professional</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>محدود بودن تعداد فیلم ها</ListGroup.Item>
                            <ListGroup.Item>عدم پخش آنلاین</ListGroup.Item>
                            <ListGroup.Item>عدم دسترسی به بخش فولدر</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} xs={12} lg={3} className='mt-4'>
                    <Card>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,200 0,200 C 87.34928229665073,176.86124401913875 174.69856459330146,153.7224880382775 281,136 C 387.30143540669854,118.27751196172248 512.555023923445,105.97129186602871 604,132 C 695.444976076555,158.0287081339713 753.0813397129187,222.39234449760767 851,230 C 948.9186602870813,237.60765550239233 1087.1196172248804,188.45933014354068 1192,174 C 1296.8803827751196,159.54066985645932 1368.44019138756,179.77033492822966 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ff6900" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><path d="M 0,600 C 0,600 0,400 0,400 C 114.90909090909093,379.5598086124402 229.81818181818187,359.1196172248804 326,366 C 422.18181818181813,372.8803827751196 499.6363636363636,407.08133971291875 583,429 C 666.3636363636364,450.91866028708125 755.6363636363635,460.555023923445 849,440 C 942.3636363636365,419.444976076555 1039.8181818181818,368.69856459330146 1139,357 C 1238.1818181818182,345.30143540669854 1339.090909090909,372.6507177033493 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ff6900" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>                        <Card.Body>
                            <Card.Title className='text-center'>اشتراک آنلاین</Card.Title>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>محدود بودن تعداد فیلم ها</ListGroup.Item>
                            <ListGroup.Item>عدم پخش آنلاین</ListGroup.Item>
                            <ListGroup.Item>عدم دسترسی به بخش فولدر</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}
