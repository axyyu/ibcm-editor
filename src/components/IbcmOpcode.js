import React from 'react';
import ibcmOpcodes from '../scripts/ibcmOpcodes';

class IbcmOpcode extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
  }
  toggle() {
    this.setState({ open: !this.state.open });
  }
  updateOpcode(key) {
    this.toggle();
    this.props.updateOpcode(key);
  }
  render() {
    let options = [];
    for (let key in ibcmOpcodes) {
      options.push(
        <li
          key={key}
          onClick={() => this.updateOpcode(key)}
        >{`${key} - ${ibcmOpcodes[key]}`}</li>
      );
    }

    return (
      <div className='ibcm-opcode'>
        <div className='ibcm-opcode-selected' onClick={() => this.toggle()}>
          {this.props.opcode}
        </div>
        {this.state.open && (
          <ul
            className='ibcm-opcode-dropdown'
            onMouseLeave={() => this.toggle()}
          >
            {options}
          </ul>
        )}
      </div>
    );
  }
}

export default IbcmOpcode;
