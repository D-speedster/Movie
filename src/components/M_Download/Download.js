import React, { useEffect, useState } from 'react'
import Header from '../Home/Header/Header';
import Movie from './Movie/Movie';
import InfoMovie from './InfoMovie/InfoMovie';
import BoxDownload from './BoxDownload/BoxDownload';
import Suggestion from './Suggestion/Suggestion';
import Comment from './/Comment/Comment';
import Footer from '../Home/Footer/Footer';
import { useParams } from 'react-router-dom';
import ApiRequest from '../../Services/Axios/config';



export function Download(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.backgroundColor = '#000'

    }, []);

    const { userId } = useParams();
    let [getDataMo, setgetDataMo] = useState([])

    // useEffect(() => {
    //     console.log(getDataMo)

    // }, [getDataMo])


    useEffect(() => {
      
        ApiRequest.get('/Moviez').then(data => {
            const movies = Object.entries(data).map(ois => ois['1'])
            const userMovies = movies['0'].filter(movie => movie.id === userId)
            setgetDataMo(userMovies['0'])
            
        })


    }, []);
    return (
        <div>
            <Header />
            <Movie info={[getDataMo.poster, getDataMo.Image_Moviez, getDataMo.name, getDataMo.BackgroundImage]}></Movie>
            <InfoMovie info={[getDataMo.story, getDataMo.poster, getDataMo.director, getDataMo.genre, getDataMo.time, getDataMo.name, getDataMo.rate, getDataMo.Image_Moviez, getDataMo.countries, getDataMo.year, getDataMo.stars, getDataMo.TranslateText]}><BoxDownload></BoxDownload><Suggestion></Suggestion><Comment /></InfoMovie>
            <BoxDownload />
            {/* <Suggestion info={getDataMo.similars}></Suggestion> */}
            <Comment id={getDataMo.id}></Comment>
            <Footer></Footer>


        </div>
    )
}
