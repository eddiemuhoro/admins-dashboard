import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Display = () => {
    const [users,setUsers]= useState([])
    useEffect(() => {
        axios.request('https://jobsy.up.railway.app/job')
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
                    <h1>{user.title}</h1>
                    <p>{user.description}</p>
                    <p>{user.employer}</p>
                    <p>{user.location}</p>
                    <p>{user.salary}</p>
                    <img src={user.imageurl} alt={user.title}/>
                    <button className='delete-btn'>remove</button>
                </div>
            ))}
        </div>
    </>
  )
}

export default Display