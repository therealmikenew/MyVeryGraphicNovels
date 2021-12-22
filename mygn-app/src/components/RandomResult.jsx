import React from 'react'


export default function RandomResult(props) {
    console.log(props.displayRandom.title)

    const showBook = (id) => {
        props.props.history.push(`/details/${id}`)
    }
    return (
        <div className='search-container'>
        
        <div >
            <h3>{props.displayRandom.title}</h3>
            <img onClick={() => showBook(props.displayRandom._id)} src={props.displayRandom.image} alt={props.displayRandom.title} />
            
        </div>
        
    
            
        </div>
    )
}





