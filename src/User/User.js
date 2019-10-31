import React from 'react'
import './user.css'



// A: "43725"
// B: "KAREEM AMOD TITILOPE"
// C: "8062105312"
// D: "AMOD82"
// E: "NG999638"
// F: "0"
// G: "0"
// H: "0"
// I: "0"
// J: "0"
// K: "0"
// L: "0"

const User = ({user}) => {
    console.log(user.F)
     const value = (item) =>{
        if (item === '1') {
            return 'COMPLETED'
        } else if (item === '0') {
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
                <p><span>Username:</span> {user.D}</p>
                <p><span>User ID:</span> {user.E}</p>
                <p><span>Reg date:</span> {user.regdate}</p>
                <p><span>Phone:</span> {user.C}</p>
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