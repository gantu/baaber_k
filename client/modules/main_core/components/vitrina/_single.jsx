import React from 'react';

export default class extends React.Component {

  render() {
    const {record} = this.props;
    return (
      <div className="vitrina_container">
        <img className="vitrina_image" src={record.images.url({store: 'thumbs'})}></img>
        <p className="vitrina_text">
          { record.companyName }
        </p>
      </div>
    )
  }
}
