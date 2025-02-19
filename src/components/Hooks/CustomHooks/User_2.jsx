import React, { useCallback, useState } from 'react';

const User_2 = () => {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(100000)

  const increaseAge = useCallback(() => {
    setAge(prev => prev + 1)
  }, [age])
  const increaseSalary = useCallback(() => {
    setSalary(prev => prev + 100)
  }, [salary])
  return (
    <div>User_2:
      <div>Age: {age}</div>
      <div>Salary: {salary}</div>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={increaseSalary}>Increase Salary</button>
    </div>
  )
}

export default User_2