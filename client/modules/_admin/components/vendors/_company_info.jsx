import React from 'react';


export default React.createClass({
    
    render(){
    	const {record} = this.props;
        return(
        	<div className="container-fluid">
      			<div className="col-md-9">
        			
        			<div className="panel panel-default">
          				<div className="panel-heading">
            				<h3 className="panel-title">{record.companyName}</h3>
          				</div>
          				<div className="panel-body">
            				<p>{record.companyDescription}</p>
          				</div>
			          	<ul className="list-group">
				            <li className="list-group-item">{record.companyType}</li>
				            <li className="list-group-item">{record.address}</li>
				            <li className="list-group-item">{record.city}</li>
				            <li className="list-group-item">{record.phone}</li>
				            <li className="list-group-item">{record.email}</li>
				            <li className="list-group-item">{record.website}</li>
				            <li className="list-group-item">{record.facebook}</li>
				        </ul>
		        	</div>
		      	</div>
		    </div>
        );
    }
});