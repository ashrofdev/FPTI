import React from 'react'
import './user.css'

const User = ({user}) => {
    return (
        <div className="user">
            <div className="head">
                <h2 className="full-name">{user.fullName}</h2>
                <img alt=""/>
            </div>
            <div className="user-bio">
                <p>Username: {user.username}</p>
                <p>User id: {user.id}</p>
                <p>Reg date: {user.regDate}</p>
                <p>Phone: {user.phone}</p>
            </div>
        </div>
    )
}

export default User