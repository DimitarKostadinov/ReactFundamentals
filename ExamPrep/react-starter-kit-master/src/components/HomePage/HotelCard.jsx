import React from 'react';
import {Link} from 'react-router-dom'

export default function HotelCard({name,image,location,id, canDelete,del}){
    return(
        <article className="hotelCard">
            <img src={image} alt={image}/>
            <p>{name} in {location}</p>
            <Link to={'/details/' + id}>ViewDetails </Link>
            {canDelete && <a href="javascript:void(0)" onClick={del}>Delete</a>}
        </article>
    )
}