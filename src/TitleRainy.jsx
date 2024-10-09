import React from 'react'
import './titlerainy.css'


function TitleRainy({data}) {
  console.log(data,'rainyyyyyy')
  return (
    <span className="key_rain">{data}</span>
  )
}

export default TitleRainy