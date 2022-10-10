import React, { useContext } from 'react'
import Cusin from '../Cusin/Cusin'
import { MonyContext } from '../Grandpa/Grandpa'

function Aunty() {
  const [mony, setMony] = useContext(MonyContext)
  return (
    <div>
     <h4>Aunty</h4>
     <p><small>mony: {mony}</small></p>
     <button onClick={()=>setMony(mony + 1)}>Incrise</button>
     <section className='flex'>
          <Cusin mony={mony}></Cusin>
          <Cusin mony={mony}></Cusin>
     </section>
    </div>
  )
}

export default Aunty