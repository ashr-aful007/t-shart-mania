import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncal from '../Uncal/Uncal';
import './Grandpa.css';

 export const RingContext = createContext('Matir Ring')
 export const MonyContext = createContext(555)

const Grandpa = () => {
     const [house, setHouse] = useState(1);
     const [mony, setMony] = useState(555)
     return (
          <RingContext.Provider value= {[house, setHouse]}>
          <MonyContext.Provider value={[mony, setMony]}>
          <div className='grandpa'>
               <h4>Grandpa</h4>
             <section className='flex'>
             <Father></Father>
             <Uncal></Uncal>
             <Aunty></Aunty>
             </section>
          </div>
          </MonyContext.Provider>
          </RingContext.Provider>
     );
};

export default Grandpa;