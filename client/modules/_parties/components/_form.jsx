import React from 'react';
// import ReactDOM from 'react-dom';

import Formsy from 'formsy-react';
import {
  // Checkbox,
  // CheckboxGroup,
  Input,
  // RadioGroup,
  Row,
  Select,
  // File,
  // Textarea

} from 'formsy-react-components';

export default React.createClass({

  resetForm() {
    // console.log('resetForm');
    this.refs.form.reset();
  },

  validSubmit(data) {
     console.log('validSubmit', data);
    //this.props.submitAction(data);
    Bert.alert('Ernie has finished tubby time.', 'success', 'growl-top-right');
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

  getInitialState() {
    return {
      layout: 'vertical',
      validatePristine: true,
      disabled: false,
      canSubmit: false
    };
  },

  render() {

    let formClassName = 'vertical m-t';

    var sharedProps = {
      layout: this.state.layout,
      validatePristine: this.state.validatePristine,
      disabled: this.state.disabled
    };

    const {error,c_types} = this.props;

  //  c_types.forEach(entry => (console.log(entry.label)));

    return (

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

            <Input
                {...sharedProps}
                name="companyName"
                label="Название компании"
                help="обязательный элемент"
                type="text"
                placeholder="Название компании"
                value=""
                validations="minLength:3"
                validationError="Название компании должно быть не менее 3-х символов."
                required />

          
            <Input
                {...sharedProps}
                name="email"
                value=""
                label="Email"
                type="email"
                placeholder="Ваш адрес электронной почты."
                help="обязательный элемент"
                autoComplete="off"

                validations="isEmail"
                validationError="Пожалуйста, укажите действующий адрес электронной почты."
            />



          </fieldset>

          <Row layout={this.state.layout}>

            <input className="btn btn-primary block full-width m-b"
              formNoValidate={true}
              disabled={!this.state.canSubmit}
              type="submit"
              defaultValue="Отправить Запрос" />

          </Row>

        </Formsy.Form>

    );
  }
});
