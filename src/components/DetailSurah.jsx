import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { CardColumns, Card } from 'react-bootstrap'
import listSurah from '../json/list_surah.json'
import { AiOutlineLeft } from "react-icons/ai";

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

    const bismillah = () => {
        if (loading) {
            return (
                <div></div>
            )
        } else {
            return (
                listSurah[identifier - 1].nomor == 1 || listSurah[identifier - 1].nomor == 9 ? '' : <Card><Card.Body>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Card.Body></Card>
            )
        }
    }

    const data = loading ? <h3 className="position-absolute top-50 start-50 translate-middle text-success fs-2">Proses Request . . .</h3> :
        detailSurah.map((item, index) => {
            return (
                <Card bg={index % 2 === 0 ? 'info' : ''} key={index}>
                    <Card.Body className="">
                        <Card.Title>{item.nomor}.</Card.Title>
                        <h4 style={{ textAlign: "right", }}>{index === 0 && listSurah[identifier - 1].nomor != 1 ? item.ar.replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', '') : item.ar}</h4>
                        <Card.Text>{item.tr}</Card.Text>
                        <Card.Text>{item.id}</Card.Text>
                    </Card.Body>
                </Card>
            )
        })

    useEffect(() => {
        getDetailSurah()
    }, [identifier])

    return (
        <div className="container pt-4 pb-4 font-monospace">
            <div className="">
                <NavLink className="btn btn-sm btn-primary" to={`/`}><AiOutlineLeft /> Kembali</NavLink>
            </div>
            <div className="text-center">
                <div className="">
                    <h4>Surah {listSurah[identifier - 1].nama}</h4>
                </div>
                <div className="">
                    ({listSurah[identifier - 1].ayat} Ayat)
                </div>
                <div className="">
                    <h4>{listSurah[identifier - 1].arti}</h4>
                </div>
            </div>
            <CardColumns className="">
                <h4 className="text-center">{bismillah()}</h4>
                {data}
            </CardColumns>
        </div>
    )
}

export default DetailSurah