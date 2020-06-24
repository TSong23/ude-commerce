import React from 'react';

import ShopData from './shop.data';
import Preview from '../../components/preview/preview.component';
import MenuItem from '../../components/menu-item/menu-item.component';
import './shop.styles.scss';

// Need to code out what happens when you click on MenuItem
// currently, it's blank. Probably should load a page(React Component)
// that has repective items such as porcelain and etc. 

class ShopPage extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      // collections: ShopData,
      sections: [
        {
          title: 'Kitchen',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ude-commerse.appspot.com/o/Kitchen%2FIMG_3550.jpeg?alt=media&token=b4d5bc0d-0af7-4621-9d30-ae2e88e0a2fd',
          size: 'large',
          id: 1,
          linkUrl: '/kitchen'
        },
        {
          title: 'Stationary',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ude-commerse.appspot.com/o/Stationary%2FIMG_0866.jpeg?alt=media&token=de5e976f-7478-40b1-91ac-aca409380324',
          size: 'large',
          id: 2,
          linkUrl: '/stationary'
        },
        {
          title: 'Fabric',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ude-commerse.appspot.com/o/Fabric%2FIMG_0200.jpeg?alt=media&token=50fb5046-c541-42c7-9338-be81a7676d00',
          size: 'large',
          id: 3,
          linkUrl: '/fabric'
        },
        {
          title: 'Home',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ude-commerse.appspot.com/o/Other%2FIMG_2286.jpg?alt=media&token=5df4c96d-c795-428f-87fc-6a206c9dc136',
          size: 'large',
          id: 4,
          linkUrl: '/home'
        },
        {
          title: 'Accessory',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ude-commerse.appspot.com/o/Accessory%2FIMG_0200.jpeg?alt=media&token=751a5aa1-343e-4bb6-9f14-bc1024a143c5',
          size: 'large',
          id: 5,
          linkUrl: '/accessory'
        },
        {
          title: 'About',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/ude-commerse.appspot.com/o/Other%2FIMGL0566.jpg?alt=media&token=b6870fc4-3cc3-45ea-be0b-e7b26fb3d4be',
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