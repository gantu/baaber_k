import React from 'react';
import QRCode from 'qrcode.react';
import { FacebookButton, FacebookCount } from "react-social";

export default React.createClass({

	getInitialState(){
		return {status:this.props.status,
				id: this.props._id
				}
	},

	publish(){
		this.props.saveAction(this.state.id);
		this.setState({status:true});
	},
	
	render(){
		let url = Meteor.absoluteUrl('survey/public/'+this.props._id);

		if(this.state.status){

			return(
				<div className="row">
					<h3>{Meteor.absoluteUrl('survey/public/'+this.props._id)}</h3><br/>
					<p>Опубликован! Используйте QR код ниже. Можете также поделится на фейсбук.</p>
					<QRCode value={Meteor.absoluteUrl('survey/public/'+this.props._id)} />

					<div>
						<FacebookButton url={url} appId={141915796355070} className="btn btn-block btn-social btn-facebook">

	        				<FacebookCount url={url} />
	        					{url}
	      				</FacebookButton>
      				</div>
				</div>
				);
		}else{
			return(
				<div className="row">
					<h3>{Meteor.absoluteUrl('survey/public/'+this.props._id)}</h3><br/>
					<p>Не опубликован, чтобы опубликовать нажмите на : 
					<a className="btn btn-primary" href="#" onClick={this.publish}>Опубликовать!</a> </p>
					
				</div>
			);
		}
		
	}
	
});