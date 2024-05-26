import React, { useState, useEffect } from 'react'
import Header from '../../components/Home/Header/Header'
import Latest_Trailers from '../../components/Home/Latest_Trailers/Latest_Trailers'
import SliderMovie from '../../components/Home/SliderMovie/SliderMovie'
import './Home.css';
import Footer from '../../components/Home/Footer/Footer'
import Boxoffice from '../../components/Home/Boxofiice/Boxoffice'
import Header_MovieSeries from '../../components/Home/Header_MovieSeries/Header_MovieSeries'
import ApiRequest from '../../Services/Axios/config';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineHome } from 'react-icons/ai';
import { PiTelevisionLight } from 'react-icons/pi';
import { RiMovie2Line } from 'react-icons/ri';
import { BiLogInCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Home() {

  let [BoxOffice, SetBoxOffice] = useState();
  useEffect(() => {
    ApiRequest.get('/BoxOffice').then(data => SetBoxOffice(data.data['0']))
  }, [])
  let [Moviez, SetMoviez] = useState('');
  function GenreMoviez(genre, title) {
    const movies = Object.entries(Moviez).map(i => i[1]);
    const firstMovieWithGenre = movies.filter(movie => movie.genre.includes(genre));
    const MovieSend = firstMovieWithGenre.filter(res => {
      return res.genre['0'] == genre
    })

    return <SliderMovie {...MovieSend} Title={title} />;

  }
  useEffect(() => {
    ApiRequest.get('/Moviez').then(data => {
      let MovieZa = data.data;
      SetMoviez(MovieZa.reverse())
    })


  }, []);


  return (
    <div className='body'>
      <Header />
      <Header_MovieSeries></Header_MovieSeries>
      <Latest_Trailers {...BoxOffice} />
      {GenreMoviez('ماجراجویی', 'فیلم های ماجراجویی')}
      {GenreMoviez('اکشن', 'فیلم های اکشن')}
      {/* <Boxoffice {...BoxOffice}></Boxoffice> */}
      {GenreMoviez('درام', 'فیلم های درام')}
      <br /><br />
      {GenreMoviez('جنایی', 'فیلم های جنایی')}
      <br /><br />



      <Footer />
      <div className='mobile-nav d-lg-none d-md-none'>
        <div className='container'>
          <Row>
            <Col className='mobile-nav-item'>
              <Link to='/'>
                <AiOutlineHome style={{fontSize : '21px'}}></AiOutlineHome>
                <span className='d-block ' >خانه</span>

              </Link>
            </Col>

            <Col className='mobile-nav-item d-inline'>
              <Link to='/Movies'>

                <RiMovie2Line style={{fontSize : '21px'}}></RiMovie2Line>
                <span className='d-block'>فیلم ها</span>
              </Link>

            </Col>
            <Col className='mobile-nav-item'>
              <Link to='/Series'>

                <PiTelevisionLight style={{fontSize : '21px'}}></PiTelevisionLight>
                <span className='d-block'>سریال ها</span>
              </Link>
            </Col>
            <Col className='mobile-nav-item'>
              <Link to='/Login'>

                <BiLogInCircle style={{fontSize : '21px'}}></BiLogInCircle>
                <span className='d-block'>ورود</span>
              </Link>
            </Col>

          </Row>
        </div>

      </div>
    </div >
  )
}
