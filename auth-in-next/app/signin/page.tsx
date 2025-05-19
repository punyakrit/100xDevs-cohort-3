"use client"
import axios from 'axios'
import React from 'react'

function page() {

    async function call(){
        const res = await axios.post('http://localhost:3000/api/signin')
        localStorage.setItem('token' , res?.data?.token)

    }
  return (
    <div>
        <div>
            <button onClick={call}>Sign in </button>
        </div>
      
    </div>
  )
}

export default page
