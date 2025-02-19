import React, { useCallback, useState } from 'react';
import SolutionChild from './SolutionChild';

const SolutionParent = () => {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(100000)

  const increaseAge = useCallback(() => {
    setAge(prev => prev + 1)
  }, [age])
  const increaseSalary = useCallback(() => {
    setSalary(prev => prev + 100)
  }, [salary])
  return (
    <div>SolutionParent:
      <div>Age: {age}</div>
      <div>Salary: {salary}</div>
      <SolutionChild text="Increase Age" fxn={increaseAge} />
      <SolutionChild text="Increase Salary" fxn={increaseSalary} />
    </div>
  )
}

export default SolutionParent