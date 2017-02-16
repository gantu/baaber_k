import React from 'react';
import Formsy from 'formsy-react';


import {
  // Checkbox,
  // CheckboxGroup,
  //Input,
  // RadioGroup,
  //Row,
  //Select,
  File
  //Textarea

} from 'formsy-react-components';

export default React.createClass({

  onChange(data){
    this.props.uploadProfilePhoto(data.file,this.props.record._id);
  },
  deleteImage(image){
    this.props.deleteProfilePhoto(image,this.props.record._id);
  },

  getInitialState() {
    return {
      layout: 'vertical',
      validatePristine: true,
    };
  },
  renderImage(image,index){
    return(
      <div className="col-xs-6 col-md-3" key={index}>
        <a href={image.url()} className="thumbnail">
          <img src={image.url({store: 'thumbs'})} alt=""></img>
        </a>
        <a className="btn btn-danger delete" href="#" onClick={this.deleteImage.bind(this,image)}>Удалить</a>
      </div>
    );
  },
  render(){
    let formClassName = 'vertical m-t';

    var sharedProps = {
      layout: this.state.layout,
      validatePristine: this.state.validatePristine,
    };
    var {images,record,error,status}=this.props;


    return(
      <div>
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
        
        <div className="row">
          {this.props.images.map(this.renderImage)}
        </div>
      <Formsy.Form className={formClassName}
        onChange={this.onChange}
        ref="form">

        <fieldset>
          <File
            name="file"
            label="File picker"
            help="Warning: this returns a FileList that will need custom coding to be useful."
            multiple
       />
      </fieldset>
    </Formsy.Form>


    </div>

  );
  }
});
