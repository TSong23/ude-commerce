import React from 'react';
import MenuItem from '../menu-item/menu-item.component';


import './directory.component.scss';



class Directory extends React.Component{

  constructor(){
    super();
    this.state = {
      sections: [
        {
          title: 'Women',
          imageUrl: 'https://i.pinimg.com/originals/fd/cb/7e/fdcb7efe0587f1d09d91ac8f0ada2570.jpg',
          size: 'large',
          id: 4, 
          linkUrl: 'womens'
        },
        {
          title: 'Men',
          imageUrl: 'http://seoulbeats.com/wp-content/uploads/2014/10/20141012_seoulbeats_EpikHigh.png',
          size: 'large',
          id: 5,
          linkUrl: 'mens'
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