import React from 'react'
import './user.css'

const User = ({user}) => {
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
        </div>
    )
}

export default User