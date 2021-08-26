import React from 'react'
import { useState } from 'react'
import { Card, Form} from 'react-bootstrap'
import SearchList from './SearchList';

const Search = ({ details }) => {
    const [searchField, setSearchField] = useState('')

    const handleInputSearch = e => {
        setSearchField(e.target.value)
        console.log(e.target.value)
        console.log(details)
    }

    const cariSurah = details.filter(item => {
        return (
            item.nama.toLowerCase().includes(searchField.toLowerCase())
        )
    })

    if(cariSurah === '') {
        console.log('tidak ada')
    } else {
        console.log('ada')
        console.log(cariSurah)
    }

    const searchList = () => {
        return(
            <div>
                <SearchList filterSurah={cariSurah} />
            </div>
        )
    }
    
    return (
        <div>
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="search" placeholder="Cari ..." onChange={handleInputSearch} />
                        </Form.Group>
                    </Form>
                </Card.Body>
                {
                    // manggil function 
                    searchList()
                }
            </Card>
        </div>
    )
}

export default Search