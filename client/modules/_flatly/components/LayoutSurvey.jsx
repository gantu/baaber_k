import React from 'react';


export default class extends React.Component {

  render() {
    return (
      <div>
        
        <div className="container-fluid">

            {this.props.content()}

        </div>

      </div>
    );
  }
}
