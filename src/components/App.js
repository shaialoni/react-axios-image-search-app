import React from 'react'
import SearchInput from './SearchInput'
import axios from 'axios'
import { useState } from 'react'
import ImageList from './ImageList'
import { Container } from 'react-bootstrap'

const App = () => {
    
    const [images, setImages] = useState([])
    
    const onSearchSubmit = async (entry) => {
        console.log(entry)
        const response = await axios.get(`https://pixabay.com/api/?key=30694926-4a39cbe5ddecd8287260ad94a&q=${entry}&image_type=photo`)
        setImages(response.data.hits)

    }
    
    return (
        <>
            <SearchInput
                    onSearchSubmit={onSearchSubmit}
                    />
            <Container style={{marginTop: '30px'}}>
            <ImageList 
                images={images}
            />
            </Container>
        </>
    )
}

export default App