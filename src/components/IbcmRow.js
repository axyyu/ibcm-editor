import React from 'react';
import IbcmOpcode from './IbcmOpcode';
import IbcmComments from './IbcmComments';
import IbcmBody from './IbcmBody';
import IbcmDescription from './IbcmDescription';
import ibcmOpcodes from '../scripts/ibcmOpcodes';

function getDescription(row) {
  let desc = '';
  try {
    let body = row.body;
    let binary = parseInt(body, 16)
      .toString(2)
      .padStart(12, '0');
    switch (row.opcode) {
      case '0':
        desc = 'halt';
        break;
      case '1':
        let io = binary.charAt(0) === '0' ? 'input' : 'output';
        let chartype = binary.charAt(1) === '0' ? 'hex' : 'ascii';
        desc = `${io} ${chartype}`;
        break;
      case '2':
        let shift = binary.charAt(0) === '0' ? 'shift' : 'rotate';
        let dir = binary.charAt(1) === '0' ? 'left' : 'right';
        let count = parseInt(binary.substring(binary.length - 3), 2);
        desc = `${shift} ${dir} by ${count}`;
        break;
      default:
        let command = ibcmOpcodes[row.opcode];
        desc = `${command} ${body}`;
        break;
    }
  } catch (e) {
    console.log(e);
  }
  return desc;
}

class IbcmRow extends React.Component {
  updateOpcode(opcode) {
    let code = { ...this.props.ibcm };
    code.opcode = opcode;
    if (!code.userEdit) code.description = getDescription(code);
    this.props.editor(this.props.addr, code);
  }
  updateComments(comments) {
    let code = { ...this.props.ibcm };
    code.comments = comments;
    this.props.editor(this.props.addr, code);
  }
  updateBody(body) {
    let code = { ...this.props.ibcm };
    code.body = body;
    if (!code.userEdit) code.description = getDescription(code);
    this.props.editor(this.props.addr, code);
  }
  updateDescription(desc) {
    let code = { ...this.props.ibcm };
    if (code.userEdit) code.description = desc;
    this.props.editor(this.props.addr, code);
  }
  updateUserEdit() {
    let code = { ...this.props.ibcm };
    code.userEdit = !code.userEdit;
    if (!code.userEdit) code.description = getDescription(code);
    this.props.editor(this.props.addr, code);
  }
  render() {
    return (
      <div className='ibcm-row' id={this.props.addr}>
        <div className='ibcm-address'>
          {this.props.addr.toString(16).padStart(3, '0')}
        </div>
        <div className='ibcm-value'>
          <IbcmOpcode
            opcode={this.props.ibcm.opcode}
            updateOpcode={this.updateOpcode.bind(this)}
          ></IbcmOpcode>
          <IbcmBody
            body={this.props.ibcm.body}
            updateBody={this.updateBody.bind(this)}
          />
        </div>
        <IbcmDescription
          description={this.props.ibcm.description}
          userEdit={this.props.ibcm.userEdit}
          updateDescription={this.updateDescription.bind(this)}
          updateUserEdit={this.updateUserEdit.bind(this)}
        ></IbcmDescription>
        <IbcmComments
          comments={this.props.ibcm.comments}
          updateComments={this.updateComments.bind(this)}
        ></IbcmComments>
      </div>
    );
  }
}

export default IbcmRow;
