import React from 'react'
import { VscStarFull,VscStarHalf,VscStarEmpty } from "react-icons/vsc";


function Rating({data}) {
  return (
    <div>
        {data.map(item=>(
            <>
                <h4>{item.name}</h4>
                <p>{item.comments}</p>
                <h5>Rating: {item.rating}</h5> 
                <p>Rating: <VscStarFull/>  <VscStarFull/>  <VscStarFull/> <VscStarHalf/> <VscStarEmpty/></p>

            </>
        ))}
    </div>
  )
}

export default Rating;