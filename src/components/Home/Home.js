import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import Latest_Trailers from './Latest_Trailers/Latest_Trailers'
import SliderMovie from './SliderMovie/SliderMovie'
import './Home.css';
import Footer from './Footer/Footer'
import Boxoffice from './Boxofiice/Boxoffice'
import Header_MovieSeries from './Header_MovieSeries/Header_MovieSeries'
import ApiRequest from '../../Services/Axios/config';
export default function Home() {

  let [BoxOffice, SetBoxOffice] = useState();
  useEffect(() => {
    ApiRequest.get('/BoxOffice').then(data => SetBoxOffice(data.data['0']))
  }, [])
  let [Moviez, SetMoviez] = useState('');
  function GenreMoviez(genre, title) {

    const movies = Object.entries(Moviez).map(i => i[1]);
    const filteredMovies = movies.filter(movie => movie.genre.includes(genre));
    console.log(filteredMovies);
    return <SliderMovie {...filteredMovies} Title={title}></SliderMovie>;
  }

  useEffect(() => {
    ApiRequest.get('/Moviez').then(data => {

      SetMoviez(data.data)
    })

  }, []);


  return (
    <div className='body'>
      <Header />
      <Header_MovieSeries></Header_MovieSeries>
      <Latest_Trailers />
      {GenreMoviez('ماجراجویی', 'فیلم های ماجراجویی')}
      {GenreMoviez('عاشقانه', 'فیلم های عاشقانه')}
      <Boxoffice {...BoxOffice}></Boxoffice>
      {GenreMoviez('درام', 'فیلم های درام')}
      <br /><br />
      {GenreMoviez('تخیلی', 'فیلم های تخیلی')}
      <br /><br />
      {GenreMoviez('فانتزی', 'فیلم های فانتزی')}
      <br /><br />

      <Footer />
    </div>
  )
}
