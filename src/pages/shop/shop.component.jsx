import React from 'react';

import ShopData from './shop.data';
import Preview from '../../components/preview/preview.component';

class ShopPage extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      collections: ShopData,
    }

  }

  render() {

    const {collections} = this.state;

    return(

      <div className='shop-page'>
        {
          collections.map( ({id, ...otherPreviewProps}) => (
            <Preview key={id} {...otherPreviewProps} ></Preview>
          ))  
        }
      </div>
    )
  }

}

export default ShopPage;