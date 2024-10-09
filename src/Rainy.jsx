import React from 'react'
import './rainy.scss'
import TitleRainy from './TitleRainy'

function Rainy({data}) {
  return (
<>
<div className="cloude">
  <div className="puffs"></div>
  <div className="rain">
    <div className="drop"></div>
     <div className="drop"></div>
     <div className="drop"></div>
     <div className="drop"></div>
     <div className="drop"></div>
  </div>
  <TitleRainy data={data} />
</div>




</>  )
}

export default Rainy