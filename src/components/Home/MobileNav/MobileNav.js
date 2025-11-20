import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { PiTelevisionLight } from 'react-icons/pi';
import { RiMovie2Line } from 'react-icons/ri';
import { BiLogInCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './MobileNav.css';

const MobileNav = React.memo(function MobileNav() {
  return (
    <div className='mobile-nav d-lg-none d-md-none'>
      <div className='container'>
        <Row>
          <Col className='mobile-nav-item'>
            <Link to='/' aria-label="صفحه اصلی">
              <AiOutlineHome style={{ fontSize: '21px' }} aria-hidden="true" />
              <span className='d-block'>خانه</span>
            </Link>
          </Col>

          <Col className='mobile-nav-item d-inline'>
            <Link to='/Movies' aria-label="فیلم ها">
              <RiMovie2Line style={{ fontSize: '21px' }} aria-hidden="true" />
              <span className='d-block'>فیلم ها</span>
            </Link>
          </Col>

          <Col className='mobile-nav-item'>
            <Link to='/Series' aria-label="سریال ها">
              <PiTelevisionLight style={{ fontSize: '21px' }} aria-hidden="true" />
              <span className='d-block'>سریال ها</span>
            </Link>
          </Col>

          <Col className='mobile-nav-item'>
            <Link to='/Login' aria-label="ورود به سایت">
              <BiLogInCircle style={{ fontSize: '21px' }} aria-hidden="true" />
              <span className='d-block'>ورود</span>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
});

export default MobileNav;
