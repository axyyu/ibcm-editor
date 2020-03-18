import React from 'react';

class IbcmHeader extends React.Component {
  render() {
    return (
      <div className='ibcm-header'>
        <label>Memory</label>
        <label>Value</label>
        <label>Description</label>
        <label>Comments</label>
      </div>
    );
  }
}

export default IbcmHeader;
