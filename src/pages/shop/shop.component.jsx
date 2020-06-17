import React from 'react';

import ShopData from './shop.data';
import Preview from '../../components/preview/preview.component';
import MenuItem from '../../components/menu-item/menu-item.component';

import PorcelainCategory from '../../assets/porcelain_category_image.jpg';
import OthersCategory from '../../assets/others_category_image.jpg';

//Tuesday has come and gone

class ShopPage extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      // collections: ShopData,
      sections: [
        {
          title: 'Porcelain',
          imageUrl: PorcelainCategory,
          size: 'large',
          id: 1,
          linkUrl: '/porcelain'
        },
        {
          title: 'Stationary',
          imageUrl: OthersCategory,
          size: 'large',
          id: 2,
          linkUrl: 'Others'
        },
        {
          title: 'Fabric',
          imageUrl: OthersCategory,
          size: 'large',
          id: 3,
          linkUrl: 'Others'
        },
        {
          title: 'Home',
          imageUrl: OthersCategory,
          size: 'large',
          id: 4,
          linkUrl: 'Others'
        },
        {
          title: 'Accessory',
          imageUrl: OthersCategory,
          size: 'large',
          id: 5,
          linkUrl: 'Others'
        },
        {
          title: 'About',
          imageUrl: OthersCategory,
          size: 'large',
          id: 6,
          linkUrl: 'Others'
        }
      ]
    };
  };

  render() {
    // const collections = this.state.collections;
    const sections = this.state.sections;
    
    return(

      // <div className='shop-page-div'>
        <div className='shop-category-menu'>
          {sections.map(( {id, ...sectionsProps}) => (
            <MenuItem key={id} {...sectionsProps}/>
          ))}
        </div>
      // </div>

      
    );
  };

}

export default ShopPage;