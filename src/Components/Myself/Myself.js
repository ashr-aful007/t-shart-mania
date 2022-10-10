import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

function Myself() {
  const ring = useContext(RingContext)
  return (
    <div>
    <h4>Myself</h4> 
     <p><small>Ring: {ring}</small></p>
    </div>
    
  )
}

export default Myself