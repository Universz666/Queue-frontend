import React from 'react'

import Topbar from '../Layouts/Topbar'

function Landing({children}) {
  return (
    <>
    <Topbar />
    {children}
    </>
  )
}

export default Landing