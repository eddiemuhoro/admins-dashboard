import React from 'react'
import { useState } from 'react';
import axios from 'axios'

const Post = () => {
    const [postUser, setpostUser]= useState({
        name:'',
        email:'',
        phone:'',
        message:''
      })
    
      const handleClick= (e)=>{
            e.preventDefault()
            const newPost={
            name: postUser.name,
            email: postUser.email,
            phone: postUser.phone,
            message: postUser.message
          }        
          axios.post('http://localhost:5000/users/new', newPost)
      }

  return (
    <div>


      <div className="App">

        <form>
          <input
            type='text'
            name='text'
            placeholder='enter name'
            value={postUser.name}
            onChange={(e) => setpostUser({ ...postUser, name: e.target.value })}
          />
          <br />
          <input
            type='email'
            name='idNumber'
            placeholder='enter email'
            value={postUser.email}
            onChange={(e) => setpostUser({ ...postUser, email: e.target.value })}
          />

          <br />
          <input
            type='number'
            name='phone'
            placeholder='enter phone'
            value={postUser.phone}
            onChange={(e) => setpostUser({ ...postUser, phone: e.target.value })}
          />

          <br />
          <input
            type='type'
            name='message'
            placeholder='enter message'
            value={postUser.message}
            onChange={(e) => setpostUser({ ...postUser, message: e.target.value })}
          />
          <br />
          <button onClick={handleClick}>Submit</button>
        </form>


      </div>

    </div>
  )
}

export default Post