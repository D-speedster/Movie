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
    fetch('https://database1.iran.liara.run/BoxOffice').then(res => {
      return res.json()
    }).then(data => {

      SetBoxOffice(data)
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [])
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
    fetch('https://database1.iran.liara.run/Moviez')
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
      {GenreMoviez('ماجراجویی', 'فیلم های ماجراجویی')}
      <Latest_Trailers />
      {GenreMoviez('عاشقانه', 'فیلم های عاشقانه')}
      <Boxoffice {...BoxOffice}></Boxoffice>
      {GenreMoviez('جنایی', 'فیلم های جنایی')}

      <Footer />
    </div>
  )
}
