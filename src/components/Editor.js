import React from 'react';
import Toolbar from './Toolbar';
import IbcmHeader from './IbcmHeader';
import IbcmRow from './IbcmRow';
import exportCode from '../scripts/exportCode';

/*

{
  ibcm : 
    [
      {
        opcode
        body
        comments
      }
    ]
}

*/

const blankIbcm = {
  opcode: '0',
  body: '000',
  comments: '',
  description: 'halt',
  userEdit: false
};

class Editor extends React.Component {
  constructor() {
    super();
    let initialIbcm = [];
    for (var i = 0; i < 20; i++) {
      initialIbcm.push(blankIbcm);
    }
    this.state = { ibcm: initialIbcm };
  }
  updateIbcm(row, code) {
    const ibcm = [...this.state.ibcm];
    ibcm[row] = code;
    this.setState({ ibcm: ibcm });
  }
  resetIbcm() {
    let initialIbcm = [];
    for (var i = 0; i < 100; i++) {
      initialIbcm.push(blankIbcm);
    }
    this.setState({ ibcm: initialIbcm });
  }
  exportIbcm() {
    exportCode(this.state.ibcm);
  }
  insertRow(index) {
    const ibcm = [...this.state.ibcm];
    ibcm.splice(index + 1, 0, blankIbcm);
    this.setState({ ibcm: ibcm });
  }
  render() {
    const rows = this.state.ibcm.map((row, index) => (
      <IbcmRow
        key={index}
        addr={index}
        ibcm={row}
        editor={this.updateIbcm.bind(this)}
        insertRow={this.insertRow.bind(this)}
      ></IbcmRow>
    ));
    return (
      <div id='editor'>
        <Toolbar
          resetter={this.resetIbcm.bind(this)}
          exportter={this.exportIbcm.bind(this)}
        ></Toolbar>
        <IbcmHeader></IbcmHeader>
        {rows}
      </div>
    );
  }
}

export default Editor;
