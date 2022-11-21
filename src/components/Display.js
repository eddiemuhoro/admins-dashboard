import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Display = () => {
    const [users,setUsers]= useState([])
    useEffect(() => {
        axios.request('http://localhost:5000/users')
        .then((response) =>{

            setUsers(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    })
  return (
    <>
    <h1>Contact Details</h1>
        <div className='contact-wrapper'>
            {users.map(user => (
                <div className='contact-item'>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    
                </div>
            ))}
        </div>
    </>
  )
}

export default Display