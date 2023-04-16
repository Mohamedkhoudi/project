import React from 'react'
import ListCard from './ListCard'
import "./ListPass.css"

const ListPass = ({List}) => {
    console.log({List})
  return (
    <div className='ListPass'>
      {React.Children.toArray(List.map((el)=><ListCard list={el}/>))}
    </div>
  )
}

export default ListPass
