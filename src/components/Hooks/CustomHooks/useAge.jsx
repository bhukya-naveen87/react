import React, { useState } from 'react'

const useAge = (givenAge = 0) => {
    const [age, setGivenAge] = useState(givenAge);
    const setAge = ()=>{
        setGivenAge(prev=> prev+1)
    }
    return [age, setAge]
}

export default useAge