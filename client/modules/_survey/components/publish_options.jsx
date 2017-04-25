import React from 'react';

export default React.createClass({

	
	render(){
		if(this.props.status){
			return(
				<div className="row">
					<h3>{Meteor.absoluteUrl('survey/public/'+this.props._id)}</h3><br/>
					<p>Already published please use link above!</p>
				</div>
				);
		}else{
			return(
				<div className="row">
					<h3>{Meteor.absoluteUrl('survey/public/'+this.props._id)}</h3><br/>
					<a className="button" href="#" onClick={this.props.saveAction.bind(null,this.props._id)}>Publish</a>
				</div>
			);
		}
		
	}
	
});