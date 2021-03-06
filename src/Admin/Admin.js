import React, { Component } from 'react';
import { firebaseDB } from '../Firebase'
import './admin.css'
import AddUser from '../AddUser/AddUser';

class Admin extends Component {
    
    state = {
        form: false
    }

    // editing values from database
    value = (item) =>{
        if (item === '1' || item === 'COMPLETED') {
            return 'COMPLETED'
        } else if (item === '0' || item === 'NULL') {
            return 'NULL'
        } else {
            return 'PENDING'
        }
    }
    regForm = () => document.querySelector('.add-user').classList.add('pop')
    
    
    
 
    render() {

    
     const {onSearch, user, onSubmit, cPass, onPassChange, imgURL, upload } = this.props
        return (
            <div className="admin">
                <div className="search">
                    <input className="username" placeholder="Search user..." />
                    <button className="search-btn" onClick={onSearch}>
                        <i className="fa fa-search"> <span>SEARCH</span></i>
                    </button>
                </div>
                <div className="user">
                    <div className="headd">
                        <h3 className="full-name">{user.B}</h3>
                        <p><span>User ID:</span> {user.E}</p>
                        <div className="pro-pic">
                            <img alt="Loading img" src={imgURL}/>
                            <img alt="loader" className="loaderp" src={require('../img/4.gif')}/> 
                            <label> <i className="fa fa-camera"></i>
                            <input placeholder="Upload" className="upload" type="file" onChange={upload}/>
                            </label>
                        </div>
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
                    <div style={{display: "flex"}}>
                        <button className="change-pass" onClick={cPass}>Change password</button>
                        <button onClick={this.regForm}>REGISTER USER</button>
                    </div>
                    <div className="p-change">
                        <input className="old" type="password" placeholder="Old password"/>
                        <input className="new" type="password" placeholder="New password"/>
                        <input className="conm" type="password" placeholder="Confirm password"/>
                        <button className="change" onClick={onPassChange}>Change</button>
                    </div>
                </div>
                <div>
                    <AddUser addUser={this.props.addUser}/>
                </div>
            </div>
           
        )
    }
}

export default Admin;

