import React from 'react';
import './LeftBar.css';

const LeftBarRow = ({Icon,title}) => {
  return (
    <div className='leftbar_row'>
        <Icon className='leftbar_icon'></Icon>
       <h4 className='leftbar_title'>{title}</h4>
    </div>
  )
}

export default LeftBarRow;
