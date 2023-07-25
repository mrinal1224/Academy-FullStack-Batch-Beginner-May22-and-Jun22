import React, { useEffect} from 'react'


import {useDispatch , useSelector} from 'react-redux'

import { fetchProducts } from '../store/productSilce'
import { STATUSES } from '../store/productSilce'

import {add} from '../store/cartSlice'



const Products = () => {


const {data : products , status} = useSelector((state)=> state.products)

console.log(products)



  const dispatch = useDispatch()

  const handleAdd = (product)=>{
      dispatch(add(product))
  }


  useEffect(()=>{
      const getProducts = async ()=>{
         dispatch(fetchProducts())
      }

      getProducts()
     
  } , [])

  if(status === STATUSES.LOADING){

return <h2>Loading</h2>
  }

  if(status === STATUSES.ERROR){

    return <h2>Something is Wrong</h2>
      }





  return (
    <div>

        <div className='productsWrapper'>
            {
                products.map((product)=>{
                    return  <div className='card'> 
                           <img src={product.image}/>
                           <h6>{product.title}</h6>
                           <h5>{product.price}</h5>

                           <button onClick={()=> handleAdd(product)} className='btn'>Add to cart</button>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Products