import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import Latest_Trailers from './Latest_Trailers/Latest_Trailers'
import SliderMovie from './SliderMovie/SliderMovie'
import './Home.css';
import Footer from './Footer/Footer'
import Boxoffice from './Boxofiice/Boxoffice'
import Header_MovieSeries from './Header_MovieSeries/Header_MovieSeries'
export default function Home() {

  let [BoxOffice, SetBoxOffice] = useState();
  useEffect(() => {
    fetch('https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/BoxOffice.json/').then(res => {
      return res.json()
    }).then(data => {

      SetBoxOffice(data['-NP1pjOELijhizcBSZ1q']['items'])
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [])
  let [Moviecollection, Setcollection] = useState([
    { id: 1, namePer: 'کالکشن هری پاتر', nameEn: 'Harry Potter ', realase: '2001 -2003', poster: '/img/C_1.jpg', rate: '8.8', story: '' },
    { id: 2, namePer: 'کالکشن ارباب حلقه ها', nameEn: 'Lord Of Rings ', realase: '2001 -2003', poster: '/img/C_2.jpg', rate: '8.5', story: '' },
    { id: 3, namePer: 'کالکشن ماتریکس', nameEn: 'Matrix', realase: '2001 -2003', poster: '/img/Matrix.jpg', rate: '8.1', story: '' },
    // { id: 4, namePer: 'کالکشن جنگ ستارگان', nameEn: 'Star Wars', realase: '2001 -2003', poster: '/img/C_3.jpg', rate: '8.1', story: '' },
    { id: 5, namePer: 'کالکشن پارک ژوراستیک', nameEn: 'Jurassic Park', realase: '2001 -2003', poster: '/img/C_4.jpg', rate: '8.1', story: '' },
  ])
  let [Moviez, SetMoviez] = useState('');
  let MoviezArray = []
  function GenreMoviez(genre, title) {
    for (let Movie in Moviez) {
      MoviezArray.push(Moviez[Movie])
    }
    let spc = MoviezArray.filter((ols => {
      return ols['genre'].includes(genre) == true;

    }))

    return <SliderMovie {...spc} Title={title}></SliderMovie>
  }

  useEffect(() => {
    fetch('https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/ALL_MOVIE.json')
      .then(res => res.json())
      .then(data => {
        SetMoviez(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div className='body'>
      <Header />
      <Header_MovieSeries></Header_MovieSeries>
      {GenreMoviez('Action', 'فیلم های درام')}
      <Latest_Trailers />
      {GenreMoviez('Drama', 'فیلم های تخیلی')}
      {/* <SliderMovie {...Moviecollection} Title={'برترین کالکشن فیلم'}></SliderMovie> */}
      <Boxoffice {...BoxOffice}></Boxoffice>
      {GenreMoviez('Action', 'فیلم های کمدی')}

      <Footer />
    </div>
  )
}
