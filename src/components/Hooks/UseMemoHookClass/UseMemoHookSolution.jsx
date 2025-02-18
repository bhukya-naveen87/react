import React, { useMemo, useState } from 'react'

const UseMemoHookSolution = () => {
  const [num, setNum] = useState(0)
  const slowerFxn = ()=>{
    let sum = 0;
    alert("slowerfxn is called from Solution")
    for (let i = 100; i >= num; i--) {
      sum += i;
    }
    return sum;
  }
  const outerNumber = useMemo(()=> slowerFxn(num), [num])
  const [theme, setTheme] = useState("White")

  const changeTheme = ()=>{
    alert("change theme is called from Solution")
    setTheme(theme === "White" ? "Black": "White")
  }

  return (
    <div>
      <div id="snippet">
        <input type="number" min={0} value={num} onChange={(e)=> setNum(e.target.value)} />
        <input type="text" value={outerNumber} readOnly />
        <p>{theme}</p>
        <button onClick={changeTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default UseMemoHookSolution