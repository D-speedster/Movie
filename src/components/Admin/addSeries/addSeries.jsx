import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap';
import BoxInfo from '../BoxInfo';

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
            fetch(`https://imdb-api.com/fa/API/Title/k_709yvj7w/${box}`).then(res => (
                res.json()
            )).then(data => {
                let newSeries2 = InfoFunction(data['title'], data['year'],
                    data['genres'], data['imDbRating'], data['image'],
                    data['runtimeMins'], data['plotLocal'], data['awards'],
                    data['directors'], data['stars'], data['countries'], data['writers'], data['similars'], data['type']
                )

                SetSeries(newSeries2);
                console.log("END PROCESS GET", Series);

            })

        }
        console.log(IsSeries)
    }, [IsSeries]);
    function InfoFunction(title, year, genres, imDbRating, image, runtimeMins, plot, awards, directors, stars, countries, writers, similars, type) {
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
            type: type
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
            fetch('https://database1.iran.liara.run/Series.json')
                .then(res => res.json())
                .then(data => {
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
        <Container className='text-center mt-3'>
            <h1 style={{ color: '#FFF' }}>افزودن سریال جدید</h1>

            <div className='Search_Handler'>
                <button onClick={ADD_Handler}>دریافت اطلاعات</button>
                <input ref={RefCheck} onChange={Change_Handler} type='text' placeholder='آیدی سریال' />
            </div>


            <br />
            <br />

            {
                status ? (
                    <BoxInfo {...Series} />
                ) : (
                    null
                )

            }

        </Container>
    )
}
