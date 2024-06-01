import React from 'react'
import { memo } from 'react'
import Button from './button'
 function Nav() {
  console.log("Nav bar is render")
  return (
    <>
    <div>
      <nav>nav

      <Button />
      </nav>
    </div>
    </>
  )
}
export default memo(Nav)