import React from 'react'
import './home.css'
import User from '../User/User'



const HomePage = ({onSearch, user, imgURL, upload}) => {
    return (
        <div className="home">
            <h1>FPT<span> Ibadan</span></h1>
            <div className="search">
                <input className="username" placeholder="Search user..." />
                <button className="search-btn" onClick={onSearch}>
                    <i className="fa fa-search"> <span>SEARCH</span></i>
                </button>
            </div>
            <User user={user} imgURL={imgURL} upload={upload}/>
        </div>
    )
}
export default HomePage