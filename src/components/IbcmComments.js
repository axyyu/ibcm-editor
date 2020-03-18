import React from 'react';

class IbcmComments extends React.Component {
  handleChange(event) {
    this.props.updateComments(event.target.value);
  }
  render() {
    return (
      <div className='ibcm-comments'>
        <input
          type='text'
          value={this.props.comments}
          onChange={this.handleChange.bind(this)}
        ></input>
      </div>
    );
  }
}

export default IbcmComments;
