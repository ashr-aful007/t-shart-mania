import React, { useContext } from 'react'
import { MonyContext } from '../Grandpa/Grandpa'

function Uncal() {
  const [mony, setMony] = useContext(MonyContext)
  return (
    <div>
     <p>Uncal: {mony}</p> 
     <button onClick={()=> setMony(mony + 1000)}>set: 100</button>
      </div>
  )
}

export default Uncal