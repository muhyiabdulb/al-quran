import React from 'react'
import { Accordion } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import listSurah from '../json/list_surah.json'

const ListSurah = () => {
    return (
        <div>
            <h2 className="text-center">Daftar Surah</h2>
            {
                listSurah.map((item, index) => {
                    return (
                        <Accordion>
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>
                                    {item.nama} ({item.asma})
                                    <br />
                                    {item.arti} ({item.ayat} ayat)
                                </Accordion.Header>
                                <Accordion.Body>
                                    <small className="text-muted">Surah ke {item.nomor}</small>
                                    <br />
                                    {item.keterangan}
                                    <br />
                                    <div className="d-grid gap-2 pt-3">
                                        <NavLink className="btn btn-primary" to={`/detail-surah/${item.nomor}`}>Detail Surah</NavLink>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}

export default ListSurah