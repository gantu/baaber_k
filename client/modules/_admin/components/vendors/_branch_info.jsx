import React from 'react';


export default React.createClass({
	renderTableBody(tableData){
		
	},
    
    render(){
    	const {record}=this.props;
    	if(record.branchType !== "main"){
    		return(<h3>This company is branch of another company!</h3>);
    	}else{
	        return(
	        	<div className="container">
		            <table className="table">
	       				<thead>
				          <tr>
				             <th>Название Компании</th>
				             <th>Address</th>
				             <th>Delete</th>
				          </tr>
				       </thead>
				       <tbody>
				       	
				      </tbody>
				    </table>
				    <a className="button" href="#" onClick={this.showAddBranch}>Add Branch</a>
			    </div>
	        );
    	}
    }
});