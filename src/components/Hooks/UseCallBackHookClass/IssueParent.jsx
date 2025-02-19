import React, { useState } from 'react'
import IssueChild from './IssueChild';

const IssueParent = () => {
    const [age, setAge] = useState(18);
    const [salary, setSalary] = useState(100000)

    const increaseAge = ()=>{
        setAge(prev=> prev+1)
    }
    const increaseSalary = ()=>{
        setSalary(prev=> prev+100)
    }
  return (
    <div>IssueParent: 
        <div>Age: {age}</div>
        <div>Salary: {salary}</div>
        <IssueChild text="Increase Age" fxn={increaseAge} />
        <IssueChild text="Increase Salary" fxn={increaseSalary} />
    </div>
  )
}

export default IssueParent