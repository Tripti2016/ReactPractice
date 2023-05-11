import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import data from './eventData.json';



function Event() {
    const [cards, setCards] = useState(data);
    const [heart, setHeart] = useState(false);

    function handleClick() {
        setHeart(!heart);
    }
    return (

        <div className="event">
            {cards.map((user) => (
                <div className='row' key={user.id}>
                    <div className='container' >
                        <div className="event-data">
                        <div className="event_pic">
                            <Link to="#" className="pic-inner">
                                <img src={user.img} alt="" />
                            </Link>
                            <div className="event-tag">{user.name}
                            </div>
                            <div className={ `fav-icon ${heart ? 'active' : ''}`} onClick={handleClick} >
                                <Link to='#' >
                                    <img src="../assets/icons/favorite-solid.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="event-text">
                            <h3><Link to="#"> {user.title}</Link></h3>
                            <p>  {user.desc}</p>
                            <h5> 진행기간 {user.period}</h5>
                        </div>
                        <div className="outer-price">
                            <h2> {user.price} </h2>
                            <Link to="#" className="btn outline sm">구매</Link>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Event


