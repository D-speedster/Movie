import { borderRadius } from '@mui/system';
import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap';
import BoxInfo from '../BoxInfo';
import './AddMovie.css'



export default function AddMovie() {
    const RefCheck = useRef();

    let [box, setBox] = useState('')
    let [Movie, SetMovie] = useState([]);
    let [GenreSelect, SetGenreSelect] = useState('')
    let [IDKey, SetIDKey] = useState('');
    let [EditImages, SetEditImages] = useState('');
    let [status, Setstatus] = useState(false);
    let [IsMovie, SetIsMovie] = useState([]);

    let SelectGenre = (event) => {
        SetGenreSelect(event.target.value)
    }

    useEffect(() => {
        console.log(IDKey)
    }, [IDKey])

    useEffect(() => {
        if (status === false) {
            console.log('waiting...')
        } else {
            fetch(`https://imdb-api.com/fa/API/Title/k_709yvj7w/${box}`).then(res => (
                res.json()
            )).then(data => {
                let newMovie2 = InfoFunction(data['title'], data['year'],
                    data['genres'], data['imDbRating'], data['image'],
                    data['runtimeMins'], data['plotLocal'], data['awards'],
                    data['directors'], data['stars'], data['countries'], data['writers'], data['similars']
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
            similars: similars
        };
        return newMovie
    }

    useEffect(() => {
        console.log(EditImages)
    }, [EditImages]);




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
            fetch('https://movie-club-90077-default-rtdb.asia-southeast1.firebasedatabase.app/ALL_MOVIE.json')
                .then(res => res.json())
                .then(data => {
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
        <Container className='text-center mt-3'>
            <h1 style={{ color: '#FFF' }}>افزودن فیلم جدید</h1>

            <div className='Search_Handler'>
                <button onClick={ADD_Handler}>دریافت اطلاعات</button>
                <input ref={RefCheck} onChange={Change_Handler} type='text' placeholder='آیدی فیلم' />
            </div>


            <br />
            <br />

            {
                status ? (
                    <BoxInfo {...Movie} />
                ) : (
                    null
                )

            }

        </Container>
    )
}
