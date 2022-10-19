import React from 'react'
import { Card, CardImg } from 'react-bootstrap'

const ImageList = ({images}) => {
    
    const showImages = images.map(image => (
            <Card style={{marginLeft: '10px', marginTop: '10px'}}>
                <CardImg
                    key={image.id} 
                    src={image.webformatURL}
                    alt=''
                />
            </Card>
        )
    )
    return (
        <div className='d-flex flex-nowrap'>
           {showImages}
        </div>
    )
}

export default ImageList