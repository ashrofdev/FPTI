import React from 'react'
import './user.css'

const User = ({user}) => {
    if (user) {
        console.log('Olodo')
    }else {
        console.log('nice')
    }
    return (
        <div className="user">
            <div className="head">
                <h2 className="full-name">{user.fullname}</h2>
                <img alt=""/>
            </div>
            <div className="user-bio">
                <p><span>Username:</span> {user.username}</p>
                <p><span>User ID:</span> {user.userid}</p>
                <p><span>Reg date:</span> {user.regdate}</p>
                <p><span>Phone:</span> {user.phone}</p>
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
                        <p>{user.m1}</p>
                        <p>{user.m2}</p>
                        <p>{user.m3}</p>
                        <p>{user.m4}</p>
                        <p>{user.m5}</p>
                        <p>{user.m6}</p>
                        <p>{user.m7}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User