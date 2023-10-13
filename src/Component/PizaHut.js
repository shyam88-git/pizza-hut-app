import React, { useState } from 'react';
import { addToCart } from '../redux/pizahut/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
;


function PizaHut() {
  const[count,setCount]=useState({count:50});
  const dispatch=useDispatch();
  const result=useSelector((state)=>state.cartData);


  
    
  return (
    <>
    <section className='p-3'>
      <div className='container-fluid'>
        <div className='row align-items-center'>

          <div className='col'>
            <p className='h3 text-danger'>Piza Hut</p>
            <p className='lead '>A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically. Modern digital electronic computers can perform generic sets of operations known as programs. These programs enable computers to perform  operating system</p>
          </div>
        </div>
      </div>

    </section>

    <selection className='p-3'>

      <div className='row'>
        <div className='col-md-5'>
        <img className='container  img-thumbnail' src= "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg "/>

          
        </div>

        <div className='col-md-7'>

            <p className='h2 text-danger'>Chicken Piza</p>
            <p className='h4'>Available:
            <span className='font-weight-bold'>{result.length}</span></p>

            <button onClick={()=>dispatch(addToCart(setCount({count:count+1})))} className='btn btn-success btn-sm'>Buy Pizza</button>
            <p>A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically. Modern digital electronic computers can perform generic sets of operations known as programs. These programs enable computers to perform operating system</p>
           
        </div>
      </div>
    

    </selection>
    
    </>
  )
}

export default PizaHut;