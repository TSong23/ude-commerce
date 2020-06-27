import React from 'react';
import {withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

class MenuItem extends React.Component{
  constructor(props){
    super(props);
  };

  render(){
    return(
      <div className={`${this.props.size} menu-item`}
        onClick={() => this.props.history.push(`${this.props.linkUrl}`)}
      >
        <div 
          className='background-image'
          style={{
            backgroundImage: `url(${this.props.imageUrl})`
          }}
        />

        <div className='content'>
          <h1 className='title'>{this.props.title}</h1>
        </div>

      </div>
    );
  };
};

export default withRouter(MenuItem);