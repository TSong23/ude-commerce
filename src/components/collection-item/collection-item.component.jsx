import React from 'react';
import './collection-item.style.scss';
import CustomButton from '../../components/custom-button/custom-button.component';


const CollectionItem = ({id, imageUrl,name, price }) => (
  

  <div className='collection-item'>
    <div 
      className='image'
      style = {{backgroundImage: `url(${imageUrl})`}}
    />

    <div className="collection-footer">
      <span className='name'>{name}</span>
    <span className='price'>${`${price}`}</span>
    </div>

    <CustomButton inverted>Add to cart</CustomButton>
  </div>

)


export default CollectionItem;
