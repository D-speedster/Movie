import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import './Latest_Trailers.css';
import { BsPlayCircleFill } from 'react-icons/bs'
import { HiVideoCamera } from 'react-icons/hi'
// const images = require.context("/img/Last_Trailer/", true)
// const defaultImage = images.keys()[0].split('/')[1];
// console.log(`./img/${defaultImage}`)

export default function Latest_Trailers() {
  let ChangeBackTrailer = (event) => {
    console.log(event.target.dataset.img)
    console.log(event.target.parentNode.parentNode.parentNode.style.background = `url(${event.target.dataset.img})`)
    console.log(event.target.parentElement)
  }


  return (
    <Container>
      <h4 style={{ paddingRight: '0px', color: '#FFF', fontSize: '24px', fontWeight: 'bold', textAlign: 'right' }}>
        <HiVideoCamera></HiVideoCamera>
        آخرین تریلر ها
      </h4>
      <div className='Latest_Trailers'>

        <div className='Latest_Trailers_Box' style={{ background: `url(/img/Last_Trailer/Trailer_Background.jpg)` }}>

          <Row>
            <Col lg={3} md={3} sm={6} xs={6} className='Last_Trailer_Item'>
              <img alt="Trailer_Background" src='/img/Last_Trailer/Trailer_Background.jpg' data-img='/img/Last_Trailer/Trailer_Background.jpg' onMouseOverCapture={ChangeBackTrailer}></img>
              <BsPlayCircleFill></BsPlayCircleFill>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className='Last_Trailer_Item'>
              <img alt="t_poster1" src='/img/Last_Trailer/t_poster1.jpg' data-img='/img/Last_Trailer/t_poster1.jpg' onMouseOverCapture={ChangeBackTrailer}></img>
              <BsPlayCircleFill></BsPlayCircleFill>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className='Last_Trailer_Item'>
              <img alt="t_poster2" src='/img/Last_Trailer/t_poster2.jpg' data-img='/img/Last_Trailer/t_poster2.jpg' onMouseOverCapture={ChangeBackTrailer}></img>
              <BsPlayCircleFill></BsPlayCircleFill>
            </Col>
            <Col lg={3} md={3} sm={6} xs={6} className='Last_Trailer_Item'>
              <img alt="t_poster3" src='/img/Last_Trailer/t_poster3.jpg' data-img='./img/Last_Trailer/t_poster3.jpg' onMouseOverCapture={ChangeBackTrailer}></img>
              <BsPlayCircleFill></BsPlayCircleFill>
            </Col>
          </Row>

        </div>
      </div>
    </Container>
  )
}
