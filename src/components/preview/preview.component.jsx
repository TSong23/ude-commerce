import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import ShopData from '../../pages/shop/shop.data.js';
import './preview.component.scss';


class Preview extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    let ItemCategory = this.props.history.location.pathname.split('/').pop();
    let shopItems = ShopData[`${ItemCategory}`];

    return(
      <div className='collection-preview'>
        {
          shopItems.map( ( {id, ...itemProps}) => (
            <CollectionItem key={id} {...itemProps}/>
            )
          )
        }        
      </div>
    );
  };
};

export default Preview;