import React from 'react';
import DrawChart from './draw_chart.jsx';
import GraphFilter from './graph_filter.jsx';
import Tools from './tools.jsx';

export default React.createClass({

    getInitialState(){
      return {
        responce:this.props.responce,
        survey:this.props.survey,
        answerCount:this.props.answerCount
      };
    },
    applyFilter(filter){
       
        this.props.applyFilter(this.state.survey._id,filter);
        //  this.setState({data:this.props.graph_data});
    },
    componentWillReceiveProps(nextProps) {
      this.setState({
        responce: nextProps.graph_data
      });
    },

    render(){
        return(
            <div>
                <div className="col-md-9">
                <p>Общее количество опрошенных людей: {this.state.answerCount}</p>
                <ul className="list-group">
                    {this.state.responce.map(record => (

                        <li key={record._id.seq} className="list-group-item">
                            <DrawChart data={record} />
                        </li>
                  ))}
                </ul>
                </div>

                <div className="col-md-3">
                    <div className="row">
                        <GraphFilter survey={this.state.survey} applyFilter={this.applyFilter}/>
                    </div>
                    <div className="row">
                        <Tools />
                    </div>    
                </div>
            </div>
        );

    }


});
