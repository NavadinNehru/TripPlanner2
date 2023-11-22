import React from 'react'
import './Popular3.css'
import data_product from '../Assets/data3'
import Item from '../Item/Item'
const Popular3 = () => {
  return (
    <div className='popular'>
      <h1>POPULAR DOMESTIC TRIPS</h1>
      <hr/>
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default Popular3
