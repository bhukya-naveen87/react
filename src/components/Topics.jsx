import React, { useEffect, useState } from 'react'



const Topics = (props) => {
  const [mainTopics, setMainTopics] = useState({})
  useEffect(()=>{
    closeAllTabs()
  },[props.allTopics])

  const closeAllTabs = ()=>{
    Object.keys(props.allTopics).forEach(each => setMainTopics((prev)=>{
      return {
        ...prev,
        [each]: "none"
      }
    }))
  }
  const showAndHideKids = (key)=>{
    // closeAllTabs()
    setMainTopics((prev)=>{
      return {
        ...prev,
        [key]: prev[key] === "none" ? "": "none"
      }
    })
  }
  

  const renderInternalItems = (key)=>{
    return props.allTopics[key].map((each, i) => <div key={each} style={{display: mainTopics[key], marginLeft: "20px", marginBottom: "10px", marginTop: "5px"}} onClick={()=>{
      props.setSelectedTopic(each)
    }}>
        <p>{i+1}. {each}</p>
    </div> )
  }
  return (
    <div className='topics'>
      <h3>Topics</h3>
      <ul>
        {/* <li onClick={()=>props.setSelectedTopic("UseMemoHook")}>Use Memo</li>
        <li onClick={()=>props.setSelectedTopic("UseCallBackHook")}>Use CallBack</li> */}
        {
          Object.keys(props.allTopics).map(key => <div key={key} className='main-topic'>
            <div id="title" onClick={()=>{showAndHideKids(key)}}>
              {key.toLocaleUpperCase()}
            </div>
            <div>
              {renderInternalItems(key)}
            </div>
          </div> )
        }
      </ul>
    </div>
  )
}

export default Topics