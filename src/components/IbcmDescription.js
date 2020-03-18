import React from 'react';

class IbcmDescription extends React.Component {
  handleChange(event) {
    this.props.updateDescription(event.target.value);
  }
  render() {
    return (
      <div className='ibcm-description'>
        <input
          type='text'
          value={this.props.description}
          onChange={this.handleChange.bind(this)}
          disabled={!this.props.userEdit}
        ></input>
        <button
          title='Toggle Edit'
          onClick={this.props.updateUserEdit.bind(this)}
        >
          {this.props.userEdit && <i className='fas fa-user-slash'></i>}
          {!this.props.userEdit && <i className='far fa-user-edit'></i>}
        </button>
      </div>
    );
  }
}

export default IbcmDescription;
