import React from 'react';

import ShopData from './shop.data';
import Preview from '../../components/preview/preview.component';
import MenuItem from '../../components/menu-item/menu-item.component';
import './shop.styles.scss';

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
          linkUrl: '/stationary'
        },
        {
          title: 'Fabric',
          imageUrl: OthersCategory,
          size: 'large',
          id: 3,
          linkUrl: '/fabric'
        },
        {
          title: 'Home',
          imageUrl: OthersCategory,
          size: 'large',
          id: 4,
          linkUrl: '/home'
        },
        {
          title: 'Accessory',
          imageUrl: OthersCategory,
          size: 'large',
          id: 5,
          linkUrl: '/accessory'
        },
        {
          title: 'About',
          imageUrl: OthersCategory,
          size: 'large',
          id: 6,
          linkUrl: '/about'
        }
      ]
    };
  };

  render() {
    // const collections = this.state.collections;
    const sectionsLeft = this.state.sections.slice(0,3);
    const sectionsRight = this.state.sections.slice(3,6);

    return(
      <div className='shop-page-div'>
        <div className='shop-category-menu'>
          {
            sectionsLeft.map(( {id, ...sectionsProps}) => (
              <MenuItem key={id} {...sectionsProps}/>
            ))          
          }
        </div>
        <div className='shop-category-menu'>
          {
            sectionsRight.map(({ id, ...sectionsProps }) => (
              <MenuItem key={id} {...sectionsProps} />
            ))
          }
        </div>

      </div>

      
    );
  };

}

export default ShopPage;