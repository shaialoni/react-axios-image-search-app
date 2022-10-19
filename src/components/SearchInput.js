import React from 'react'
import { useState } from 'react'

const SearchInput = ({onSearchSubmit}) => {

    // const onInputChange = (e) => {
    //     console.log(e.target.value)
    // }
    const [entry, setEntry] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault()
        onSearchSubmit(entry)
    }

    return(
        <div className='ui segment' style={{width: '350px'}}>
            <form 
                onSubmit={onFormSubmit}
                className='ui form'
            >
                <div className='field'>
                    <div className='ui massive icon input'>
                    <input 
                        type='text' 
                        placeholder='search images' 
                        onChange={(e) => setEntry(e.target.value )}
                        value={entry}
                    />
                    <i className='search icon'></i>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default SearchInput