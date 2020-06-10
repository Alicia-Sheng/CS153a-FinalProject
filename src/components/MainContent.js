import React from 'react'

import RestaurantList from '../containers/RestaurantList';
import restaurantData from '../../assets/restaurant.js'

import CardList from '../containers/CardList';
import foodData from '../../assets/data.js'

import '../style.css'

function MainContent() {
  return (
    <>
      <div div className='container-fluid'>
        <RestaurantList data={restaurantData} />
        <div className='container'>
          <div className='row'>
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="title-wrapper text-center">
                <div className="title-inner">
                  <h2 itemProp="headline">Food you might like</h2>
                </div>
              </div>
              <CardList data={foodData}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainContent
