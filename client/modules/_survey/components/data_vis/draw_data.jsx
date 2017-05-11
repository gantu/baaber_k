import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import DrawChart from './draw_chart.jsx';

export default React.createClass({
    render(){
        const {returnObject,answerCount}=this.props;
        return(
            <div>
            <p>Общее количество опрошенных людей: {answerCount}</p>
            <ul className="list-group">
                {returnObject.map(record => (
                        
                    <li key={record._id} className="list-group-item">
                        <DrawChart data={record} />
                    </li>
                    
                
                    ))}
                   
            </ul>
            </div>
        );
      
    }
    
    
});