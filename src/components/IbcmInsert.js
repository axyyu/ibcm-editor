import React from "react";

class IbcmInsert extends React.Component {
  render() {
    return (
      <div className="ibcm-insert">
        <button onClick={this.props.insertRow.bind(this)} title="Add Row">
          <i className="fal fa-plus"></i>
        </button>
      </div>
    );
  }
}

export default IbcmInsert;
