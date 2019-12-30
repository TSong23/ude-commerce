import React from 'react';
import MenuItem from '../menu-item/menu-item.component';


import './directory.component.scss';



class Directory extends React.Component{

  constructor(){
    super();
    this.state = {
      sections: [
        {
          title: 'Men',
          imageUrl: 'http://seoulbeats.com/wp-content/uploads/2014/10/20141012_seoulbeats_EpikHigh.png',
          size: 'large',
          id: 5
        },
        {
          title: 'Women',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1BOCTzKet7ACvH4o7rXBNYJ0ZJVMZHGq27WG68l-83zEdjnC&s',
          size: 'large',
          id: 4
        }
      ]

    }
  }

  render(){

    return(
      <div className='directory-menu'>
        {this.state.sections.map(( {title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory;