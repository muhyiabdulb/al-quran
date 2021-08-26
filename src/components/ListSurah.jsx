import React from 'react'
import listSurah from '../json/list_surah.json'
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Search from './search/Search';

const ListSurah = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Search details={listSurah} />
            </div>
            <Footer />
        </div>
    )
}

export default ListSurah