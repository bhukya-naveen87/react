import React, { memo } from 'react'

const SolutionChild = ({text, fxn}) => {
    alert(`SolutionChild ${text}`)
  return (
    <button onClick={()=>fxn()}>{text}</button>
  )
}

export default memo(SolutionChild)