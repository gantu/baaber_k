import React from 'react';
import Formsy from 'formsy-react';
import Q from './questions.jsx'
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

	resetForm() {
    // console.log('resetForm');
    this.refs.form.reset();
  },

  validSubmit(data) {
   // this.props.saveProfileInfo(data, this.props.record._id);
  },
  // invalidSubmit() {
  invalidSubmit() {
    // console.log('invalidSubmit', data);
  },

  enableButton() {
    // console.log('enable button');
    this.setState({ canSubmit: true });
  },

  disableButton() {
    // console.log('disable button');
    this.setState({ canSubmit: false });
  },

	getInitialState(){
		var surveys={
			name:"Survey 1",
			questions:[
				{
					id:"1",
					name:"Question1",
					type:"rating",
					answers:[
						{label:"ans1",value:"ans1"},
						{label:"ans2",value:"ans2"},
						{label:"ans3",value:"ans3"}
					]
				},
				{
					id:"2",
					name:"Question 2",
					type:"multi",
					answers:[
						{label:"ans1",value:"ans1"},
						{label:"ans2",value:"ans2"},
						{label:"ans3",value:"ans3"}
					]
				}
			]
		}

		return {
			layout: 'vertical',
      		validatePristine: true,
      		disabled: false,
      		canSubmit: false,
      		showToolbar:false,
			surveys:surveys
		};
	},
	toolbarToggle(){
		console.log("toggled");
		this.setState({showToolbar:true});
	},
	render(){

		let formClassName = 'vertical m-t';
		const {record,error,status} = this.props;

		return(
			
			<Formsy.Form className={formClassName}
            onValidSubmit={this.validSubmit}
            onInvalidSubmit={this.invalidSubmit}
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onChange={this.onChange}
            ref="form">

            <fieldset>
              {error ?
              <div className="alert alert-danger" onClick="">
                <span className="octicon octicon-megaphone" ></span>
                {error}
              </div> : null }

              {status ?
              <div className="alert alert-info" onClick="">
                <span className="octicon octicon-megaphone" ></span>
                {status}
              </div> : null }

			  <legend>{this.state.surveys.name}</legend>

			  {this.state.surveys.questions.map(function(q,index){
			  	return(
			  	<Q  key={q.id}
			  		id={q.id}
			  		name={q.name}
			  		type={q.type}
			  		options={q.answers}
			  	/>
			  	);
			  })}
			 </fieldset>
			  
			
            <Row layout={this.state.layout}>

              <input className="btn btn-primary block full-width m-b"
                formNoValidate={true}
                disabled={!this.state.canSubmit}
                type="submit"
                defaultValue="Готово" />

            </Row>

          </Formsy.Form>
		  
		);
	}
});
