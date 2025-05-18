import React from 'react'

function page({params}:any) {
    const id = params.id
  return (
    <div>
      {JSON.stringify(id)}
    </div>
  )
}

export default page
