import React from 'react'
import './Category.css'

function Category() {
  return (
    <div className='list'>
      <li className='Category'><b>EGGS,MEAT & FISH </b></li>
      <li ><img className='cat-btn' src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_02.png' alt='img'></img></li>
      <li ><img className='cat-btn' src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_03.png' alt='img' ></img></li>
      <li className='Category'><b>BUY MORE SAVE MORE</b></li>
      <li className='Category'><b>DEAL OF THE WEEK </b></li>
      <li className='Category'><b>COMBO STORE</b></li>
    </div>
  )
}

export default Category