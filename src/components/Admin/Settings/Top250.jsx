import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'

export default function Top250() {


    let [TopMovie, SetTopMovie] = useState([]);

    useEffect(() => {
        fetch('https://database1.iran.liara.run/Collections')
            .then(res => res.json())
            .then(data => {
                SetTopMovie(data['0']);
            });
    }, []);



    return (
        <div>
            <Container>
                <Row>
                    {Object.entries(TopMovie).map(Top => {
                        return <Col lg={2}><img className='img-fluid' src={Top['1']['image']} /></Col>
                    })}

                </Row>
            </Container>
        </div>
    )
}
