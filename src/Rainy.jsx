import React from 'react'
import './rainy.scss'
import TitleRainy from './TitleRainy'

function Rainy({data}) {
  return (
<>
<div class="cloude">
  <div class="puffs"></div>
  <div class="rain">
    <div class="drop"></div>
     <div class="drop"></div>
     <div class="drop"></div>
     <div class="drop"></div>
     <div class="drop"></div>
  </div>
  <TitleRainy data={data} />
</div>




</>  )
}

export default Rainy