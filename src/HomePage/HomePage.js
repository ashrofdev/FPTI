import React from 'react'
import './home.css'



const HomePage = () => {
    return (
        <div className="home">
            <h1>FREEDOM PROJECT TRIBE</h1>
            <div className="search">
                <input placeholder="Search user..." />
                <button className="search-btn">
                    <i className="fa fa-search"> <span>SEARCH</span></i>
                </button>
            </div>
        </div>
    )
}
export default HomePage