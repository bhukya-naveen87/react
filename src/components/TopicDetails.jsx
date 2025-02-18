import React, { useEffect, useState } from 'react'
import UseMemoHookIssue from './Hooks/UseMemoHookClass/UseMemoHookIssue'
import UseCallBackHook from './Hooks/UseCallBackHook'
import UseMemoNotes from './Hooks/UseMemoHookClass/UseMemoNotes'
import UseMemoHookSolution from './Hooks/UseMemoHookClass/UseMemoHookSolution'

const TopicDetails = (props) => {

  const [selectedTopic, setSelectedTopic] = useState("No Topic is selected")

  const setTopicData = ()=>{
    if(selectedTopic === "UseMemoHook"){
      return <>
        <div>
          <h4>Notes</h4>
          <UseMemoNotes />
          <hr />
          <h4>With Issue</h4>
          <UseMemoHookIssue />
          <hr />
          <h4>With Solution</h4>
          <UseMemoHookSolution />
        </div>
      </>
    }
    if(selectedTopic === "UseCallBackHook"){
      return <UseCallBackHook />
    }
  }

  useEffect(()=> {
    setSelectedTopic(props.selectedTopic)
  }, [props.selectedTopic])
  return (
    <div className='topic-details'>
      <h4>{selectedTopic}</h4>

      <div>
        {setTopicData()}
      </div>
    </div>
  )
}

export default TopicDetails