import React, { useState, useEffect, useRef, useId, useLayoutEffect } from 'react'
import { Container } from 'react-bootstrap';
import BoxInfo from '../BoxInfo';
import './AddMovie.css'
import { Genre_List } from '../Utils/Variables';
import { Convertor } from '../Utils/Functions';
import UseUpdateLogger from '../../../Hooks/UseUpdateLogger';
import axios from 'axios';
import ApiRequest from '../../../Services/Axios/config';
import Title_Admin from '../TitleAdmin/TitleAdmin';
import { Box_Info } from '../../../Contexs/Contex_BoxInfo';
import {Profiler} from 'react'

export default function AddMovie() {
    let testContex = 'Hello This is Text For Use Contex'
    let [box, setBox] = useState('');
    let iduniqe =  ('');
    let [Movie, SetMovie] = useState([]);
    let [GenreSelect, SetGenreSelect] = useState('')
    let [IDKey, SetIDKey] = useState('');
    let [EditImages, SetEditImages] = useState('');
    let [status, Setstatus] = useState(false);
    let [IsMovie, SetIsMovie] = useState([]);
    function Convertor(genres) {
        const genresArr = genres.split(", ");
        const translatedGenres = genresArr.map((genre) => {
            const backs = Genre_List.filter((back) => {
                return back.en === genre;
            });
            return backs[0].fa;
        });
        return translatedGenres

    }


    UseUpdateLogger(box);
    UseUpdateLogger(IDKey);
    UseUpdateLogger(EditImages)
    let SelectGenre = (event) => {
        SetGenreSelect(event.target.value)
    }

    useEffect(() => {
        if (status === false) {
            console.log('waiting...')
        } else {
            axios
                .get(`https://www.omdbapi.com/?i=${box}&plot=full&apikey=e49bd8ed`)
                .then((response) => {
                    let Genre_Moviez = Convertor(response.data['Genre'])


                    let newMovie2 = InfoFunction(response.data['Title'], response.data['Year'],
                        Genre_Moviez, response.data['imdbRating'], response.data['Poster'],
                        response.data['Runtime'], response.data['Plot'], response.data['Awards'],
                        response.data['Director'], response.data['Actors'], response.data['Country'], response.data['Writer'], response.data['similars']
                    )

                    SetMovie(newMovie2);
                    console.log("END PROCESS GET", Movie);
                })
        }
        console.log(IsMovie)
    }, [IsMovie]);

    function InfoFunction(title, year, genres, imDbRating, image, runtimeMins, plot, awards, directors, stars, countries, writers, similars) {
        const newMovie = {
            id: box,
            name: title,
            year: year,
            genre: genres,
            rate: imDbRating,
            poster: image,
            time: runtimeMins,
            story: plot,
            awards: awards,
            director: directors,
            stars: stars,
            countries: countries,
            writers: writers,
            CreatedAt: new Date().toISOString().slice(0, 10),
            similars: similars , 
            idUniq : iduniqe 
        };
        return newMovie
    }

    useEffect(() => {
        // IsMovie ?
        //     alert("در دیتابیس موجوده")
        //     :
        //     fetch(`https://imdb-api.com/fa/API/Title/k_709yvj7w/${box}`).then(res => (
        //         res.json()
        //     )).then(data => {
        //         let newMovie2 = InfoFunction(data['title'], data['year'],
        //             data['genres'], data['imDbRating'], data['image'],
        //             data['runtimeMins'], data['plotLocal'], data['awards'],
        //             data['directors'], data['stars'], data['countries'],
        //         )

        //         SetMovie(newMovie2);
        //         console.log("END PROCESS GET", Movie);
        //         Setstatus(true)
        //     })
        // console.log(IsMovie)
    })
    let ADD_Handler = async (event) => {

        if (!box) {
            alert("لطفا آیدی فیلم مورد نظر را وارد کنید")
        } else {
            console.log("START PROCESS");
            ApiRequest.get('/Moviez',).then(function (data) {
                let isAre = Object.entries(data).filter((i => {
                    return i['1'].id == box
                }));
                isAre.length == 0 ? SetIsMovie(() => true) : SetIsMovie(() => false);
            });


            Setstatus(true)

        }
    };
    let Change_Handler = (event) => {
        setBox(event.target.value);
    }

    return (
        <Box_Info.Provider value={testContex}>
            <div className='ADD_MOVIE'>
                <Title_Admin Title={'افزودن فیلم جدید'}></Title_Admin>
                <Container fluid>
                    <div className='IMDB pe-4 ps-4'>
                        <div className='IMDB_HEADER'>
                            <h5 className='IMDB_HEADER_TEXT'>دریافت اطلاعات فیلم از سایت IMDB</h5>

                        </div>
                        <div className='IMDB_ID'>

                            <input className='form-control' onChange={Change_Handler} type='text'
                                placeholder='آِیدی IMDB فیلم مورد نظر را وارد کنید' />
                            <button className='btn btn-primary' onClick={ADD_Handler}>دریافت اطلاعات</button>

                        </div>
                        <hr></hr>
                        {
                            status ? (
                                <BoxInfo {...Movie} />
                            ) : (
                                null
                            )
                        }

                    </div>
                </Container>

            </div>
        </Box_Info.Provider>





    )
}
