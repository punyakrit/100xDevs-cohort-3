import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='text-5xl flex justify-center items-center h-screen'>
      <div>
        Todo App
      </div>
      <br/>
      <Link href={"/signup"}>
        Signup Page
      </Link>

    </div>
  )
}

export default page
