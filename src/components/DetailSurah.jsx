import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { CardColumns, Card } from 'react-bootstrap'
import listSurah from '../json/list_surah.json'

const DetailSurah = () => {
    const [detailSurah, setDetailSurah] = useState([])
    const [loading, setLoading] = useState(false)

    const { identifier } = useParams()
    console.log(identifier)
    const getDetailSurah = async () => {
        setLoading(true)
        try {
            let response = await fetch(`https://al-quran-8d642.firebaseio.com/surat/${identifier}.json?print=pretty%27%27`)
            let json = await response.json()
            console.log(json)
            setDetailSurah(json)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.message)
        }
    }

    useEffect(() => {
        getDetailSurah()
    }, [identifier])

    return(
        <div className="container">
            <div>
                <NavLink className="btn btn-primary" to={`/`}>Kembali</NavLink> 
                <h3 className="text-center">Surah {listSurah[identifier - 1].nama}</h3>
            </div>
            <CardColumns>
                <h4 className="text-center">
                    {
                        listSurah[identifier - 1].nomor == 1 || listSurah[identifier - 1].nomor == 9 ? '' : <Card><Card.Body>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Card.Body></Card>
                    }
                </h4>
                {
                loading ? <h3 className="text-center">loading . . .</h3> : 
                    detailSurah.map((item, index) => {
                        return( 
                            <Card bg={index % 2 == 0 ? 'info' : ''} key={index}>
                                <Card.Body>
                                    <Card.Title>{item.nomor}.</Card.Title>
                                    <h4 style={{ textAlign: "right", }}>{ index == 0 && listSurah[identifier - 1].nomor != 1 ? item.ar.replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', '') : item.ar}</h4>
                                    <Card.Text>{item.tr}</Card.Text>
                                    <Card.Text>{item.id}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </CardColumns>
        </div>
    )
}

export default DetailSurah