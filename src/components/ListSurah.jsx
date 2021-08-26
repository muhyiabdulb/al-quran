import React from 'react'
import listSurah from '../json/list_surah.json'
import Footer from './footer/Footer';
import Search from './search/Search';

const ListSurah = () => {
    return (
        <div>
            <div className="container pt-4">
                <h2 className="text-center font-monospace">Daftar Surah</h2>

                <Search details={listSurah} />

                {/* {
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
                } */}

            </div>
            <Footer />
        </div>
    )
}

export default ListSurah