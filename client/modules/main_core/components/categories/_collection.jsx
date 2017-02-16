import React from 'react';

export default React.createClass({

  render(){
    const {collection}=this.props;

    return(

        <ul className="media-list">
          {collection.map(record =>(
            <li className="media" key={record._id}>
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src="..." alt="..."></img>
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">{record.companyTypeName}</h4>
                <p>{record.description}</p>
            </div>
          </li>
          ))}
        </ul>

    );
  }
});
