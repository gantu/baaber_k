import React from 'react';

export default React.createClass(
{

	handleClick(item,e){
		
  		this.props.submitAction(item);
	},

	render() {
		return (
			<div className="btn-group">
  				<a className="btn btn-block btn-social btn-google"  onClick={this.handleClick.bind(this,'google')}>
    				<span className="fa fa-google"></span> Sign in with Google
  				</a>
  				<a className="btn btn-block btn-social btn-facebook" onClick={this.handleClick.bind(this,'facebook')}>
    				<span className="fa fa-facebook"></span> Sign in with Facebook
  				</a>
			</div>
		);
	}
}
); 