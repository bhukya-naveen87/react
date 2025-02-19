import React from 'react'
import User_1 from './User_1'
import User_2 from './User_2'
import User_3_CustomHook from './User_3_CustomHook'

const CustomHookClass = () => {
    return (
        <div>
            <h3>
                Normal Hooks
            </h3>
            <hr />
            <User_1 />
            <User_2 />
            <br /><br /><br />
            <hr />
            <h3>Custom Hook</h3>
            <hr />
            <User_3_CustomHook />
        </div>
    )
}

export default CustomHookClass