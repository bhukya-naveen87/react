import React, { useEffect, useState } from 'react'
import Topics from './Topics'
import TopicDetails from './TopicDetails'
import './TopicsContainer.css'

const allTopics = {
  basics: ["JSX", "Components"],
  hooks: ["UseMemoHook", "UseCallBackHook", "CustomHook"],
  advanced: ["redux"]
}

const TopicsContainer = () => {
  const [selectedTopic, setSelectedTopic] = useState("")
  
  return (
    <div className='main-container'>
        <Topics setSelectedTopic={setSelectedTopic} allTopics ={allTopics}/>
        <TopicDetails selectedTopic={selectedTopic}/>
    </div>
  )
}

export default TopicsContainer