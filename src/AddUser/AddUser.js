import React from 'react';
import './add.css'

const AddUser = ({addUser}) => {
    const removePop = () => {
        document.querySelector('.add-user').remove()
    }
    return (
        <div className="add-user">
            <p>Enter user details below</p>
            <input className="name" placeholder="Full Name"/>
            <input className="userN" placeholder="Username"/>
            <input className="userid" placeholder="User ID"/>
            <input className="phone" type='number' placeholder="Pnone no"/>
            <input className="date" type="date" placeholder="Date"/>
            <button onClick={removePop} className="quit">X</button>
            <button onClick={addUser} className="add">ADD USER</button>
        </div>
    );
};

export default AddUser;