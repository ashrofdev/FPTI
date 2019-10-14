import React from 'react'
import './admin.css'


const Admin = ({onSearch, user}) => {
    return (
        <div className="admin">
            <h1>welcome to the administrator page</h1>
            <div className="search">
                <input className="username" placeholder="Search user..." />
                <button className="search-btn" onClick={onSearch}>
                    <i className="fa fa-search"> <span>SEARCH</span></i>
                </button>
            </div>
                <div className="user">
                <div className="head">
                    <h2 className="full-name">{user.fullname}</h2>
                    <p><span>User ID:</span> {user.userid}</p>
                </div>
                <div className="b-details">
                    <h2>BALANCE DETAILS</h2>
                    <div className="table">
                        <div className="month">
                            <p className="m">Month 1</p>
                            <p className="m">Month 2</p>
                            <p className="m">Month 3</p>
                            <p className="m">Month 4</p>
                            <p className="m">Month 5</p>
                            <p className="m">Month 6</p>
                            <p className="m">Month 7</p>
                        </div>
                        <div className="status">
                            <select className="m">
                                <option>NULL</option>
                                <option>PENDING</option>
                                <option>COMPLETED</option>
                            </select>
                            <select className="m">
                                <option>NULL</option>
                                <option>PENDING</option>
                                <option>COMPLETED</option>
                            </select>
                            <select className="m">
                                <option>NULL</option>
                                <option>PENDING</option>
                                <option>COMPLETED</option>
                            </select>
                            <select className="m">
                                <option>NULL</option>
                                <option>PENDING</option>
                                <option>COMPLETED</option>
                            </select>
                            <select className="m">
                                <option>NULL</option>
                                <option>PENDING</option>
                                <option>COMPLETED</option>
                            </select>
                            <select className="m">
                                <option>NULL</option>
                                <option>PENDING</option>
                                <option>COMPLETED</option>
                            </select>
                            <select className="m">
                                <option>NULL</option>
                                <option>PENDING</option>
                                <option>COMPLETED</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}
export default Admin