import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview.component.scss';


class Preview extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      collectionData : []
    };
  };

  render(){
    let ShopCategory = this.props.history.location.pathname.split('/').pop();

    return(

      <div>
        something
      </div>
      // <div className='collection-preview'>
      //   <div className='title'>{title}</div>
      //   <div className='preview'>
      //     {
      //       items
      //         .filter( (item, idx) => idx < 4 )
      //         .map( ( {id, ...itemProps}) => (
      //           <CollectionItem key={id} {...itemProps}/>
      //         )
      //       )
      //     }
      //   </div>
      // </div>
    );
  };
};

export default Preview;