import React from 'react'
import TitleSnow from './TitleSnow'
import './snow.css'

function Snow({data}) {
  return (
    <>
    <div className='back'>
    <div class="snowMan">
  <div class="innerSnow">
    <div class="snowBall"></div>
    <div class="snowBall"></div>
    <div class="snowBall"></div>
  </div>
</div>
<div class="snowMan noBlur">
  <div class="innerSnow">
    <div class="snowBall"></div>
    <div class="snowBall"></div>
    <div class="snowBall"></div>
  </div>
</div>
<div class="snowFace">
  <div class="eye"></div>
  <div class="eye"></div>
  <div class="nose"></div>
  <div class="twigWrapper">
    <div class="twig shade"></div>
    <div class="twig"></div>
    <div class="twigi"></div>
  </div>
</div>
<div class="snowFall">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div> <div></div>
  <div></div> <div></div>
  <div></div> <div></div>
  <div></div> <div></div>
  <div></div> <div></div>
  <div></div>
  
</div>


</div>
    <TitleSnow data={data} />

    
    </>
  )
}

export default Snow