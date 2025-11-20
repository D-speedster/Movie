import React, { useState, useEffect } from 'react'
import Header from '../../components/Home/Header/Header'
import Latest_Trailers from '../../components/Home/Latest_Trailers/Latest_Trailers'
import SliderMovie from '../../components/Home/SliderMovie/SliderMovie'
import MobileNav from '../../components/Home/MobileNav/MobileNav'
import './Home.css';
import './Home.improved.css';
import Footer from '../../components/Home/Footer/Footer'
import Boxoffice from '../../components/Home/Boxofiice/Boxoffice'
import Header_MovieSeries from '../../components/Home/Header_MovieSeries/Header_MovieSeries'
import ApiRequest from '../../Services/Axios/config';
import { BiArrowToTop } from 'react-icons/bi';
import { MdError } from 'react-icons/md';

export default function Home() {
  const [BoxOffice, SetBoxOffice] = useState(null);
  const [Moviez, SetMoviez] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Fetch BoxOffice data
  useEffect(() => {
    ApiRequest.get('/BoxOffice')
      .then(data => SetBoxOffice(data.data['0']))
      .catch(err => {
        console.error('Error fetching BoxOffice:', err);
      });
  }, []);

  // Fetch Movies data
  useEffect(() => {
    setLoading(true);
    ApiRequest.get('/Moviez')
      .then(data => {
        const MovieZa = data.data;
        SetMoviez(MovieZa.reverse());
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching movies:', err);
        setError('خطا در بارگذاری فیلم‌ها. لطفا دوباره تلاش کنید.');
        setLoading(false);
      });
  }, []);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Genre movies renderer with loading state
  function GenreMoviez(genre, title) {
    if (loading) {
      return (
        <div className='genre-section fade-in'>
          <div className='slider-skeleton'>
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className='slider-skeleton-item'></div>
            ))}
          </div>
        </div>
      );
    }

    if (!Moviez || Moviez.length === 0) return null;
    
    const movies = Object.entries(Moviez).map(i => i[1]);
    const firstMovieWithGenre = movies.filter(movie => 
      movie.genre && Array.isArray(movie.genre) && movie.genre.includes(genre)
    );

    return firstMovieWithGenre.length > 0 ? (
      <div className='genre-section fade-in'>
        <SliderMovie {...firstMovieWithGenre} Title={title} />
      </div>
    ) : null;
  }

  // Error state renderer
  if (error) {
    return (
      <div className='body'>
        <Header />
        <div className='error-state'>
          <MdError />
          <h3>خطا در بارگذاری</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            تلاش مجدد
          </button>
        </div>
        <Footer />
        <MobileNav />
      </div>
    );
  }


  return (
    <div className='body'>
      <Header />
      <Header_MovieSeries />
      
      <div className='hero-section'>
        <Latest_Trailers {...BoxOffice} />
      </div>

      <div className='content-wrapper'>
        {GenreMoviez('ماجراجویی', 'فیلم های ماجراجویی')}
        {GenreMoviez('اکشن', 'فیلم های اکشن')}
        {GenreMoviez('درام', 'فیلم های درام')}
        {GenreMoviez('جنایی', 'فیلم های جنایی')}
        {GenreMoviez('کمدی', 'فیلم های کمدی')}
        {GenreMoviez('علمی تخیلی', 'فیلم های علمی تخیلی')}
      </div>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="بازگشت به بالا"
      >
        <BiArrowToTop />
      </button>

      <Footer />
      <MobileNav />
    </div>
  )
}
