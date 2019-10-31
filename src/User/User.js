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