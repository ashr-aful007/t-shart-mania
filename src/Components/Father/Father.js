import React, { useContext } from 'react'
import Brother from '../Brother/Brother'
import { RingContext } from '../Grandpa/Grandpa'
import Myself from '../Myself/Myself'
import Sistar from '../Sistar/Sistar'

function Father() {
  const [house, setHouse] = useContext(RingContext)
  return (
    <div>
          <h4>Father</h4>
          <p><small>ring: {house}</small></p>
          <button onClick={()=> setHouse(house + 1)}>Incrise</button>
     <section className='flex'>
     <Myself ring={house}></Myself>
     <Brother ring={house}></Brother>
     <Sistar ring={house}></Sistar>
     </section>
    </div>
  )
}

export default Father