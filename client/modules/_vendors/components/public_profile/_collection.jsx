import React from 'react';

export default React.createClass({

  renderVendor(record,index){
        
        return(
          <div className="col-xs-6 col-md-3" key={index}>
            <div className="thumbnail">
              <a href="#">
                {record.images ? <img src={record.images.url({store: 'thumbs'})} alt={record.companyName}></img> : <p>bad</p>}
              </a>
              <div className="caption">
                <h4>{record.companyName}</h4>

              </div>
            </div>
          </div>
        );
  },
  render(){
    var {list}=this.props;
    return(
      <div className="row">
        {this.props.list.map(this.renderVendor)}

      </div>
    )

  }
});
