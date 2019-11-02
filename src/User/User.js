import React from 'react'
import './user.css'




const User = ({user, imgURL}) => {
    // editing values from database
    const value = (item) =>{
        if (item === '1' || item === 'COMPLETED') {
            return 'COMPLETED'
        } else if (item === '0' || item === 'NULL') {
            return 'NULL'
        } else {
            return 'PENDING'
        }
    }
    return (
        <div className="user">
            <div className="head">
                <h2 className="full-name">{user.B}</h2>
                <img alt=""/>
            </div>
            <div className="user-bio">
                <div>
                    <p><span>Username:</span> {user.D}</p>
                    <p><span>User ID:</span> {user.E}</p>
                </div>
                <div className="pro-pic">
                    <img alt="Loading img" src={imgURL}/>                        
                </div>
                <div>
                    <p><span>Reg date:</span> {user.regdate}</p>
                    <p><span>Phone:</span> {user.C}</p>
                </div>
            </div>
            <div className="b-details">
                <h2>BALANCE DETAILS</h2>
                <div className="table">
                    <div className="month">
                        <p>Month 1</p>
                        <p>Month 2</p>
                        <p>Month 3</p>
                        <p>Month 4</p>
                        <p>Month 5</p>
                        <p>Month 6</p>
                        <p>Month 7</p>
                    </div>
                    <div className="status">
                        <p>{value(user.F)}</p>
                        <p>{value(user.G)}</p>
                        <p>{value(user.H)}</p>
                        <p>{value(user.I)}</p>
                        <p>{value(user.J)}</p>
                        <p>{value(user.K)}</p>
                        <p>{value(user.L)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User