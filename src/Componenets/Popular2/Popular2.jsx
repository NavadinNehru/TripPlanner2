import React from 'react'
import './Popular2.css'
import data_product from '../Assets/data2'
import Item from '../Item/Item'
const Popular2 = () => {
  return (
    <div className='popular'>
      <h1>POPULAR INTERNATIONAL TRIPS</h1>
      <hr/>
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default Popular2
