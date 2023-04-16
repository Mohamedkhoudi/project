import React from 'react'
import { useParams } from 'react-router-dom'

const Hotel = ({List}) => {
  const {id}=useParams()
  const item = List.find(el=>el.id==id)
  return (
    <div>
      {item.name}
    </div>
  )
}

export default Hotel
