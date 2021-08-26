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
            </div>
            <Footer />
        </div>
    )
}

export default ListSurah