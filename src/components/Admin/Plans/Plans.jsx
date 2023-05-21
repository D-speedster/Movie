import React, { useEffect } from 'react'
import './Plans.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';

export default function Plans() {
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("HEllow");
    }, []);
    return (
        <Container>
            <Row>
                <Col sm={6} xs={6} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://www.universfreebox.com/wp-content/uploads/2022/04/fibre-free-rouge-2-800x450-c-default1-800x450-c-default.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>اشتراک رایگان</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
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
                <Col sm={6} xs={6} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://www.universfreebox.com/wp-content/uploads/2022/04/fibre-free-rouge-2-800x450-c-default1-800x450-c-default.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>اشتراک special</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} xs={6} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://www.universfreebox.com/wp-content/uploads/2022/04/fibre-free-rouge-2-800x450-c-default1-800x450-c-default.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>اشتراک professional</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} xs={6} lg={3}>
                    <Card>
                        <Card.Img variant="top" src="https://www.universfreebox.com/wp-content/uploads/2022/04/fibre-free-rouge-2-800x450-c-default1-800x450-c-default.jpg" />
                        <Card.Body>
                            <Card.Title className='text-center'>اشتراک آنلاین</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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
