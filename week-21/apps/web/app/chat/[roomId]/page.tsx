import React from 'react'

async function page({params}:any) {
    const id = (await params) .roomId
  return (
    <div>
      {id}
    </div>
  )
}

export default page
