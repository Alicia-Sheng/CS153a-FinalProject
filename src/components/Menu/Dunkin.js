import React from 'react'

import MenuList from '../../containers/MenuList'

import foodData from '../../../assets/data'

import '../../style.css'

function Dunkin() {
  return (
    <section>
      <div className="block">
        <div className="title-wrapper text-center">
          <div className="title-inner">
            <h2 itemProp="headline">Dunkin Donuts</h2>
          </div>
        </div>
        <MenuList data={foodData} dinHall="Dunkin Donuts" />
      </div>
    </section>
  )
}

export default Dunkin
