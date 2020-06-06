import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card/Card';
import './CardList.css'

const CardList = ({data}) => {
  return (
    <div className='row'>
     {data.map(food => (
       <div key={food.id} className='col-md-4 col-sm-6 col-lg-4'>
         <Card food={food} />
       </div>
     ))}
   </div >
 );
}

CardList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default CardList;
