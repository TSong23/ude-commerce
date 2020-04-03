import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.component.scss';

import PorcelainCategory from '../../assets/porcelain_category_image.jpg';
import OthersCategory from '../../assets/others_category_image.jpg';


class Directory extends React.Component{

  constructor(){
    super();
    this.state = {
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

  render(){

    return(
      <div className='directory-menu'>
        {this.state.sections.map(( {id, ...sectionProps}) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory;