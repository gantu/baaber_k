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
    this.props.sendRequestAction(data,this.props.vendorId);
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
  handleHideModal(){
    this.props.closeModal();
  },
  render(){
    let formClassName = 'vertical m-t';

    var sharedProps = {
      layout: this.state.layout,
      validatePristine: this.state.validatePristine,
      disabled: this.state.disabled
    };

    var eventSelectOptions = [
      {label:"event1",value:"event1"},
      {label:"event2",value:"event2"},
    {label:"event3",value:"event3"}

      ];

      const {vendorId,error,status} = this.props;


    return(
      <div>
        <button type="button" className="close" aria-label="Close" onClick={this.handleHideModal}><span aria-hidden="true">&times;</span></button>
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
                  name="fullName"
                  value=""
                  label="Имя и Фамилия"
                  type="text"
                  placeholder="Имя и Фамилия"
                  validations="minLength:3"
                  validationError="Ваше имя и фамилия должно быть не менее 3-х символов."
                  required />

            <Input
                  {...sharedProps}
                  name="phone"
                  value=""
                  label="Телефон"
                  type="text"
                  validations="minLength:13"
                  validationError="Пожалуйста, укажите правильный номер телефона."
                  placeholder="+996 --- -- -- --"
                  required
              />

              <Input
                  {...sharedProps}
                  name="email"
                  value=""
                  label="Email"
                  type="email"
                  placeholder="This is an email input."
                  autoComplete="off"
                  validations="isEmail"
                  validationError="Please provide a valid email address."
                  required
                  />
                  <Select
                    {...sharedProps}
                    name="eventType"
                    label="Event"
                    value=""
                    options={eventSelectOptions}
                    rquired
                  />

            <Textarea
              {...sharedProps}
              rows={3}
              cols={10}
              name="message"
              label="Сообщение"
              value="Я нашел/нашла вашу компанию через ToiPoi.kg.
              У нас планируется мероприатеие по выше указанной дате. Пожалуйста отправьте мне вашы цены."
              placeholder="Я нашел/нашла вашу компанию через ToiPoi.kg.
              У нас планируется мероприатеие по выше указанной дате. Пожалуйста отправьте мне вашы цены."
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

      </div>
    );
  }
});
