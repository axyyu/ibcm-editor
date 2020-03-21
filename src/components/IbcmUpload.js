import React from 'react';

class IbcmUpload extends React.Component {
  getFile(event) {
    const input = event.target;
    if ('files' in input && input.files.length > 0) {
      this.props.uploadFile(input.files[0]);
    }
  }

  render() {
    return (
      <div id='ibcm-upload'>
        <h4>Upload File</h4>
        <input
          type='file'
          id='input-file'
          onChange={this.getFile.bind(this)}
        ></input>
      </div>
    );
  }
}

export default IbcmUpload;
