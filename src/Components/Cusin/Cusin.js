import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

function Cusin() {
  const ring = useContext(RingContext)
  return (
    <div>
     <h4>Cusin</h4>
     <section>
          <p><small>ring: {ring}</small></p>
     </section>
     </div>
  )
}

export default Cusin