
import './admin.css'


import React, { Component } from 'react';

class Admin extends Component {
    
    value = (item) =>{
        if (item === '1') {
            return 'COMPLETED'
        } else if (item === '0') {
            return 'NULL'
        } else {
            return 'PENDING'
        }
    }
    render() {
     const {onSearch, user, onSubmit, cPass, onPassChange} = this.props
        return (
            <div className="admin">
                <div className="search">
                    <input className="username" placeholder="Search user..." />
                    <button className="search-btn" onClick={onSearch}>
                        <i className="fa fa-search"> <span>SEARCH</span></i>
                    </button>
                </div>
                <div className="user">
                    <div className="head">
                        <h2 className="full-name">{user.B}</h2>
                        <p><span>User ID:</span> {user.E}</p>
                    </div>
                    <div className="b-details">
                        <h2>Edit balance details</h2>
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
                                <select className="m m1">
                                    <option>{this.value(user.F)}</option>
                                    <option>NULL</option>
                                    <option>PENDING</option>
                                    <option>COMPLETED</option>
                                </select>
                                <select className="m m2">
                                    <option>{this.value(user.G)}</option>
                                    <option>NULL</option>
                                    <option>PENDING</option>
                                    <option>COMPLETED</option>
                                </select>
                                <select className="m m3">
                                    <option>{this.value(user.H)}</option>
                                    <option>NULL</option>
                                    <option>PENDING</option>
                                    <option>COMPLETED</option>
                                </select>
                                <select className="m m4">
                                    <option>{this.value(user.I)}</option>
                                    <option>NULL</option>
                                    <option>PENDING</option>
                                    <option>COMPLETED</option>
                                </select>
                                <select className="m m5">
                                    <option>{this.value(user.J)}</option>
                                    <option>NULL</option>
                                    <option>PENDING</option>
                                    <option>COMPLETED</option>
                                </select>
                                <select className="m m6">
                                    <option>{this.value(user.K)}</option>
                                    <option>NULL</option>
                                    <option>PENDING</option>
                                    <option>COMPLETED</option>
                                </select>
                                <select className="m m7">
                                    <option>{this.value(user.L)}</option>
                                    <option>NULL</option>
                                    <option>PENDING</option>
                                    <option>COMPLETED</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button onClick={onSubmit} className="submit">Submit Changes</button>
                </div>
                <div className="pass-sec">
                    <button className="change-pass" onClick={cPass}>Change password</button>
                    <div className="p-change">
                        <input className="old" type="password" placeholder="Old password"/>
                        <input className="new" type="password" placeholder="New password"/>
                        <input className="conm" type="password" placeholder="Confirm password"/>
                        <button className="change" onClick={onPassChange}>Change</button>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default Admin;

