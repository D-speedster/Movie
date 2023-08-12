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
    const firstMovieWithGenre = movies.filter(movie => movie.genre.includes(genre));
    const MovieSend = firstMovieWithGenre.filter(res=>{
      return res.genre['0'] == genre
    })
    console.log(MovieSend)
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
      <Latest_Trailers />
      {GenreMoviez('ماجراجویی', 'فیلم های ماجراجویی')}
      {GenreMoviez('اکشن', 'فیلم های اکشن')}
      <Boxoffice {...BoxOffice}></Boxoffice>
      {GenreMoviez('درام', 'فیلم های درام')}
      <br /><br />
      {GenreMoviez('جنایی', 'فیلم های جنایی')}
      <br /><br />
     
  

      <Footer />
    </div>
  )
}
