import React, { ReactNode } from 'react'

function layout({children}:{children: ReactNode}) {
  return (
    <div>
        Header
      {children}
    </div>
  )
}

export default layout
