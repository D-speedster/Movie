import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap';
import BoxInfo from '../BoxInfo';
import './addSeries.css';
import ApiRequest from '../../../Services/Axios/config';
import Title_Admin from '../TitleAdmin/TitleAdmin';
import axios from 'axios';
import { Convertor } from '../Utils/Functions';
import { Genre_List } from '../Utils/Variables';


export default function AddSeries() {
    const RefCheck = useRef();
    let [box, setBox] = useState('')
    let [Series, SetSeries] = useState([]);
    let [GenreSelect, SetGenreSelect] = useState('')
    let [IDKey, SetIDKey] = useState('');
    let [EditImages, SetEditImages] = useState('');
    let [status, Setstatus] = useState(false);
    let [IsSeries, SetIsSeries] = useState([]);

    let SelectGenre = (event) => {
        SetGenreSelect(event.target.value)
    }
    useEffect(() => {
        if (status === false) {
            console.log('waiting...')
        } else {
            axios.get(`https://www.omdbapi.com/?i=${box}&plot=full&apikey=e49bd8ed`)
                .then((response) => {
                    // let Genre_Moviez = Convertor(response.data['Genre'])
                    // let Fa_Plot = TranslatePlot(response.data['Plot'])
                    
                    let newMovie2 = InfoFunction(response.data['Title'], response.data['Year'],
                        response.data['Genre'], response.data['imdbRating'], response.data['Poster'],
                        response.data['Runtime'],  response.data['Awards'], response.data['Awards'],
                        response.data['Director'], response.data['Actors'], response.data['Country'], response.data['Writer'], response.data['similars'],
                        response.data['Type']
                    )

                    SetSeries(newMovie2);
                    console.log("END PROCESS GET", Series);
                })

        }
        console.log(IsSeries)
    }, [IsSeries]);
    function InfoFunction(title, year, genres, imDbRating, image, runtimeMins, plot, awards, directors, stars, countries, writers, similars, Type) {
        const newSeries = {
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
            similars: similars,
            Type: Type
        };
        return newSeries
    }

    useEffect(() => {
        console.log(EditImages)
    }, [EditImages]);

    let ADD_Handler = async (event) => {

        if (!box) {
            alert("لطفا آیدی سریال مورد نظر را وارد کنید")
        } else {
            console.log("START PROCESS");
            ApiRequest.get('Series').then(data => {
                let isAre = Object.entries(data).filter((i => {
                    return i['1'].id == box
                }));
                isAre.length == 0 ? SetIsSeries(() => true) : SetIsSeries(() => false);
            });
            Setstatus(true)


        }

    };

    let Change_Handler = (event) => {
        setBox(event.target.value);
    }


    return (
        <div className='ADD_Series' >
            <Title_Admin Title={'افزودن فیلم جدید'}></Title_Admin>
            <Container fluid>
                <div className='IMDB pe-4 ps-4'>
                    <div className='IMDB_HEADER'>
                        <h5 className='IMDB_HEADER_TEXT'>دریافت اطلاعات سریال از سایت IMDB</h5>

                    </div>
                    <div className='IMDB_ID'>

                        <input className='form-control' onChange={Change_Handler} type='text'
                            placeholder='آِیدی IMDB سریال مورد نظر را وارد کنید' />
                        <button className='btn btn-primary' onClick={ADD_Handler}>دریافت اطلاعات</button>

                    </div>
                    <hr></hr>
                    {
                        status ? (
                            <BoxInfo {...Series} />
                        ) : (
                            null
                        )
                    }

                </div>
            </Container>




        </div>
    )
}
