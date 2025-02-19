import React from 'react'
import IssueParent from './IssueParent'
import SolutionParent from './SolutionParent'

const UseCallBackHook = () => {
  return (
    <div>
      <h3>
        With Issue: 
      </h3>

      <div>
        <IssueParent />
      </div>
      <br /><br /><br />
      <hr />
      <h3>With Solution</h3>
      <div>
        <SolutionParent />
      </div>
    </div>
  )
}

export default UseCallBackHook