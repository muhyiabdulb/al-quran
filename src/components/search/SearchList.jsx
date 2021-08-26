import React from 'react'
import { Accordion } from 'react-bootstrap'
import { AiFillEye } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const SearchList = ({ filterSurah }) => {
    console.log(filterSurah)

    const filtered = filterSurah === '' ? <h3 className="display-4 text-center text-danger">Surah Tidak Ada</h3> : filterSurah.map((item, index) => {
        return(
            <Accordion className="font-monospace">
                <Accordion.Item className={index % 2 === 0 ? 'bg-info' : ''} eventKey={index}>
                    <Accordion.Header>
                        {item.nomor}. {item.nama} ({item.asma}) Arti ({item.arti}) ({item.item} item)
                        <br />
                    </Accordion.Header>
                    <Accordion.Body>
                        <small className="text-muted">Surah ke {item.nomor}</small> &middot; <small className="text-muted">Diturunkan di {item.type}</small>
                        <br />
                            {item.keterangan}
                        <br />
                        <div className="d-grid gap-2 pt-3">
                            <NavLink className="btn btn-primary" to={`/detail-surah/${item.nomor}`}> <AiFillEye size={30} /> Detail Surah</NavLink>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    })

    return(
        <div>
            {
                // manggil surah yg sudah dicari
                filtered
            }
        </div>
    )
}

export default SearchList