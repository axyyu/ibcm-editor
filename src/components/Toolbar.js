import React from 'react';

class Toolbar extends React.Component {
  //for the buttons, make the "hover" say "Add Line","New File","Export File" or smth
  render() {
    return (
      <div id='toolbar'>
        <h1>IBCM Editor</h1>
        <div>
          <button onClick={this.props.resetter.bind(this)} title='Reset'>
            <i className='fas fa-undo-alt'></i>
          </button>
          <button onClick={this.props.exportter.bind(this)} title='Download'>
            <i className='fas fa-file-download'></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
