// 'use client'

import React, { useEffect, useState } from 'react'
import Choropleth from '../Choropleth/'
import Sidebar from '../Sidebar/'

import './MainPage.css'

export default function MainPage() {

const [local_authority, setLocalAuthority] = useState({
  name:'Select local authority by clicking on the map',
  link: false
})

const changeLocalAuthority = (value) => {
  setLocalAuthority(value)
}

useEffect(() => {
}, [local_authority])


  return (
    <div className='main-container'>
        {/* {local_authority} */}
          <div className='custom-sidebar'>
        <Sidebar local_authority={local_authority}/>
        </div>
        
        <div className='leaflet-container'>
        <Choropleth local_authority={local_authority} changeLocalAuthority={changeLocalAuthority}/>
        </div>

      

    </div>
  )
}
