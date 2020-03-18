import React from 'react';

class IbcmBody extends React.Component {
  handleChange(event) {
    this.props.updateBody(event.target.value);
  }
  fillin(event) {
    this.props.updateBody(event.target.value.padStart(3, '0'));
  }
  render() {
    return (
      <div className='ibcm-body'>
        <input
          type='text'
          maxLength='3'
          value={this.props.body}
          onChange={this.handleChange.bind(this)}
          onBlur={this.fillin.bind(this)}
        ></input>
      </div>
    );
  }
}

export default IbcmBody;
