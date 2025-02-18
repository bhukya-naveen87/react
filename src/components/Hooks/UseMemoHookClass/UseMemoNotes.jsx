import React from 'react'

const UseMemoNotes = () => {
  return (
    <>
        <div id="Notes">
        <ul style={{listStyle: "inside"}}>
          <li>Upon rendering and re-rendering, every function gets executed even if they are not needed to executed which results in hampering of site's performance.</li>
          <li>For example, I have 2 activities. One is to double the number and other is to change the them.</li>
        </ul>
      </div>
      <br /><br /><br />
    </>
  )
}

export default UseMemoNotes