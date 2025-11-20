import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import './Latest_Trailers.css';
import { BsPlayCircleFill } from 'react-icons/bs'
import { HiVideoCamera } from 'react-icons/hi'
import Boxoffice from '../Boxofiice/Boxoffice';

export default function Latest_Trailers(props) {
  const [countImg, SetcountImg] = useState(0);
  const [selectedTrailer, setSelectedTrailer] = useState(0);

  const ChangeBackTrailer = (event) => {
    const imgUrl = event.target.dataset.img;
    const index = parseInt(event.target.dataset.index);
    
    if (imgUrl) {
      const parentElement = event.target.closest('.Latest_Trailers_Box');
      if (parentElement) {
        parentElement.style.background = `url(${imgUrl})`;
        parentElement.style.backgroundSize = 'cover';
        parentElement.style.backgroundPosition = 'center';
        setSelectedTrailer(index);
      }
    }
  }
  let last_trailer = [
    { id: 1, img: 'img/Last_Trailer/Trailer_Background.jpg' },
    { id: 2, img: 'img/Last_Trailer/t_poster3.jpg' },
    { id: 3, img: 'img/Last_Trailer/t_poster2.jpg' },
    { id: 4, img: 'img/Last_Trailer/t_poster1.jpg' }

  ]
  useEffect(() => {
    const interval = setInterval(() => {
      SetcountImg(prevCount => {
        const nextCount = prevCount + 1;
        return nextCount >= last_trailer.length ? 0 : nextCount;
      });
    }, 5500);
  
    return () => clearInterval(interval);
  }, []);

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
                {last_trailer.map((trailer, index) => (
                  <div 
                    key={trailer.id} 
                    className={`pagin_img_item ${index > 0 ? 'mt-2' : ''} ${selectedTrailer === index ? 'active' : ''}`}
                  >
                    <img 
                      src={trailer.img} 
                      data-img={trailer.img}
                      data-index={index}
                      onMouseEnter={ChangeBackTrailer}
                      alt={`تریلر ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
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
