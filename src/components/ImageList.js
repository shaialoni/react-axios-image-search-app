import React from 'react'

const ImageList = ({images}) => {
    
    const showImages = images.map(image => (
        <img 
            key={image.id} 
            src={image.webformatURL} 
            alt=''
        />
    ))
    return (
        <div>
           {showImages}
        </div>
    )
}

export default ImageList