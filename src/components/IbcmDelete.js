import React from "react";

class IbcmDelete extends React.Component {
  render() {
    return (
      <div className="ibcm-insert">
        <button onClick={this.props.deleteRow.bind(this)} title="Delete Row">
          <i className="fal fa-times"></i>
        </button>
      </div>
    );
  }
}

export default IbcmDelete;
