import React from 'react';
import Formsy from 'formsy-react';

import {
  // Checkbox,
  // CheckboxGroup,
  Input,
  RadioGroup,
  Row,
  Select,
  // File,
  Textarea

} from 'formsy-react-components';


export default React.createClass({

	render(){
		switch(this.props.type){
			case "rating":
				return(
				<RadioGroup name={this.props.id}
				label={this.props.name}
				value=""
				options={this.props.options} />
			);
			case "multi":
				return(
					<Select 
						name={this.props.id}
						label = {this.props.name}
						value=""
						options={this.props.options}
					/>
				);
		}
	}
});