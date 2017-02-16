import React from 'react';
import Formsy from 'formsy-react';
import {
  // Checkbox,
  // CheckboxGroup,
  Input,
  // RadioGroup,
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
    this.props.saveProfileInfo(data, this.props.record._id);
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

    render(){

      let formClassName = 'vertical m-t';

      var sharedProps = {
        layout: this.state.layout,
        validatePristine: this.state.validatePristine,
        disabled: this.state.disabled
      };

      var citySelectOptions = [
        {label:"Бишкек",value:"bishkek"},
        {label:"Oш",value:"osh"},
        {label:"Tалас",value:"talas"},
        {label:"Чолпоната",value:"cholponata"},
        {label:"НарынНарын",value:"naryn"},
        {label:"Каракол",value:"karakol"}
        ];

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

              <Input
                  {...sharedProps}
                  name="companyName"
                  value={record.companyName}
                  label="Название компании"
                  type="text"
                  placeholder="Название компании"
                  validations="minLength:3"
                  validationError="Название компании должно быть не менее 3-х символов."
                  required />

                <Textarea
                  {...sharedProps}
                  rows={3}
                  cols={40}
                  name="companyDescription"
                  label="Описание Компании"
                  value={record.companyDescription}
                  placeholder="Описание Компании"
                  help="This is some help text for the textarea."
              />

              <Input
                  {...sharedProps}
                  name="address"
                  value={record.address}
                  label="Адрес"
                  type="text"
                  placeholder="Адрес компании"
                  required
              />

              <Select
                {...sharedProps}
                name="city"
                label="Город"
                value={record.city}
                options={citySelectOptions}
                rquired
              />

            <Input
                  {...sharedProps}
                  name="phone"
                  value={record.phone}
                  label="Телефон"
                  type="text"
                  help="обязательный элемент"
                  validations="minLength:13"
                  validationError="Пожалуйста, укажите правильный номер телефона."
                  placeholder="+996 --- -- -- --"
                  required
              />

              <Input
                  {...sharedProps}
                  name="email"
                  value={record.email}
                  label="Email"
                  type="email"
                  placeholder="This is an email input."
                  autoComplete="off"
                  validations="isEmail"
                  validationError="Please provide a valid email address."

              />

              <Input
                {...sharedProps}
                name="website"
                label="Веб-сайт"
                value={record.website}
                type="text"
                placeholder="www.some-company.com"
              />

              <Input
                {...sharedProps}
                name="facebook"
                label="facebook"
                value={record.facebook}
                type="text"
                placeholder="www.facebook.com/some-company"
              />

           </fieldset>

            <Row layout={this.state.layout}>

              <input className="btn btn-primary block full-width m-b"
                formNoValidate={true}
                disabled={!this.state.canSubmit}
                type="submit"
                defaultValue="Сохранить" />

            </Row>

          </Formsy.Form>
        );
    }
});
