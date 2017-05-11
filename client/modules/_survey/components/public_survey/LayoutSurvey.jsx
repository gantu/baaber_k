import React from 'react';
import Header from './SurveyLayoutHeader.jsx';


export default  React.createClass( {

  render() {
    return (
        <div>
 		<Header />
    	<div className="container-fluid" >
        	{this.props.content()}
        </div>
        </div>
     	
    );
  }
});
