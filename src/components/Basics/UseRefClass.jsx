import React, { useRef } from 'react'

const UseRefClass = () => {
    const ip = useRef();
    const getInputVal = () => {
        alert(ip.current.value)
        ip.current.value = ""
    }
    return (
        <div>
            <input type="text" ref={ip} />
            <button onClick={getInputVal}>Get Input valur</button>
        </div>
    )
}

export default UseRefClass