import React from 'react'
import { Row, Col, Accordion, Container } from 'react-bootstrap'
import './BoxDownload.css';

import { MdSettingsVoice } from 'react-icons/md';

import { MdOutlineSubtitles } from 'react-icons/md';

export default function BoxDownload() {
  return (

    <Container >
      <Col xs={12} className='BoxDownload'>
        <Row>
          <Col lg={6} xs={6} sm={6}>لینک های دانلود</Col>
          <Col lg={6} xs={6} sm={6} style={{ textAlign: 'left' }}>Download Link</Col>
        </Row>
        <Accordion className='mt-4'>
          <Accordion.Item eventKey="0">
            <Accordion.Header className='Dubbed'>
              <div className='d-flex justify-content-between text-end w-100'>
                <Col lg={4} md={4} sm={6}>

                  <MdSettingsVoice></MdSettingsVoice>
                  <span>نسخه دوبله فارسی</span>
                </Col>
                <Col lg={4} md={4} sm={6}>تعداد کیفیت ها :4</Col>
              </div>
            </Accordion.Header>
            <Accordion.Body className='bg-dark'>

              <div className='d-flex justify-content-between text-end w-100 flex-wrap' style={{ color: 'white' }}>

                <Col className='item-download'>
                  <img alt="" className='mx-4' src='/img/folder.png' width='100px' />
                  <span >1080p</span>
                  <h6 className=''>4.64G / Mkv / Ganool</h6>
                </Col>
                <Col className='item-download'>
                  <img alt="" className='mx-4' src='/img/folder.png' width='100px' />
                  <span >720p</span>
                  <h6 className=''>2.4G / Mkv / Ganool</h6>
                </Col>
                <Col className='item-download'>
                  <img alt="" className='mx-4' src='/img/folder.png' width='100px' />
                  <span >480p</span>
                  <h6 className=''>950MB / Mkv / Ganool</h6>
                </Col>
                <Col className='item-download'>
                  <img alt="" className='mx-4' src='/img/folder.png' width='100px' />
                  <span >360p</span>
                  <h6 className=''>400MB / Mkv / Ganool</h6>
                </Col>

              </div>


            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className='mt-2'>
            <Accordion.Header className='Subbed'>
              <div className='d-flex justify-content-between text-end w-100'>
                <Col lg={4} md={4} sm={6}>

                  <MdOutlineSubtitles></MdOutlineSubtitles>
                  <span>نسخه زیرنویس چسبیده</span>
                </Col>
                <Col lg={4} md={4} sm={6}>تعداد کیفیت ها :2</Col>
              </div>
            </Accordion.Header>
            <Accordion.Body className='bg-dark'>

              <div className='d-flex justify-content-between text-end w-100 flex-wrap' style={{ color: 'white' }}>

                <Col className='item-download'>
                  <img alt="" className='mx-4' src='/img/folder.png' width='100px' />
                  <span >1080p</span>
                  <h6 className=''>4.64G / Mkv / Ganool</h6>
                </Col>
                <Col className='item-download'>
                  <img alt="" className='mx-4' src='/img/folder.png' width='100px' />
                  <span >720p</span>
                  <h6 className=''>2.4G / Mkv / Ganool</h6>
                </Col>
                <Col className='item-download'>
                  <img alt="" className='mx-4' src='/img/folder.png' width='100px' />
                  <span >480p</span>
                  <h6 className=''>950MB / Mkv / Ganool</h6>
                </Col>
                <Col className='item-download'>
                  <img alt="" className='mx-4' src='/img/folder.png' width='100px' />
                  <span >360p</span>
                  <h6 className=''>400MB / Mkv / Ganool</h6>
                </Col>

              </div>


            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>



    </Container>

  )
}
