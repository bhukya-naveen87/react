import React from 'react'

const StopPropagation = () => {
    const normalropagationParent = (e) => {
        alert("Normal Parent is clicked")
    }
    const normalPropagationChild = (e) => {
        alert("Normal Child is clicked")
    }
    const stopPropagationParent = (e) => {
        alert("Stop Parent is clicked")
    }
    const stopPropagationChild = (e) => {
        e.stopPropagation();
        alert("Stop Child is clicked")
    }
    return (
        <div>
            <div>
                Normal Propation
                <div onClick={normalropagationParent} style={{ border: "1px solid" }}>
                    Normal Parent
                    <div onClick={normalPropagationChild} style={{ border: "1px solid" }}>
                        Normal Child: On click both parent and child are called
                    </div>
                </div>
            </div>

            <hr />
            <br /><br /><br />

            <div>Stop Propagation
                <div onClick={stopPropagationParent} style={{ border: "1px solid" }}>
                    Stop Parent
                    <div onClick={stopPropagationChild} style={{ border: "1px solid" }}>
                        Stop Child: Only child will be called
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StopPropagation