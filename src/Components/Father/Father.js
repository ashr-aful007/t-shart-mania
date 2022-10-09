import React from 'react'
import Brother from '../Brother/Brother'
import Myself from '../Myself/Myself'
import Sistar from '../Sistar/Sistar'

function Father({house}) {
  return (
    <div>
          <h4>Father</h4>
          <p><small>House: {house}</small></p>
     <section className='flex'>
     <Myself house={house}></Myself>
     <Brother house={house}></Brother>
     <Sistar house={house}></Sistar>
     </section>
    </div>
  )
}

export default Father