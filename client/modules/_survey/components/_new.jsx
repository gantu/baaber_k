import React from 'react';

export default React.createClass({


	getInitialState(){
		return {};
	},

	render(){
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					Survey
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col1">
							<div className="input-group">
								<label> Как часто вы у нас обедаете? </label>
									<input type="text" list="browsers" />
									<datalist id="browsers">
									  <option value="Internet Explorer">A</option>
									  <option value="Firefox">A</option>
									  <option value="Chrome">B</option>
									  <option value="Opera">C</option>
									  <option value="Safari">D</option>
									</datalist> 
							</div>
						</div>
					</div>
				</div>
				<div className="panel-footer">
					<div className="btn-group">
						
						<button className="btn btn-primary">Save</button>
					</div>
					
				</div>
			</div>
		);
	}
});