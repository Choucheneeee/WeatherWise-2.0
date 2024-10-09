import React from 'react'
import './titleSnow.css'



function TitleSnow({ data }) {
    console.log(data)
  return (
    <>
    <div className="keyboard">
  <span className="key">{data}</span>
 
</div>


    </>
  )
}

export default TitleSnow