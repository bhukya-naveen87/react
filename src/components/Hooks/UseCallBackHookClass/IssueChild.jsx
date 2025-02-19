import React from 'react'

const IssueChild = ({text, fxn}) => {
    alert(`IssueChild ${text}`)
  return (
    <button onClick={()=>fxn()}>{text}</button>
  )
}

export default IssueChild