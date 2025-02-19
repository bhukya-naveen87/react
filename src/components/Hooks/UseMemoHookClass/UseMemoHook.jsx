import React from 'react'
import UseMemoHookIssue from './UseMemoHookIssue'
import UseMemoHookSolution from './UseMemoHookSolution'

const UseMemoHook = () => {
  return (
    <div>
          <h4>With Issue</h4>
          <UseMemoHookIssue />
          <hr />
          <h4>With Solution</h4>
          <UseMemoHookSolution />
        </div>
  )
}

export default UseMemoHook