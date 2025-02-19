# React
    - npm i react@beta react-dom@beta
    - npm i and npm run dev


####  Hooks

- #### useMemo:
    - Upon rendering and re-rendering, every function gets executed even if they are not needed to executed which results in hampering of site's performance.
    - For example, I have 2 activities. One is to double the number and other is to change the theme.
    - Code for Issue:
        ```
        import React, { useState } from 'react'

        const UseMemoHookIssue = () => {
            const [num, setNum] = useState(0)
            const slowerFxn = ()=>{
                let sum = 0;
                alert("slowerfxn is called from Issue")
                for (let i = 100; i >= num; i--) {
                sum += i;
                }
                return sum;
            }

            //HERE outerNumber is not managed by useState.
            const outerNumber = slowerFxn(num)
            const [theme, setTheme] = useState("White")

            const changeTheme = ()=>{
                alert("change theme is called from Issue")
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
        export default UseMemoHookIssue
        ```
    - Code with solution:
        ```
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
        ```
    - With no useMemo, on theme change, slowerFxn will also get called along with theme change function.
    - With useMemo, on theme change, only theme change function only will get called.




- #### UseCallback and React.memo:
    - jhjkh
    - nknknk
    - Code: for Issue:
        - **Parent:** 
            ```
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
            ```
        
        - **Child:**
            ```
            import React from 'react'
            const IssueChild = ({text, fxn}) => {
                alert(`IssueChild ${text}`)
                return (
                    <button onClick={()=>fxn()}>{text}</button>
                )
            }
            export default IssueChild
            ```

    - Code with solution:
        - **Parent:**
            ```
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
            ```
        - **Child**
            ```
                import React, { memo } from 'react'
                const SolutionChild = ({text, fxn}) => {
                    alert(`SolutionChild ${text}`)
                    return (
                        <button onClick={()=>fxn()}>{text}</button>
                    )
                }
                export default memo(SolutionChild)
            ```

- #### CustomHooks:
    - jjbdfs
    - jhdbsjdbf
    - Repeating Code:
        - **User_1**
            ```
            import React, { useCallback, useState } from 'react';

            const User_1 = () => {
                const [age, setAge] = useState(18);
                const [salary, setSalary] = useState(100000)

                const increaseAge = useCallback(() => {
                    setAge(prev => prev + 1)
                }, [age])
                const increaseSalary = useCallback(() => {
                    setSalary(prev => prev + 100)
                }, [salary])
                return (
                    <div>User_1:
                    <div>Age: {age}</div>
                    <div>Salary: {salary}</div>
                    <button onClick={increaseAge}>Increase Age</button>
                    <button onClick={increaseSalary}>Increase Salary</button>
                    </div>
                )
            }

            export default User_1
            ```
        - **User_2**
            ```
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
            ```
    - Custom Hook is used for Age:
        - **Custom Hook**
            ```
            import React, { useState } from 'react'

            const useAge = (givenAge = 0) => {
                const [age, setGivenAge] = useState(givenAge);
                const setAge = ()=>{
                    setGivenAge(prev=> prev+1)
                }
                return [age, setAge]
            }

            export default useAge
            ```
        - **Custom Hook Usuage**
            ```
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
            ```