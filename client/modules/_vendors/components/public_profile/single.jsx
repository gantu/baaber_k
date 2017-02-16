import React from 'react';
import Slider from 'react-slick';
import Header from './_header';

const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
};

export default React.createClass({


  renderImage(image,index){
    return(
          <img key={index} src={image.url()} alt=""></img>
    );
  },

  render(){
    const {record,_images} = this.props;
    return(
      <div className="container-fluid">
      <Header record={record} />
      <div className="col-md-9">
        <div className="image_container">
          <Slider {...settings}>
            {_images.map(this.renderImage)}
          </Slider>
        </div>
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
