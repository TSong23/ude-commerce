import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import ShopData from '../../pages/shop/shop.data.test.js';
import './preview.component.scss';


class Preview extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    let ItemCategory = this.props.history.location.pathname.split('/').pop();
    let shopItems = ShopData[`${ItemCategory}`];
    console.log(ShopData);
    console.log(ItemCategory);
    console.log(shopItems);
    return(
      <div className='collection-preview'>
        {/* <div className='title'>{title}</div> */}
        <div className='preview'>
          {
            shopItems.map( ( {id, ...itemProps}) => (
                <CollectionItem key={id} {...itemProps}/>
              )
            )
          }
        </div>
      </div>
    );
  };
};

export default Preview;