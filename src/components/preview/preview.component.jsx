import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview.component.scss';


const Preview = ({title, items}) => (

  <div className='collection-preview'>

    <div className='title'>{title}</div>
    <div className='preview'>
      {
        items
          .filter( (item, idx) => idx < 4 )
          .map( ( {id, ...itemProps}) => (
            <CollectionItem key={id} {...itemProps}/>
          )
        )
      }
    </div>

  </div>
)

export default Preview;