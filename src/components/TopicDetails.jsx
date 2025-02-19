import React, { useEffect, useState } from 'react'
import UseCallBackHook from './Hooks/UseCallBackHookClass/UseCallBackHook'
import UseMemoHook from './Hooks/UseMemoHookClass/UseMemoHook'
import CustomHookClass from './Hooks/CustomHooks/CustomHookClass'

const TopicDetails = (props) => {

  const [selectedTopic, setSelectedTopic] = useState("No Topic is selected")

  const setTopicData = ()=>{
    if(selectedTopic === "UseMemoHook"){
      return <>
        <UseMemoHook />
      </>
    }
    if(selectedTopic === "UseCallBackHook"){
      return <UseCallBackHook />
    }
    if(selectedTopic === "CustomHook"){
      return <CustomHookClass />
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