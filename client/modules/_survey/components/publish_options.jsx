import React from 'react';
import QRCode from 'qrcode.react';

export default React.createClass({

	
	render(){
		if(this.props.status){
			return(
				<div className="row">
					<h3>{Meteor.absoluteUrl('survey/public/'+this.props._id)}</h3><br/>
					<p>Already published please use link above!</p>
					<QRCode value={Meteor.absoluteUrl('survey/public/'+this.props._id)} />
				</div>
				);
		}else{
			return(
				<div className="row">
					<h3>{Meteor.absoluteUrl('survey/public/'+this.props._id)}</h3><br/>
					<a className="button" href="#" onClick={this.props.saveAction.bind(null,this.props._id)}>Publish</a><br/>
					<QRCode value={Meteor.absoluteUrl('survey/public/'+this.props._id)} />
				</div>
			);
		}
		
	}
	
});