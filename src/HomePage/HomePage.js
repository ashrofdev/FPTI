import React from 'react'
import './home.css'
import User from '../User/User'



const HomePage = ({onSearch, user}) => {
    return (
        <div className="home">
            <h1>FREEDOM PROJECT TRIBE</h1>
            <div className="search">
                <input className="username" placeholder="Search user..." />
                <button className="search-btn" onClick={onSearch}>
                    <i className="fa fa-search"> <span>SEARCH</span></i>
                </button>
            </div>
            <User user={user}/>
        </div>
    )
}
export default HomePage