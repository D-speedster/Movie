import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Boxoffice.css';
const Boxoffice = React.memo(function Boxoffice(props) {
    if (!props || Object.keys(props).length === 0) {
        return null;
    }

    return (
        <Container>
            <div className='BoxOffice'>
                <Container>
                    <Row className='justify-content-start'>
                        {Object.entries(props).map((item, index) => (
                            <Col key={item[1]?.id || `boxoffice-${index}`} lg={12} sm={12} xs={12}>
                                <div className='Item-Box-Office'>

                                    <Col 
                                        className='Item-Box-Office-img' 
                                        lg={6} 
                                        xs={4} 
                                        sm={4} 
                                        style={{ backgroundImage: `url(${item[1]?.image})` }}
                                        role="img"
                                        aria-label={item[1]?.title || 'پوستر فیلم'}
                                    />
                                    <Col className='Item-Box-Office-text' lg={6} xs={6} sm={6}>
                                        <h6>{item[1]?.title}</h6>
                                        <h6>فروش هفتگی: {item[1]?.weekend}</h6>
                                        <h6>فروش کلی: {item[1]?.gross}</h6>
                                    </Col>


                                </div>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </div>
        </Container>
    )
});

export default Boxoffice;
