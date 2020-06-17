import React from 'react';

import ShopData from './shop.data';
import Preview from '../../components/preview/preview.component';

import PorcelainCategory from '../../assets/porcelain_category_image.jpg';
import OthersCategory from '../../assets/others_category_image.jpg';

//Tuesday has come and gone

class ShopPage extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      collections: ShopData,
      sections: [
        {
          title: 'Porcelain',
          imageUrl: PorcelainCategory,
          size: 'large',
          id: 4,
          linkUrl: 'porcelain'
        },
        {
          title: 'Others',
          imageUrl: OthersCategory,
          size: 'large',
          id: 5,
          linkUrl: 'Others'
        }
      ]
    }

  }

  render() {
    const collections = this.state.collections;
    return(

      <div className='shop-page'>
        {
          collections.map( ({id, ...otherPreviewProps}) => (
            <Preview key={id} {...otherPreviewProps} ></Preview>
          ))  
        }
      </div>
    );
  };

}

export default ShopPage;