import React from 'react'
import useAge from './useAge'

const User_3_CustomHook = () => {
    const [age, setAge] = useAge(18)
  return (
    <div>
        <h3>User_3_CustomHook</h3>
        <div>Age: {age}</div>
        <button onClick={setAge}>Increase Age</button>
    </div>
  )
}

export default User_3_CustomHook