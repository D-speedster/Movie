import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import './Latest_Trailers.css';
import { BsPlayCircleFill } from 'react-icons/bs'
import { HiVideoCamera } from 'react-icons/hi'
import Boxoffice from '../Boxofiice/Boxoffice';

export default function Latest_Trailers(props) {
  let [countImg, SetcountImg] = useState(0)
  let ChangeBackTrailer = (event) => {
    console.log(event.target.dataset.img)
    console.log(event.target.parentNode.parentNode.parentNode.style.background = `url(${event.target.dataset.img})`)
    console.log(event.target.parentElement)
  }
  let last_trailer = [
    { id: 1, img: 'img/Last_Trailer/Trailer_Background.jpg' },
    { id: 2, img: 'img/Last_Trailer/t_poster3.jpg' },
    { id: 3, img: 'img/Last_Trailer/t_poster2.jpg' },
    { id: 4, img: 'img/Last_Trailer/t_poster1.jpg' }

  ]
  useEffect(() => {
    const interval = setInterval(() => {
      let counter = countImg + 1;
      if (counter === 3) {
        counter = 0;
      }
      SetcountImg(counter)
      console.log(countImg)
    }, 5500);
  
    return () => clearInterval(interval);
  }, [countImg]);

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <h4 style={{ paddingRight: '0px', color: '#FFF', fontSize: '24px', fontWeight: 'bold', textAlign: 'right' }}>
            <HiVideoCamera></HiVideoCamera>
            آخرین تریلر ها
          </h4>
          <div className='Latest_Trailers'>

            <div className='Latest_Trailers_Box' style={{ background: `url(${last_trailer[countImg].img})` }}>


              <div className='pagin_img'>
                <div className='pagin_img_item'>
                  <img src={last_trailer['1'].img} data-img={last_trailer['1'].img} onMouseEnter={ChangeBackTrailer} />
                </div>
                <div className='pagin_img_item mt-2' >
                  <img src={last_trailer['2'].img} data-img={last_trailer['2'].img} onMouseEnter={ChangeBackTrailer} />
                </div>
                <div className='pagin_img_item mt-2'>
                  <img src={last_trailer['3'].img} data-img={last_trailer['3'].img} onMouseEnter={ChangeBackTrailer} />
                </div>
                <div className='pagin_img_item mt-2' >
                  <img src={last_trailer['0'].img} data-img={last_trailer['0'].img} onMouseEnter={ChangeBackTrailer} />
                </div>

              </div>
              <div className='play-circle'>
                <BsPlayCircleFill></BsPlayCircleFill>
              </div>

            </div>
          </div>
        </Col>
        <Col lg={6}>
          <h4 style={{ paddingRight: '0px', color: '#FFF', fontSize: '24px', fontWeight: 'bold', textAlign: 'right' }}>
            <HiVideoCamera></HiVideoCamera>
            باکس آفیس هفتگی
          </h4>
          <Boxoffice {...props}></Boxoffice>
        </Col>
      </Row>
    </Container>
  )
}
