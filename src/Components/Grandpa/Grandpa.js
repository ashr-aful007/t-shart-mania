import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncal from '../Uncal/Uncal';
import './Grandpa.css'
const Grandpa = () => {

     const house = 7;
     return (
          <div className='grandpa'>
               <h4>Grandpa</h4>
             <section className='flex'>
             <Father house={house}></Father>
             <Uncal house={house}></Uncal>
             <Aunty house={house}></Aunty>
             </section>
          </div>
     );
};

export default Grandpa;