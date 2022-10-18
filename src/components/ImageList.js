import React from 'react'
import { Container } from 'semantic-ui-react'

const ImageList = ({images}) => {
    
    const showImages = images.map(image => (
        <img 
            key={image.id} 
            src={image.webformatURL} 
            alt=''
        />
    ))
    return (
        <Container>
           {showImages}
        </Container>
    )
}

export default ImageList