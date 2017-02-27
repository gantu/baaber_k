import React from 'react';

export default React.createClass ({
	
	getInitialState(){
		return {
			qType:this.props.qType
		};	

	},

	render(){
		
		switch(this.props.qType){
			case "rating":
				return (<h3> Rating question will be here </h3>);
			case "select":
				return (<h3> Select question will be here </h3>);
			case "Comment":
				return (<h3> Comment question will be here </h3>);
			case "":
				return (<h3>Please select q Type to create question!</h3>)
		}
	}
});