import React from 'react';
import Papa from 'papaparse';
import flatten from 'flat';


export default React.createClass({

	downloadCSV(){
		var csv = Papa.unparse(this.props.data.map(flatten)); // items is in JSON format, use Papa to convert JSON to CSV
		window.open(encodeURI('data:text/csv;charset=utf-8,' + csv));
	},
	render(){
		return(
			<div className="panel panel-default">
        		<div className="panel-heading">Инструменты</div>
        			<div className="panel-body">
        				<div className="form-group">
        					<button type="button" className="btn btn-secondary" onClick={this.downloadCSV}>Export CSV</button>
        				</div>
        			</div> 
        	</div>


			);
	}
});