import React from 'react'
import './titleSnow.css'



function TitleSnow({ data }) {
    console.log(data)
  return (
    <>
    <div class="keyboard">
  <span class="key">{data}</span>
 
</div>


    </>
  )
}

export default TitleSnow