import React from 'react';


export default React.createClass({
	render(){
		const {collection} = this.props;
		return(
			<div>
				<table className = "table table-striped table-hover table-bordered">
					<thead>
						<tr>
							<th>Контакты</th>
							<th>Опрос</th>
						</tr>
					</thead>
					<tbody>
						{collection.map(record =>(
							<tr key={record._id}>
								<td>{record.contact_details}</td>
								<td>{record.survey_name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

		);
	}
});