import React from 'react'
import { Row, Col, Accordion, Container } from 'react-bootstrap'
import './BoxDownload.css';

import { MdSettingsVoice } from 'react-icons/md';

import { MdOutlineSubtitles } from 'react-icons/md';

const downloadQualities = [
  { quality: '1080p', size: '4.64G', format: 'Mkv', source: 'Ganool' },
  { quality: '720p', size: '2.4G', format: 'Mkv', source: 'Ganool' },
  { quality: '480p', size: '950MB', format: 'Mkv', source: 'Ganool' },
  { quality: '360p', size: '400MB', format: 'Mkv', source: 'Ganool' }
];

const DownloadItem = ({ quality, size, format, source }) => (
  <Col className='item-download'>
    <img 
      alt={`دانلود با کیفیت ${quality}`}
      className='mx-4' 
      src='/img/folder.png' 
      width='100px'
      loading="lazy"
    />
    <span>{quality}</span>
    <h6>{size} / {format} / {source}</h6>
  </Col>
);

export default function BoxDownload() {
  return (
    <Container>
      <Col xs={12} className='BoxDownload'>
        <Row>
          <Col lg={6} xs={6} sm={6}>
            <h5>لینک‌های دانلود</h5>
          </Col>
          <Col lg={6} xs={6} sm={6} style={{ textAlign: 'left' }}>
            <h5>Download Links</h5>
          </Col>
        </Row>
        
        <Accordion className='mt-4'>
          <Accordion.Item eventKey="0">
            <Accordion.Header className='Dubbed'>
              <div className='d-flex justify-content-between text-end w-100'>
                <Col lg={4} md={4} sm={6}>
                  <MdSettingsVoice aria-hidden="true" />
                  <span>نسخه دوبله فارسی</span>
                </Col>
                <Col lg={4} md={4} sm={6}>
                  تعداد کیفیت‌ها: {downloadQualities.length}
                </Col>
              </div>
            </Accordion.Header>
            <Accordion.Body className='bg-dark'>
              <div className='d-flex justify-content-between text-end w-100 flex-wrap' style={{ color: 'white' }}>
                {downloadQualities.map((item, index) => (
                  <DownloadItem key={`dubbed-${index}`} {...item} />
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className='mt-2'>
            <Accordion.Header className='Subbed'>
              <div className='d-flex justify-content-between text-end w-100'>
                <Col lg={4} md={4} sm={6}>
                  <MdOutlineSubtitles aria-hidden="true" />
                  <span>نسخه زیرنویس چسبیده</span>
                </Col>
                <Col lg={4} md={4} sm={6}>
                  تعداد کیفیت‌ها: {downloadQualities.length}
                </Col>
              </div>
            </Accordion.Header>
            <Accordion.Body className='bg-dark'>
              <div className='d-flex justify-content-between text-end w-100 flex-wrap' style={{ color: 'white' }}>
                {downloadQualities.map((item, index) => (
                  <DownloadItem key={`subbed-${index}`} {...item} />
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Container>
  )
}
