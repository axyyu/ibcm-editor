import React from "react";

class IbcmInsert extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.insertRow.bind(this)}
        title="Add Row"
        className="ibcm-insert"
      >
        <i className="fal fa-plus"></i>
      </button>
    );
  }
}

export default IbcmInsert;
