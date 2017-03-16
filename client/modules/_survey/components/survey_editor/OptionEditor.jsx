import React from 'react';
import ReactDOM from 'react-dom';


export default React.createClass({
    addOption(){
        if(this.props.addCallback){
            var name = ReactDOM.findDOMNode(this.refs.option_name).value;
            this.props.addCallback(name);
        }
    },
    removeOption(option_id){
        if(this.props.removeCallback){
            this.props.removeCallback(option_name);
        }
    },
    
    render(){
        var options=(
            <ul className="list-group">
                {this.props.options.map(function(option) {
                    return <li key={option.id} className="list-group-item" onClick={this.removeOption.bind(this, option.id)}>{option.name}</li>;
                }.bind(this))}
            </ul>  
        );
        
        return(
            <div className="row">
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">Add option</div>
                    <div className="panel-body">
                      <div className="form-group">
                        <label>Option name</label>
                        <input type="text" className="form-control" placeholder="Option name" ref="option_name" />
                      </div>
                      <br />
                      <button className="btn btn-default" onClick={this.addOption}>Add option</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">Current options</div>
                    <div className="panel-body">
                      <p>Below are the current options for this question.<br/><b>You can delete options by clicking on them.</b></p>
                      {options}
                    </div>
                  </div>
                </div>
            </div>
        );
    }
    
    
});