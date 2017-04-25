import React from 'react';

import Formsy from 'formsy-react';
import {
  // Checkbox,
  // CheckboxGroup,
  Input,
  // RadioGroup,
  Row,
  // Select,
  // File,
  // Textarea

} from 'formsy-react-components';

export default React.createClass({

  resetForm() {
    this.refs.form.reset();
  },

  validSubmit(data) {
    // console.log('validSubmit', data);
    this.props.submitAction(data.email, data.password);
  },

  // invalidSubmit(data) {
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

    const {error} = this.props;

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
                name="email"
                value=""
                label="адрес почты"
                type="email"
                

                autoComplete="off"

                validations="isEmail"
                validationError="Пожалуйста, представьте действующий адрес электронной почты."

            />
            <Input
                {...sharedProps}
                name="password"
                value=""
                label="пароль"
                type="password"

                validations="minLength:4"
                validationError="Этот пароль выглядит немного коротким, попробуйте еще раз."

            />

          </fieldset>

          <Row layout={this.state.layout}>

            <input className="btn btn-primary block full-width m-b"
              formNoValidate={true}
              disabled={!this.state.canSubmit}
              type="submit"
              defaultValue="Войти" />
          </Row>

        </Formsy.Form>



    );
  }
});
